import "./RecipesPage.css";
import NavBar from "../components/NavBar";
import Search from "../components/Search";
import axios from "axios";
import { useEffect, useState } from "react";

function RecipesPage() {
  const [recipes, setRecipes] = useState([]);

  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:3000/recipes");
    setRecipes(response.data);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

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
    <>
      <div>
        <NavBar />
      </div>
      <div className="recipespage">
        <Search />
        <div className="found-recipes">
          {recipes.map((recipe, index) => (
            <div className="recipe-card" key={index}>
              <img className="recipe-card-image" src="Pizza.png"></img>
              <div className="recipe-card-info">
                <p className="recipe-card-title">{recipe.title}</p>
                {getRatingImage(recipe.rating)}
                <p className="recipe-card-text">
                  Nr ratinguri: {recipe.times_rated}
                </p>
                <p className="recipe-card-author">Author:</p>
                <p className="recipe-card-text">{recipe.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default RecipesPage;
