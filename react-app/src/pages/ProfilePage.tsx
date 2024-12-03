import "./ProfilePage.css";
import NavBar from "../components/NavBar";

function ProfilePage() {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="profilepage">
        <div className="profile-divider">
          <div className="profile-card rounded-4">
            <img className="profile-image" src="CookIcon.svg"></img>
            <input
              className="username"
              type="text"
              placeholder="Gogu Bucatar"></input>
          </div>
          <div className="profile-info rounded-4">
            <input
              className="profile-textbox"
              type="email"
              placeholder="Email:"></input>
            <input
              className="profile-textbox"
              type="tel"
              placeholder="Telephone:"></input>
            <input
              className="profile-textbox"
              type="text"
              placeholder="College group:"></input>
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
