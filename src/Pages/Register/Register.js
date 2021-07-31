import "./Register.css";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="Register">
      <span className="RegisterTitle">Register</span>
      <form className="RegisterForm">
        <label>Username</label>
        <input
          className="RegisterInput"
          type="text"
          placeholder="Enter your username..."
        />
        <label>Email</label>
        <input
          className="RegisterInput"
          type="text"
          placeholder="Enter your email..."
        />
        <label>Password</label>
        <input
          className="RegisterInput"
          type="password"
          placeholder="Enter your password..."
        />
        <button className="RegisterButton">Register</button>
      </form>
      <button className="RegisterLoginButton">
        <Link to="/Login" style={{ textDecoration: "none", color: "inherit" }}>
          Login
        </Link>
      </button>
    </div>
  );
}
