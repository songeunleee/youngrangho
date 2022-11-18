import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./app.module.css";
import Activity from "./components/activity/activity";
import AddForm from "./components/add_form/add_form";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Home from "./components/home/home";
import Spot from "./components/spot/spot";

function App({ authService, fileUpload, repository }) {
  const [user, setUser] = useState(null);

  const getUser = (user) => {
    setUser(user);
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUser(user);
      } else {
      }
    });
  }, [authService]);

  return (
    <>
      <BrowserRouter>
        <Header authService={authService} getUser={getUser} user={user} />
        <Routes>
          <Route
            path="/"
            element={
              <Activity
                authService={authService}
                repository={repository}
                user={user}
              />
            }
          />
          <Route
            path="/activity"
            element={
              <Activity
                authService={authService}
                repository={repository}
                user={user}
              />
            }
          />
          <Route
            path="/spot"
            element={
              <Spot
                authService={authService}
                user={user}
                fileUpload={fileUpload}
                repository={repository}
              />
            }
          />
          <Route
            path="/add"
            element={<AddForm user={user} repository={repository} />}
          />
          <Route
            path="/edit"
            element={<EditForm user={user} repository={repository} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
