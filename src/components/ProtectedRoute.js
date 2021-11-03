import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
function ProtectedRoute({ component: Component, ...rest }) {
  //adding a protected route to give access to authorized users only.
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
