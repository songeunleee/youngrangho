import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.css";
import Activity from "./components/activity/activity";
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
              <Spot
                authService={authService}
                user={user}
                fileUpload={fileUpload}
                repository={repository}
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
            path="/activity"
            element={<Activity authService={authService} user={user} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
