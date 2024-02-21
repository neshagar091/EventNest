import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import '../assets/css/login.css'; // Using the same CSS file for styling

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleUsernameChange = (event) => {
    const newUsername = event.target.value;
    if (!/\s/.test(newUsername) && newUsername.length >= 6 && newUsername.length <= 12) {
      setUsername(newUsername);
      setUsernameError('');
    } else {
      setUsernameError('Username should be between 6 and 12 characters and should not contain spaces.');
    }
  };

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    // Simple email validation (you might want to use a more sophisticated validation)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(newEmail)) {
      setEmail(newEmail);
      setEmailError('');
    } else {
      setEmailError('Invalid email address.');
    }
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;

    // Password conditions
    const hasUpperCase = /[A-Z]/.test(newPassword);
    const hasLowerCase = /[a-z]/.test(newPassword);
    const hasDigit = /\d/.test(newPassword);

    if (
      newPassword.length >= 8 &&
      hasUpperCase &&
      hasLowerCase &&
      hasDigit
    ) {
      setPassword(newPassword);
      setPasswordError('');
    } else {
      setPasswordError('Password should be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one digit.');
    }
  };

  const handleConfirmPasswordChange = (event) => {
    const newConfirmPassword = event.target.value;

    if (newConfirmPassword === password) {
      setConfirmPassword(newConfirmPassword);
      setConfirmPasswordError('');
    } else {
      setConfirmPasswordError('Passwords do not match.');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!username) {
      setUsernameError('Please enter a username.');
    }
    if (!email) {
      setEmailError('Please enter an email address.');
    }
    if (!password) {
      setPasswordError('Please enter a password.');
    }
    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match.');
    }

    if (username && email && password && password === confirmPassword) {
      // Add logic for user registration (e.g., send data to a server)
      setUsernameError('');
      setEmailError('');
      setPasswordError('');
      setConfirmPasswordError('');
      console.log('Registration successful:', { username, email, password });
    }
  };

  return (
    <div className="loginmain">
      <div className="login">
        <div className="logincontainer">
          <h1 id="logtit">Sign Up</h1>
          <form onSubmit={handleSubmit}>
            <TextField
            className='textfieldlogin'
              id="username"
              label="Username"
              variant="filled"
              type="text"
              onChange={handleUsernameChange}
              required
            />
            <br />
            {usernameError && <p className="error-message">{usernameError}</p>}
            <br />
            <TextField
            className='textfieldlogin'
              id="email"
              label="Email"
              variant="filled"
              type="email"
              onChange={handleEmailChange}
              required
            />
            <br />
            {emailError && <p className="error-message">{emailError}</p>}
            <br />
            <TextField
            className='textfieldlogin'
              id="password"
              label="Password"
              variant="filled"
              type="password"
              onChange={handlePasswordChange}
              required
            />
            <br />
            {passwordError && <p className="error-message">{passwordError}</p>}
            <br />
            <TextField
              id="confirmPassword"
              label="Confirm Password"
              variant="filled"
              type="password"
              className='textfieldlogin'
              onChange={handleConfirmPasswordChange}
              required
            />
            <br />
            {confirmPasswordError && <p className="error-message">{confirmPasswordError}</p>}
            <br />
            <Button type="submit" variant="contained">
              Register
            </Button>
          </form>
          <p>
            Already have an account? <Link to="/Login">Log In</Link>
          </p>
        </div>
        <div className="loginimage">
          {/* You can add an image or other content for the SignUp page */}
        </div>
      </div>
    </div>
  );
}

export default SignUp;
