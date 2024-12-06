import "../index.css";
import { useState, useEffect } from "react";

function NavBar() {
  const [loggedIn, setLoggedIn] = useState(false);

  // Check login status from localStorage on component mount
  useEffect(() => {
    const isUserLoggedIn = localStorage.getItem("loggedIn") === "true";
    setLoggedIn(isUserLoggedIn);
  }, []);

  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.removeItem("loggedIn"); // Clear state on logout
    localStorage.setItem("username", "Guest")
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg p-3 shadow-lg rounded-bottom-5">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src="Chef.svg" alt="Chef Icon" />
            <img src="LogoIT.svg" alt="Logo" />
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/recipes">
                  <p className="navbar-item">Recipes</p>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/addrecipe">
                  <p className="navbar-item">Add Recipe</p>
                </a>
              </li>
            </ul>
            <ul className="navbar-nav">
              {loggedIn ? (
                <>
                  <li className="nav-item">
                    <a className="nav-link" href="/profile">
                      <button
                        type="button"
                        className="loginbtn btn-outline-primary btn rounded-4">
                        <p className="navbar-item">Profile</p>
                      </button>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link">
                      <button
                        className="loginbtn btn btn-outline-primary rounded-4"
                        onClick={handleLogout}>
                        <p className="navbar-item">Logout</p>
                      </button>
                    </a>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <a className="nav-link" href="/login">
                      <button
                        type="button"
                        className="loginbtn btn-outline-primary btn rounded-4">
                        <p className="navbar-item">Login</p>
                      </button>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/register">
                      <button
                        type="button"
                        className="loginbtn btn-outline-primary btn rounded-4">
                        <p className="navbar-item">Register</p>
                      </button>
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default NavBar;
