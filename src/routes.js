import { Route, Switch } from "react-router-dom";
import React from "react";
import LandingPage from "./components/LandingPage.js";
import ProtectedRoute from "./components/ProtectedRoute.js";
import Dashboard from "./components/Dashboard.js";
import UserList from "./components/UserList.js";
import Settings from "./components/Settings.js";
function routes() {
  return (
    <Switch>
      <Route path="/" exact component={LandingPage} />
      {/* adding the protected routes to give access to authorized users only */}
      <ProtectedRoute path="/dashboard" component={Dashboard} />
      <ProtectedRoute path="/users" component={UserList} />
      <ProtectedRoute path="/settings" component={Settings} />
    </Switch>
  );
}

export default routes;
