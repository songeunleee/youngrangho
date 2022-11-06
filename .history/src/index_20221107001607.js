import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app";
import { firebaseApp } from "./service/firebase";
import AuthService from "./service/auth_service";
import FileUpload from "./service/file_upload";
import Repository from "./service/repositiry";

const repository = new Repository(firebaseApp);
const fileUpload = new FileUpload(firebaseApp);
const authService = new AuthService(firebaseApp);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App authService={authService} fileUpload={fileUpload} />
  </React.StrictMode>
);
