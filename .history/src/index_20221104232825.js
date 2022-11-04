import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app";
import { firebaseApp } from "firebase/app";
import AuthService from "./components/service/auth_service";
const authService = new AuthService(firebaseApp);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App authService={authService} />
  </React.StrictMode>
);
