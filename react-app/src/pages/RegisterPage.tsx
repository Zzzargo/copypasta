import "./RegisterPage.css";
import NavBar from "../components/NavBar";

function RegisterPage() {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="registerpage">
        <div className="register-menu rounded-4">
          <div className="title-wrapper">
            <h1 className="register-menu-title">Hai, fă foamea cu noi!</h1>
          </div>
          <div className="register-inputbox-wrapper">
            <div className="register-input-wrapper">
              <img className="register-icon" src="/UserIcon.svg"></img>
              <input
                className="register-field"
                type="text"
                placeholder="Full name"></input>
            </div>
            <div className="register-input-wrapper">
              <img className="register-icon" src="/TelIcon.svg"></img>
              <input
                className="register-field"
                type="tel"
                placeholder="Telephone"></input>
            </div>
            <div className="register-input-wrapper">
              <img className="register-icon" src="/MailIcon.svg"></img>
              <input
                className="register-field"
                type="email"
                placeholder="E-mail"></input>
            </div>
            <div className="register-input-wrapper">
              <img className="register-icon" src="/LockIcon.svg"></img>
              <input
                className="register-field"
                type="password"
                placeholder="Password"></input>
            </div>
            <div className="register-input-wrapper">
              <img className="register-icon" src="/LockIcon.svg"></img>
              <input
                className="register-field"
                type="password"
                placeholder="Confirm password"></input>
            </div>
          </div>
          <div className="register-button-area">
            <button className="btn btn-success rounded-4">
              <h1>Sign up</h1>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
