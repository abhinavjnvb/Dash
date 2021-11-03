import React from "react";
import "../styles/_settings.scss";
import Avatar from "../assets/images/profile.jpg";
function Profile() {
  return (
    <div className="profile-wrapper">
      <div className="title">Profile</div>
      <div className="profile-content">
        <div className="profile-avatar">
          <img src={Avatar} alt="avatar" />
          <input type="file" id="file-upload" />
          <label htmlFor="file-upload" className="custom-file-upload">
            Change
          </label>
        </div>
        <form className="form-container">
          <div className="name-group">
            <div className="flex-column">
              <label htmlFor="firstName" required>
                First Name
              </label>
              <input type="text" className="name-field" id="firstName" />
            </div>
            <div className="flex-column">
              <label htmlFor="lastname" required>
                Last Name
              </label>
              <input type="text" className="name-field" id="lastname" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="date" required>
              Date of Birth
            </label>
            <input type="date" id="date" />
          </div>
          <div className="form-group">
            <label htmlFor="phone" required>
              Phone Number
            </label>
            <input type="text" id="phone" />
          </div>
          <div className="form-group">
            <label htmlFor="address" required>
              Address
            </label>
            <input type="text" id="address" />
          </div>

          <button type="submit" className="save">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default Profile;
