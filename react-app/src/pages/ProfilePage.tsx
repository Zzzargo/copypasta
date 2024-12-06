import "./ProfilePage.css";
import NavBar from "../components/NavBar";

function ProfilePage() {
  const user = localStorage.getItem("username");
  const userphone = localStorage.getItem("phone");
  const useremail = localStorage.getItem("email");
  const college_group = localStorage.getItem("college_group");

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
