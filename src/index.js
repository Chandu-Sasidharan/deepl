import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./globalStyles";
import Home from "./home";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Home />
  </React.StrictMode>,
  document.getElementById("root")
);
