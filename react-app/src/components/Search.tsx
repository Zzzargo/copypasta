import "./Search.css";
import { useState } from "react";

function Search({ onFilterAndSort }) {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [sortOrder, setSortOrder] = useState(null);

  const handleFilterChange = (rating) => {
    const newFilters = selectedFilters.includes(rating)
      ? selectedFilters.filter((r) => r !== rating)
      : [...selectedFilters, rating];

    setSelectedFilters(newFilters);
    onFilterAndSort(newFilters, sortOrder); // Pass updated filters to parent
  };

  const handleSortChange = (sortOption) => {
    setSortOrder(sortOption);
    onFilterAndSort(selectedFilters, sortOption); // Pass updated sorting to parent
  };

  return (
    <form className="search-wrapper" role="search">
      <div className="searchbar-wrapper rounded-3">
        <input
          className="searchbar rounded-3"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={(event) => {
            const allRecipes = document.querySelectorAll(".recipe-card");
            const searchContent = event.target.value;
            allRecipes.forEach((recipe) => {
              const title =
                recipe.querySelector(".recipe-card-title")?.textContent;
              if (title?.toLowerCase()?.includes(searchContent.toLowerCase()))
                recipe.classList.remove("hidden");
              else recipe.classList.add("hidden");
            });
          }}></input>

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
            {[5, 4, 3, 2, 1].map((rating) => (
              <li key={rating} className="dropdown-item">
                <img className="filter-stars" src={`${rating}stars.svg`}></img>
                <input
                  className="filter-checkbox"
                  type="checkbox"
                  onChange={() => handleFilterChange(rating)}></input>
              </li>
            ))}
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
            {["Top Rated", "Worst Rated", "Most Rated", "Least Rated"].map(
              (sortOption) => (
                <li
                  key={sortOption}
                  className="dropdown-item"
                  onClick={() => handleSortChange(sortOption)}>
                  <p className="sort-by">{sortOption}</p>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </form>
  );
}

export default Search;
