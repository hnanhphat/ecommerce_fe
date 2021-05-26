import React from "react";
// import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";

const ProtectedRoute = (rest) => {
  // const isAdmin = useSelector((state) => state.auth.isAdmin);
  if (true) return <Route {...rest} />;
  return <Redirect to="/login" />;
};

export default ProtectedRoute;
