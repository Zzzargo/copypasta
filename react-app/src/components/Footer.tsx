import "../pages/HomePage.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <a
          className="footer-icon"
          href="https://www.instagram.com/burlacu_vs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/InstagramIcon.svg" alt="Instagram" />
        </a>
        <a
          className="footer-icon"
          href="FacebookLink"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/FacebookIcon.svg" alt="Facebook" />
        </a>
        <a
          className="footer-icon"
          href="YoutubeLink"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/YoutubeIcon.svg" alt="Youtube" />
        </a>
        <a
          className="footer-icon"
          href="TwitchIsForThots"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="TwitchIcon.svg" alt="Twitch" />
        </a>
      </div>
    </>
  );
}

export default Footer;
