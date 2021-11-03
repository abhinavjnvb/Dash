import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSignup } from "../features/AuthSlice";
import Google from "../assets/images/google-icon.svg";
import Apple from "../assets/images/apple.svg";
import { useHistory } from "react-router";

function RegisterPage(props) {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [isTermsSelected, setIsTermsSelected] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const { isAuth, errorMessage } = useSelector((state) => state.auth);
  useEffect(() => {
    if (isAuth) {
      history.push("/dashboard");
    }
    if (errorMessage) {
      setError(errorMessage);
    }
  }, [isAuth, errorMessage, history]);
  //invoked after the input validation
  const handleSubmit = () => {
    setError("");
    dispatch(userSignup({ email, password }));
  };
  //validation input fields before the submission of form data
  const validateInput = (e) => {
    e.preventDefault();
    if (password !== confirm) {
      setError("Please enter the same password in both fields.");
    } else if (!isTermsSelected) {
      setError("Please accept terms and conditions before proceeding.");
    } else if (
      first &&
      last &&
      email &&
      password &&
      password.length > 6 &&
      confirm &&
      isTermsSelected
    ) {
      handleSubmit();
    }
  };
  const handleChange = (e) => {
    if (e.target.id === "firstName") {
      setFirst(e.target.value.trim());
    } else if (e.target.id === "lastName") {
      setLast(e.target.value.trim());
    } else if (e.target.id === "email_id") {
      setEmail(e.target.value.trim());
    } else if (e.target.id === "pwd") {
      setPassword(e.target.value.trim());
    } else {
      setConfirm(e.target.value.trim());
    }
  };
  return (
    <div className="signin-wrapper">
      <h3>Create an account</h3>
      <p>Create an account to use dashboard</p>
      {error && error.length > 0 ? <p className="error">{error}</p> : ""}
      <div className="signin-options">
        <div className="social-login">
          <img src={Google} alt="icon" />
          <span>Sign up with Google</span>
        </div>
        <div className="social-login">
          <img src={Apple} alt="icon" />
          <span>Sign up with Apple</span>
        </div>
      </div>
      <form className="form-container" onSubmit={validateInput}>
        <div className="name-group">
          <div className="flex-column">
            <label htmlFor="firstName" required>
              First Name
            </label>
            <input
              onChange={handleChange}
              type="text"
              className="name-field"
              required
              id="firstName"
              value={first}
            />
          </div>
          <div className="flex-column">
            <label htmlFor="lastName" required>
              Last Name
            </label>
            <input
              onChange={handleChange}
              type="text"
              className="name-field"
              required
              id="lastName"
              value={last}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email_id" required>
            Email address
          </label>
          <input
            onChange={handleChange}
            type="email"
            id="email_id"
            value={email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pwd" required>
            Password
          </label>
          <input
            onChange={handleChange}
            type="password"
            id="pwd"
            value={password}
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword" required>
            Confirm password
          </label>
          <input
            onChange={handleChange}
            type="password"
            id="confirmPassword"
            value={confirm}
          />
        </div>
        <div className="terms">
          <input
            type="checkbox"
            name=""
            id="terms"
            className="check_icon"
            value={isTermsSelected}
            onChange={() => setIsTermsSelected(!isTermsSelected)}
          />
          <span>
            I agree the <a href="#d">terms and conditions</a>
          </span>
        </div>
        <button type="submit" className="submit-button">
          Sign Up
        </button>
      </form>
      <div className="register-link">
        Already a register user?
        <span onClick={() => props.toggleLogin(true)}> Sign in here</span>
      </div>
    </div>
  );
}

export default RegisterPage;
