import "../index.css";

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg  p-3 shadow-lg rounded-bottom-5">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src="Chef.svg"></img>
            <img src="LogoIT.svg"></img>
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
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  <button type="button" className="loginbtn btn-outline-primary btn rounded-4">
                    <p className="navbar-item">Login</p>
                  </button>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/register">
                  <p className="navbar-item">Register</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
