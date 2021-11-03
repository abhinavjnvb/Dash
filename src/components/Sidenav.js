import React from "react";
import Settings from "../assets/images/setting_icon.svg";
import DashIcon from "../assets/images/dashboard_icon.svg";
import Transaction from "../assets/images/transaction_icon.svg";
import Users from "../assets/images/user_icon.svg";
import Schedules from "../assets/images/schedule_icon.svg";
import { Link } from "react-router-dom";
function Sidenav({ active }) {
  return (
    <div className="side-nav">
      <h2>Dash.</h2>
      <ul>
        <Link to="/dashboard">
          <li>
            <img className="side-icon" src={DashIcon} alt="icon" />
            <span className={active === "dashboard" ? "active" : ``}>
              Dashboard
            </span>
          </li>{" "}
        </Link>
        <li>
          <img className="side-icon" src={Transaction} alt="icon" />
          <span>Transcations</span>
        </li>
        <li>
          <img className="side-icon" src={Schedules} alt="icon" />
          <span>Schedules</span>
        </li>
        <Link to="/users">
          <li>
            <img className="side-icon" src={Users} alt="icon" />
            <span className={active === "users" ? "active" : ``}>Users</span>
          </li>
        </Link>
        <Link to="/settings">
          <li>
            <img className="side-icon" src={Settings} alt="icon" />
            <span className={active === "profile" ? "active" : ``}>
              Settings
            </span>
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Sidenav;
