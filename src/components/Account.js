import React from "react";
import "../styles/_settings.scss";
import toggle from "../assets/images/switchtoggle.svg";
function Account() {
  return (
    <div>
      <div className="account-wrapper">
        <form className="form-container">
          <div className="title">Account</div>
          <div className="form-group">
            <label htmlFor="email_id" required>
              Email address
            </label>
            <input type="email" id="email_id" />
          </div>
          <div className="form-group">
            <label htmlFor="pwd" required>
              Password
            </label>
            <input type="password" id="pwd" />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword" required>
              Confirm password
            </label>
            <input type="password" id="confirmPassword" />
          </div>
          <button type="submit" className="save   ">
            Save
          </button>
        </form>
      </div>
      <div className="security-wrapper">
        <div className="title">Account</div>
        <div className="verification">
          <span>2-Step Verification</span>
          <img src={toggle} alt="switch" />
        </div>
      </div>
      <div className="delete-wrapper">
        <div className="title">Danger Zone</div>
        <button> Delete My Account </button>
      </div>
    </div>
  );
}

export default Account;
