import "./AddRecipePage.css";
import NavBar from "../components/NavBar";
import { useState } from "react";
import axios from "axios";

function AddRecipePage() {
  const [recipeTitle, setRecipeTitle] = useState("");
  const [recipeDescription, setRecipeDescription] = useState("");
  // const [recipeTimes_Rated, setRecipeTimes_Rated] = useState("")
  // const [recipeRating, setRecipeRating] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh

    try {
      await axios.post("http://localhost:3000/recipes", {
        title: recipeTitle,
        description: recipeDescription,
        // times_rated: recipeTimes_Rated,
        // rating: recipeRating,
        author: localStorage.getItem("username"),
      });
      alert("Recipe added successfully!");
    } catch (error) {
      alert("Error registering recipe.");
      console.error(error);
    }
  };

  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="addrecipepage">
        <form className="add-recipe-menu rounded-4" onSubmit={handleSubmit}>
          <input
            type="text"
            className="recipe-field"
            placeholder="Recipe name:"
            value={recipeTitle}
            onChange={(e) => setRecipeTitle(e.target.value)}
          />
          <input
            type="text"
            className="recipe-field"
            placeholder="Description:"
            value={recipeDescription}
            onChange={(e) => setRecipeDescription(e.target.value)}
          />
          <form className="upload-form" action="/action_page.php">
            <input
              className="upload-button"
              type="file"
              id="myFile"
              name="filename"
            />
          </form>
          <button className="btn btn-success rounded-4" type="submit">
            <h1>Add recipe</h1>
          </button>
        </form>
      </div>
    </>
  );
}

export default AddRecipePage;
