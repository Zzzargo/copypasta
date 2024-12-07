import "./RecipesPage.css";
import NavBar from "../components/NavBar";
import Search from "../components/Search";
import axios from "axios";
import { useEffect, useState } from "react";

function RecipesPage() {
  // Set things
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [selectedRating, setSelectedRating] = useState(0);

  // Get all recipes
  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:3000/recipes");
    setRecipes(response.data);
    setFilteredRecipes(response.data);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  const applyFiltersAndSorting = (filters, sortOption) => {
    let updatedRecipes = [...recipes];

    // Apply filters
    if (filters.length > 0) {
      updatedRecipes = updatedRecipes.filter((recipe) =>
        filters.includes(Math.round(recipe.rating))
      );
    }

    // Apply sorting
    if (sortOption) {
      updatedRecipes.sort((a, b) => {
        if (sortOption === "Top Rated") return b.rating - a.rating;
        if (sortOption === "Worst Rated") return a.rating - b.rating;
        if (sortOption === "Most Rated") return b.times_rated - a.times_rated;
        if (sortOption === "Least Rated") return a.times_rated - b.times_rated;
        return 0;
      });
    }

    // Apply changes
    setFilteredRecipes(updatedRecipes);
  };

  const getRatingImage = (rating) => {
    switch (rating) {
      case 5:
        return <img className="rating" src="5stars.svg" alt="5 stars" />;
      case 4:
        return <img className="rating" src="4stars.svg" alt="4 stars" />;
      case 3:
        return <img className="rating" src="3stars.svg" alt="3 stars" />;
      case 2:
        return <img className="rating" src="2stars.svg" alt="2 stars" />;
      case 1:
        return <img className="rating" src="1star.svg" alt="1 star" />;
      default:
        return <p>No Rating</p>;
    }
  };

  // Hovering over a star for rating
  const handleHover = (rating) => setHoveredRating(rating);

  // Clicking on a star for rating
  const handleClick = (rating) => setSelectedRating(rating);

  const handleRatingSubmit = async () => {
    if (!selectedRating) {
      alert("Please select a rating!");
      return;
    }

    const userRatedKey = `${selectedRecipe.title}-rated`;

    // Check if the recipe is already rated by the current user
    if (localStorage.getItem(userRatedKey)) {
      alert("You have already rated this recipe!");
      return;
    }

    try {
      // Save the user's rating the recipe in localStorage
      localStorage.setItem(userRatedKey, selectedRating);

      // Send the rating to the backend
      await axios.patch("http://localhost:3000/recipes", {
        title: selectedRecipe.title,
        rated: selectedRating,
      });

      alert(
        `You rated "${selectedRecipe.title}" with ${selectedRating} stars!`
      );
      fetchAPI(); // Refresh the recipes list
      setSelectedRecipe(null); // Close the popup
    } catch (error) {
      console.error("Failed to submit rating", error);
      alert("An error occurred while submitting your rating.");
    }
  };

  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="recipespage">
        <Search
          onFilterAndSort={(filters, sortOption) =>
            applyFiltersAndSorting(filters, sortOption)
          }
        />
        <div className="found-recipes">
          {filteredRecipes.map((recipe, index) => (
            <div
              className="recipe-card"
              key={index}
              onClick={() => {
                setSelectedRecipe(recipe);
                setHoveredRating(0); // Reset hover state
                setSelectedRating(0); // Reset selected rating
              }}>
              <img
                className="recipe-card-image"
                src="Pizza.png"
                alt={recipe.title}></img>
              <div className="recipe-card-info">
                <p className="recipe-card-title">{recipe.title}</p>
                {getRatingImage(Math.round(recipe.rating))}
                <p className="recipe-card-text">
                  Nr ratinguri: {recipe.times_rated}
                </p>
                <p className="recipe-card-author">Author:</p>
                <p className="recipe-card-text">{recipe.author}</p>
              </div>
            </div>
          ))}
        </div>
        {selectedRecipe && (
          <div className="recipe-popup">
            <button
              className="close-button"
              onClick={() => setSelectedRecipe(null)}>
              x
            </button>
            <div className="popup-recipe-upper">
              <img
                className="popup-recipe-image"
                src="Pizza.png"
                alt={selectedRecipe.title}
              />
              <div className="popup-recipe-info">
                <h2 className="popup-recipe-title">{selectedRecipe.title}</h2>
                {getRatingImage(Math.round(selectedRecipe.rating))}
                <p className="popup-recipe-timesrated">
                  Nr ratinguri: {selectedRecipe.times_rated}
                </p>
                <p className="popup-recipe-text">Author:</p>
                <p className="popup-recipe-text"> {selectedRecipe.author}</p>
              </div>
              <div className="popup-recipe-rate">
                <h2 className="popup-rate-title">Rate this recipe</h2>
                <div className="stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={`star ${
                        star <= (hoveredRating || selectedRating)
                          ? "yellow"
                          : "grey"
                      }`}
                      onMouseEnter={() => handleHover(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                      onClick={() => handleClick(star)}>
                      ★
                    </span>
                  ))}
                </div>
                <button
                  className="btn btn-success rounded-5"
                  type="submit"
                  onClick={handleRatingSubmit}>
                  Submit
                </button>
              </div>
            </div>
            <div className="popup-recipe-description-title-container">
              <p className="popup-recipe-description-title">Description</p>
            </div>
            <p className="popup-recipe-description">
              {selectedRecipe.description}
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default RecipesPage;
