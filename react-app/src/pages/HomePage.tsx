import Contact from "../components/Contact";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import TopMenu from "../components/TopMenu";
import "./HomePage.css";

function HomePage() {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="homepage">
        {/* First part of the page */}

        <div className="top-section">
          <div className="logo">
            <img src="ChefIT.svg"></img>
          </div>
        </div>

        {/* Second part of the page */}

        <div className="bottom-section">
          <TopMenu />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default HomePage;
