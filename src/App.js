import React from "react";
import "./App.css";
import Routes from "./routes/Routes";

// the hoc
import { withNamespaces } from "react-i18next";

function App() {
  return <Routes />;
}

export default withNamespaces()(App);
