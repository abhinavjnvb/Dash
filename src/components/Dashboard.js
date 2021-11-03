import React from "react";
import "../styles/_dashboard.scss";
import "../styles/_container.scss";
import Header from "./Header";
import Sidenav from "./Sidenav";
import TransactionIcon from "../assets/images/total_transaction.svg";
import RevenueIcon from "../assets/images/revenue_icon.svg";
import LikesIcon from "../assets/images/likes.svg";
import UsersIcon from "../assets/images/users_icon.svg";
import Graph from "./Graph";
import PieChart from "./PieChart";
function Dashboard() {
  return (
    <div className="home-wrapper">
      <Sidenav active="dashboard" />
      <section className="main">
        <Header title="Dashboard" searchable={false} />
        <div className="dash-wrapper">
          <div className="block revenue">
            <img src={RevenueIcon} alt="icon" />
            <div>Revenue</div>
            <div className="value">$2,129,430</div>
          </div>
          <div className="block transcations">
            <img src={TransactionIcon} alt="icon" />
            <div>Transactions</div>
            <div className="value">1520</div>
          </div>
          <div className="block likes">
            <img src={LikesIcon} alt="icon" />
            <div>Likes</div>
            <div className="value">9721</div>
          </div>
          <div className="block users">
            <img src={UsersIcon} alt="icon" />
            <div>Users</div>
            <div className="value">982</div>
          </div>
        </div>
        <Graph />
        <div className="flex-row">
          <PieChart />
          <div className="schedule">
            <div className="title">Today's Schedule</div>
            <div className="meet">
              <div className="desc">Meeting with suppliers from Kuta Bali</div>
              <div className="time">14.00-15.00</div>
              <div className="location">at Sunset Road, Kuta, Bali </div>
            </div>
            <div className="meet">
              <div className="desc">Check operation at Giga Factory 1</div>
              <div className="time">14.00-15.00</div>
              <div className="location">at Central Jakarta </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
