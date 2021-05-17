import React from "react";
import { Redirect, Route } from "react-router";

const ProtectedRoute = (rest) => {
  const isAuthenticated = true;
  if (isAuthenticated) return <Route {...rest} />;
  return <Redirect to="/login" />;
};

export default ProtectedRoute;
