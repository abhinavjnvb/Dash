import React from "react";
// import { auth } from "../firebase";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
function ProtectedRoute({ component: Component, ...rest }) {
  const { isAuth } = useSelector((state) => state.auth);
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
}

export default ProtectedRoute;
