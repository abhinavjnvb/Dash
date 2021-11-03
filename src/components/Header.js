import React from "react";
import Notify from "../assets/images/bell.svg";
import Avatar from "../assets/images/avatar.jpg";
function Header({ title, handleSearch, searchable }) {
  const changeHandler = (e) => {
    handleSearch(e.target.value.trim());
  };
  return (
    <div className="header">
      <div className="title">{title}</div>
      <div className="tools-group">
        <input
          type="search"
          placeholder="Search..."
          onChange={changeHandler}
          disabled={!searchable}
        />
        <img src={Notify} alt="bell-icon" />
        <img className="avatar" src={Avatar} alt="icon" />
      </div>
    </div>
  );
}

export default Header;
