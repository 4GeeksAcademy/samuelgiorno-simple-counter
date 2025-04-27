import React from "react";
import ReactDOM from "react-dom/client";
import SecondsCounter from "./components/SecondsCounter";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../styles/index.css";

let counter = 0;
const root = ReactDOM.createRoot(document.querySelector("#root"));
setInterval(() => {
  root.render(<SecondsCounter seconds={counter} />);
  counter++;
}, 1000);
