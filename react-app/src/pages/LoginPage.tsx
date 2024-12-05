import "./LoginPage.css";
import NavBar from "../components/NavBar";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form from refreshing the page

    try {
      const response = await axios.post("http://localhost:3000/users/login", {
        email,
        password,
      });

      if (response.status === 200) {
        alert("Login successful!");
        localStorage.setItem("loggedIn", "true");
        navigate("/");
      } else {
        alert("Invalid credentials, please try again.");
      }
    } catch (error) {
      alert("Error logging in.");
      console.error(error);
    }
  };

  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="loginpage">
        <form className="login-menu rounded-4" onSubmit={handleSubmit}>
          <div className="login-menu-item">
            <h1 className="login-menu-title">Loghează-te, chiorăie mațele!</h1>
          </div>
          <div className="login-menu-item">
            <div className="input-wrapper">
              <img className="input-icon" src="/MailIcon.svg"></img>
              <input
                type="email"
                className="login-field"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-wrapper">
              <img className="input-icon" src="/LockIcon.svg"></img>
              <input
                type="password"
                className="login-field"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="login-menu-item">
            <button type="submit" className="btn btn-success rounded-4">
              <h1>Log in</h1>
            </button>
            <a className="recovery-link" href="/forgot-password">
              Forgot password
            </a>
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginPage;
