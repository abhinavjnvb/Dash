import React, { useState } from "react";
import "../styles/landing.scss";
import RegisterPage from "./RegisterPage";
import SignInPage from "./SignInPage";
function LandingPage() {
  const [isLogin, setIsLogin] = useState(true);
  const toggleLogin = (bool) => {
    setIsLogin(bool);
  };

  return (
    <div className="landing-wrapper">
      <div className="section-1">
        <h2>Dash.</h2>
      </div>
      <div className="section-2">
        {isLogin ? (
          <SignInPage toggleLogin={toggleLogin} />
        ) : (
          <RegisterPage toggleLogin={toggleLogin} />
        )}
      </div>
    </div>
  );
}

export default LandingPage;
