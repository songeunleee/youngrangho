import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app";
import { firebaseApp } from "./service/firebase.js";
import AuthService from "./service/auth_service";
const root = ReactDOM.createRoot(document.getElementById("root"));
const authService = new AuthService(firebaseApp);
root.render(
  <React.StrictMode>
    <App authService={authService} />
  </React.StrictMode>
);
