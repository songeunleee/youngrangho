import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app";
import { FirebaseApp } from "firebase/app";
import AuthService from "./service/auth_service.js";
const authService = new AuthService(FirebaseApp);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App authService={authService} />
  </React.StrictMode>
);
