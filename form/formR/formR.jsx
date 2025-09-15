import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./formR.css";

function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    username: "",
    password: "",
    confirmPassword: ""
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email";
    }

    if (!formData.name) {
      newErrors.name = "Required";
    }

    if (!formData.username) {
      newErrors.username = "Required";
    } else if (/\s/.test(formData.username)) {
      newErrors.username = "No spaces allowed";
    }

    if (!formData.password) {
      newErrors.password = "Required";
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[*@%$#])[A-Za-z\d*@%$#]{8,}$/.test(formData.password)) {
      newErrors.password = "Min 8 chars, 1 lowercase, 1 uppercase, 1 number & 1 special char";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Required";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords must match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Sign Up:", formData);

      navigate("/movies");
    }
  };

  return (
    <div className="form-container">
      <div className="site-title">
        <span>Movie Site</span>
      </div>

      <form className="form-box" onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Email: </label>
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="input" 
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>

        <div className="input-group">
          <label>Name: </label>
          <input 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="input" 
          />
          {errors.name && <div className="error">{errors.name}</div>}
        </div>

        <div className="input-group">
          <label>Username: </label>
          <input 
            type="text" 
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className="input" 
          />
          {errors.username && <div className="error">{errors.username}</div>}
        </div>

        <div className="input-group">
          <label>Password: </label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleInputChange}
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

        <div className="input-group">
          <label>Confirm Password: </label>
          <input
            type={showConfirm ? "text" : "password"}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            className="input"
          />
          <button
            type="button"
            className="toggle-btn"
            onClick={() => setShowConfirm(!showConfirm)}
          >
            {showConfirm ? "Hide" : "Show"}
          </button>
          {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
        </div>

        <button type="submit" className="submit-btn">
          Sign Up
        </button>

        <div className="signup-link">
          <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;