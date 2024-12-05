import "./RegisterPage.css";
import NavBar from "../components/NavBar";
import { useState } from "react";
import axios from "axios";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      await axios.post("http://localhost:3000/users", {
        username,
        phone,
        email,
        password,
      });
      alert("User registered successfully!");
    } catch (error) {
      alert("Error registering user.");
      console.error(error);
    }
  };

  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="registerpage">
        <form className="register-menu rounded-4" onSubmit={handleSubmit}>
          <div className="title-wrapper">
            <h1 className="register-menu-title">Hai, fă foamea cu noi!</h1>
          </div>
          <div className="register-inputbox-wrapper">
            <div className="register-input-wrapper">
              <img className="register-icon" src="/UserIcon.png"></img>
              <input
                className="register-field"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}></input>
            </div>
            <div className="register-input-wrapper">
              <img className="register-icon" src="/TelIcon.svg"></img>
              <input
                className="register-field"
                type="tel"
                placeholder="Telephone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}></input>
            </div>
            <div className="register-input-wrapper">
              <img className="register-icon" src="/MailIcon.svg"></img>
              <input
                className="register-field"
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            <div className="register-input-wrapper">
              <img className="register-icon" src="/LockIcon.svg"></img>
              <input
                className="register-field"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}></input>
            </div>
            <div className="register-input-wrapper">
              <img className="register-icon" src="/LockIcon.svg"></img>
              <input
                className="register-field"
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}></input>
            </div>
          </div>
          <div className="register-button-area">
            <button type="submit" className="btn btn-success rounded-4">
              <h1>Sign up</h1>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default RegisterPage;
