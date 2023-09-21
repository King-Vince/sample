import React, { useState } from 'react';
import './Login.css';
import logoImage from './images/logo.png';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();

    if (email === '123@123' && password === '123') {
      setErrorMessage('Invalid email or password');
    } else {
      setErrorMessage('');
      // Perform actual login logic here
      
    }
  };

  return (
    <div className="login-wrapper">
      <div className="background"></div>
      <div className="login-container">
        <div className="logo-container">
          <img src={logoImage} alt="Logo" />
        </div>
        <div className="form-container">
          <form onSubmit={handleLogin}>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <div className='font'>
              <label htmlFor="font">Login to your account</label>
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Username"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="checkbox"
                value="RememberMe"
                id="rememberMe"
              />
              <label htmlFor="rememberMe">&nbsp;&nbsp;Remember me</label>
              <button type="submit" className="btn-primary">
                Login
              </button>
            </div>
          </form>
        </div>
        <div className="text-section">
          <p>2023 © Saint Francis College - Clearance Portal</p>
        </div>
      </div>
    </div>
  );
}

export default Login;