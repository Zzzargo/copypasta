import "./Search.css";

function Search() {
  return (
    <form className="search-wrapper" role="search">
      <div className="searchbar-wrapper rounded-3">
        <input
          className="searchbar rounded-3"
          type="search"
          placeholder="Search"
          aria-label="Search"></input>
        <img className="search-icon" src="/SearchIcon.png"></img>
      </div>
      <div className="extended-search">
        <div className="dropdown">
          <button
            className="btn btn-secondary rounded-4"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false">
            <p className="dropdown-name">Filter</p>
            <img className="dropdown-caret" src="/DropdownCaret.svg"></img>
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                <img className="filter-stars" src="5stars.svg"></img>
                <input className="filter-checkbox" type="checkbox"></input>
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                <img className="filter-stars" src="4stars.svg"></img>
                <input className="filter-checkbox" type="checkbox"></input>
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                <img className="filter-stars" src="3stars.svg"></img>
                <input className="filter-checkbox" type="checkbox"></input>
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                <img className="filter-stars" src="2stars.svg"></img>
                <input className="filter-checkbox" type="checkbox"></input>
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                <img className="filter-stars" src="1star.svg"></img>
                <input className="filter-checkbox" type="checkbox"></input>
              </a>
            </li>
          </ul>
        </div>
        <div className="dropdown">
          <button
            className="btn btn-secondary rounded-4"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false">
            <p className="dropdown-name">Sort</p>
            <img className="dropdown-caret" src="/DropdownCaret.svg"></img>
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Top Rated
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Worst Rated
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Most Rated
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Least Rated
              </a>
            </li>
          </ul>
        </div>
      </div>
    </form>
  );
}

export default Search;
