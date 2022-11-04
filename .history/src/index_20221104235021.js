import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app";
import { firebaseApp } from "./service/firebase";
import AuthService from "./service/auth_service.js";
const authService = new AuthService(firebaseApp);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App authService={authService} />
  </React.StrictMode>
);
