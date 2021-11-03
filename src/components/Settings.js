import React from "react";
import Account from "./Account";
import Header from "./Header";
import Profile from "./Profile";
import Sidenav from "./Sidenav";
function Settings() {
  return (
    <div className="home-wrapper">
      <Sidenav active="profile" />
      <section className="main">
        <Header title="Settings" searchable={false} />
        <div className="settings-grid">
          <Profile />
          <Account />
        </div>
      </section>
    </div>
  );
}

export default Settings;
