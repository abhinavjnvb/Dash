import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { userSignin, googleSignin } from "../features/AuthSlice";
import Google from "../assets/images/google-icon.svg";
import Apple from "../assets/images/apple.svg";

function SignInPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const { isAuth, errorMessage } = useSelector((state) => state.auth);

  const signInWithGoogle = () => {
    dispatch(googleSignin());
  };
  useEffect(() => {
    if (isAuth) {
      history.push("/dashboard");
    }
    if (errorMessage) {
      setError(errorMessage);
    }
  }, [isAuth, errorMessage, history]);
  const handleChange = (e) => {
    if (e.target.id === "email_id") {
      setEmail(e.target.value.trim());
    } else if (e.target.id === "pwd") {
      setPassword(e.target.value.trim());
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (password.length > 6) {
      dispatch(userSignin({ email, password }));
    } else {
      setError("Password cannot be less than 6");
    }
  };
  return (
    <div className="signin-wrapper">
      <h3>Sign In</h3>
      <p>Sign in to your account</p>
      {error && error.length ? <p className="error">{error}</p> : ""}
      <div className="signin-options">
        <div className="social-login" onClick={signInWithGoogle}>
          <img src={Google} alt="icon" />
          <span>Sign in with Google</span>
        </div>
        <div className="social-login">
          <img src={Apple} alt="icon" />
          <span>Sign in with Apple</span>
        </div>
      </div>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email_id" required>
            Email address
          </label>
          <input
            type="email"
            id="email_id"
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="pwd" required>
            Password
          </label>
          <input
            type="password"
            id="pwd"
            value={password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="forgot-password">
          <a href="#link">Forgot password?</a>
        </div>
        <button type="submit" className="submit-button">
          Sign In
        </button>
      </form>
      <div className="register-link">
        Don't have an account?{" "}
        <span onClick={() => props.toggleLogin(false)}> Register here</span>
      </div>
    </div>
  );
}

export default SignInPage;
