import React from "react";
import "../styles/_container.scss";
import Header from "./Header";
import Dashboard from "./Dashboard";
function Home() {
  return (
    <div className="home-wrapper">
      <section className="main">
        <Header title="Dashboard" />
        <Dashboard />
      </section>
    </div>
  );
}

export default Home;
