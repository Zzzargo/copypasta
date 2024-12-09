import { useState, useEffect } from "react";
import "../pages/HomePage.css";
import axios from "axios";

function TopMenu() {
  const [topRecipes, setTopRecipes] = useState([]);

  const fetchRecipes = async () => {
    try {
      const response = await axios.get("http://localhost:3000/recipes");
      const allRecipes = response.data;

      const sortedTopRecipes = [...allRecipes]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 3); // Get the top 3 recipes

      setTopRecipes(sortedTopRecipes);
    } catch (error) {
      console.error("Failed to fetch recipes:", error);
    }
  };

  // Automatically call fetchRecipes when the component is rendered
  useEffect(() => {
    fetchRecipes();
  }, []);

  // Get the rating images
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

  return (
    <div className="top-menu">
      <h2 className="top-title">Top Rated Recipes</h2>
      <div className="top-recipes-table">
        {topRecipes.map((recipe, index) => (
          <div key={index} className="top-recipe">
            <img className="recipe-image" src="Pizza.png" alt={recipe.title} />
            <div className="recipe-info">
              <h4 className="top-recipe-title">{recipe.title}</h4>
              {getRatingImage(Math.round(recipe.rating))}
              <p className="info-text">Nr ratinguri: {recipe.times_rated}</p>
              <p className="info-text">Author:</p>
              <p className="author">{recipe.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopMenu;
