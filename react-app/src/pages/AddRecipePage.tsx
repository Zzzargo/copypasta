import "./AddRecipePage.css";
import NavBar from "../components/NavBar";

function AddRecipePage() {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="addrecipepage">
        <div className="add-recipe-menu rounded-4">
          <input
            type="text"
            className="recipe-field"
            placeholder="Recipe name:"
          />
          <input
            type="text"
            className="recipe-field"
            placeholder="Description:"
          />
          <form className="upload-form" action="/action_page.php">
            <input className="upload-button" type="file" id="myFile" name="filename" />
          </form>
          <button className="btn btn-success rounded-4">
            <h1>Add recipe</h1>
          </button>
        </div>
      </div>
    </>
  );
}

export default AddRecipePage;
