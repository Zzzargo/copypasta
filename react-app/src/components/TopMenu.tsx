import "../pages/HomePage.css";

function TopMenu() {
  return (
    <div className="top-menu">
      <h2 className="top-title">Top Rated Recipes</h2>
      <div className="top-recipes-table">
        <div className="top-recipe">
          <img className="recipe-image" src="/pizza.svg"></img>
          <div className="recipe-info">
            <h4>Reteta 1</h4>
            <img src="/5stars.svg"></img>
            <p className="info-text">Nr. ratinguri</p>
            <p className="info-text">Author:</p>
            <p className="author">Prenume Nume</p>
          </div>
        </div>
        <div className="top-recipe">
          <img className="recipe-image" src="/pizza.svg"></img>
          <div className="recipe-info">
            <h4>Reteta 1</h4>
            <img src="/5stars.svg"></img>
            <p className="info-text">Nr. ratinguri</p>
            <p className="info-text">Author:</p>
            <p className="author">Prenume Nume</p>
          </div>
        </div>
        <div className="top-recipe">
          <img className="recipe-image" src="/pizza.svg"></img>
          <div className="recipe-info">
            <h4>Reteta 1</h4>
            <img src="/5stars.svg"></img>
            <p className="info-text">Nr. ratinguri</p>
            <p className="info-text">Author:</p>
            <p className="author">Prenume Nume</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopMenu;
