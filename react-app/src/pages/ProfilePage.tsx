import "./ProfilePage.css";
import NavBar from "../components/NavBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
  const user = localStorage.getItem("username");
  const userphone = localStorage.getItem("phone");
  const useremail = localStorage.getItem("email");
  const college_group = localStorage.getItem("college_group");
  const navigate = useNavigate(); // Useful alias

  const handleRemoveAccount = async () => {
    try {
      const response = await axios.delete("http://localhost:3000/users", {
        data: { username: user },
      });
      if (!user) {
        alert("No user logged in!");
        return;
      }
      if (response.status === 200) {
        alert("Account deleted successfully");
        localStorage.clear();
        localStorage.setItem("logged in", "false");
        navigate("/");
      } else {
        alert("Something went wrong :(");
      }
    } catch (error) {
      alert("Error deleting account");
      console.log(alert);
    }
  };

  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="profilepage">
        <div className="profile-divider">
          <div className="profile-card rounded-4">
            <img className="profile-image" src="CookIcon.svg"></img>
            <p className="username">Username: {user}</p>
          </div>
          <div className="profile-info rounded-4">
            <p className="profile-textbox">Email: {useremail}</p>
            <p className="profile-textbox">Phone: {userphone}</p>
            <p className="profile-textbox">College group: {college_group}</p>
            <button
              type="button"
              className=" btn-outline-primary btn rounded-4"
              onClick={handleRemoveAccount}>
              <p className="navbar-item">Delete account</p>
            </button>
          </div>
        </div>
        <a href="/addrecipe">
          <button className="profile-add-recipe-btn rounded-4">
            Add a recipe
          </button>
        </a>
      </div>
    </>
  );
}

export default ProfilePage;
