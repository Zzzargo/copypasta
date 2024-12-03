import "./LoginPage.css";
import NavBar from "../components/NavBar";

function LoginPage() {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="loginpage">
        <div className="login-menu rounded-4">
          <div className="login-menu-item">
            <h1 className="login-menu-title">Loghează-te, chiorăie mațele!</h1>
          </div>
          <div className="login-menu-item">
            <div className="input-wrapper">
              <img className="input-icon" src="/MailIcon.svg"></img>
              <input type="email" className="login-field" placeholder="E-mail" />
            </div>
            <div className="input-wrapper">
              <img className="input-icon" src="/LockIcon.svg"></img>
              <input
                type="password"
                className="login-field"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="login-menu-item">
            <button className="btn btn-success rounded-4"><h1>Log in</h1></button>
            <a className="recovery-link" href="/forgot-password">Forgot password</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
