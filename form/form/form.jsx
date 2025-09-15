import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./form.css";

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

    if (!email) {
      newErrors.email = "Required";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Invalid email (xxx@xxxx.com)";
    }

    if (!password) {
      newErrors.password = "Required";
    } else if (password.length < 8) {
      newErrors.password = "At least 8 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Login:", { email, password });

      navigate("/movies");
    }
  };

  return (
    <div className="form-container">
      <div className="site-title">
        Movie Site
      </div>

      <form className="form-box" onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Email: </label>
          <input 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>

        <div className="input-group">
          <label>Password: </label>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
          />
          <button
            type="button"
            className="toggle-btn"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
          {errors.password && <div className="error">{errors.password}</div>}
        </div>

        <button type="submit" className="submit-btn">
          Login
        </button>

        <div className="signup-link">
          <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;