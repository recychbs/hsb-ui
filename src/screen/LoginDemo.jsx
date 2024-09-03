import React, { useState } from "react";
import logo from "../assets/image/logonew.png";
import { useNavigate,Link } from "react-router-dom";


const LoginDemo = () => {
  const [activeLogin, setActiveLogin] = useState("user");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear errors on change
    setErrors({
      ...errors,
      [name]: "",
    });
  };
  const navigator = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
console.log("Its working");

  let valid = true;
  let newErrors = { username: "", password: "" };
     // Validation
    if (formData.username.trim() === "") {
      newErrors.username = "Username is required";
      valid = false;
    }
    if (formData.password.trim() === "") {
      newErrors.password = "Password is required";
      valid = false;
    } else if (formData.password.length < 8) {
      newErrors.password = "Password is invalid";
      valid = false;
    }

    if (!valid) {
      setErrors(newErrors);
      return;
    }
    setMessage('')
    setError('')
    setStatus('')




    const csrfToken = getCookie('csrftoken'); // Function to get the CSRF token

    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                if (cookie.substring(0, name.length + 1) === `${name}=`) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
    

    
    fetch('https://recychbs.pythonanywhere.com/login-form/', {
        method: 'POST',
        credentials: 'include', // Ensures cookies are sent
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrfToken
        },
        body: JSON.stringify(formData),
      })
      .then(response => {
        if (response.ok) {
          return response.json().then(data => {
            setMessage(data.message);
            setStatus(data.status);
             // Navigate based on login type
            if (activeLogin === "user") {
              navigator('/Homeuser');
            } else if (activeLogin === "dealer") {
              navigator('/Applicationstatus'); 
            }
          });
        } else {
          return response.json().then(data => {
            setError(data.error);
                  if (activeLogin === "user") {
                      navigator('/');
                  } else if (activeLogin === "dealer") {
                      navigator('/'); 
                  }
          });
        }
      })
      .catch(error => {
        console.log("Error:", error);
      });
  
    
     
  };

  return (
    <div className="container-fluid p-0 m-0">
      <div className="login-container">
        <div className="col-lg-6 col-md-4 col-sm-4">
          <div className="login-left ps-3 pe-3">
            <img src={logo} className="logonew" alt="Logo" />
            <span className="logonew-text">RECYCHBS</span>
          </div>
        </div>
        <div className="col-lg-6 col-md-8 col-sm-8">
          <div className="login-right">
            <div style={{ display: "flex" }}>
              <div
                onClick={() => setActiveLogin("user")}
                style={{ cursor: "pointer", marginRight: "50px", fontWeight: activeLogin === "user" ? "900" : "700", fontSize: "20px" }}
              >
                <p>User Login</p>
              </div>
              <div
                onClick={() => setActiveLogin("dealer")}
                style={{ cursor: "pointer", fontWeight: activeLogin === "dealer" ? "900" : "700", fontSize: "20px" }}
              >
                <p>Dealer Login</p>
              </div>
            </div>
            {activeLogin === "user" && (
              <div className="login-box foruser">
                <h2 className="login-heading">LOGIN</h2>
                <form onSubmit={handleSubmit}>
                  <label className="login-label">
                    Username:
                    <input
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      className="login-input"
                      style={{ borderColor: errors.username ? "red" : "" }}
                    />
                    {errors.username && <div className="error-text">{errors.username}</div>}
                  </label>
                  <label className="login-label">
                    Password:
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="login-input"
                      style={{ borderColor: errors.password ? "red" : "" }}
                    />
                    {errors.password && <div className="error-text">{errors.password}</div>}
                  </label>
                  <Link to="/Forgotpassword" style={{ textDecoration: "none" }} className="forgot-password-link">
                    Forgot Password?
                  </Link>
                {/* Display success message */}
                {message && <p style={{ color: 'green' }}>{message}</p>}

{/* Display error message */}
{error && <p style={{ color: 'red' }}>{error}</p>}

                  <button
                    type="submit"
                    style={{ textDecoration: "none" }}
                    className="login-button"
                  >
                    Login
                  </button>
                </form>

                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: "700",
                    marginTop: "20px",
                    textAlign: "center",
                  }}
                >
                  New User?{" "}
                  <Link to="" style={{ textDecoration: "none" }}>
                    Register
                  </Link>
                </p>
              </div>
            )}
            {activeLogin === "dealer" && (
              <div className="login-box fordealer">
                <h2 className="login-heading">LOGIN</h2>
                <form onSubmit={handleSubmit}>
                  <label className="login-label">
                    Dealer Name:
                    <input
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      className="login-input"
                      style={{ borderColor: errors.username ? "red" : "" }}
                    />
                    {errors.username && <div className="error-text">{errors.username}</div>}
                  </label>
                  <label className="login-label">
                    Password:
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="login-input"
                      style={{ borderColor: errors.password ? "red" : "" }}
                    />
                    {errors.password && <div className="error-text">{errors.password}</div>}
                  </label>
                  <Link to="/Forgotpassword" style={{ textDecoration: "none" }} className="forgot-password-link">
                    Forgot Password?
                  </Link>


                {/* Display success message */}
                {message && <p style={{ color: 'green' }}>{message}</p>}

{/* Display error message */}
{error && <p style={{ color: 'red' }}>{error}</p>}
                  
                  <button
                    type="submit"
                    style={{ textDecoration: "none" }}
                    className="login-button"
                  >
                    Login
                  </button>
                </form>

                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: "700",
                    marginTop: "20px",
                    textAlign: "center",
                  }}
                >
                  New User?{" "}
                  <Link to="/Register1" style={{ textDecoration: "none" }}>
                    Register
                  </Link>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginDemo;
