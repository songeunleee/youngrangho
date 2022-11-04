import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import "./app.css";
import Activity from "./components/activity/activity";
import Header from "./components/header/header";
import Home from "./components/home/home";
import Spot from "./components/spot/spot";

function App({ authService }) {
  const navigate = useNavigate();
  const [userId, setUserId] = useState(null);
  const [userName, setUserName] = useState(null);
  const setUser = (user) => {
    setUserId(user.uid);
    setUserName(user.displayName);
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        navigate("/");
      }
    });
  }, [authService]);

  return (
    <>
      <BrowserRouter>
        <Header
          authService={authService}
          setUser={setUser}
          userId={userId}
          userName={userName}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Spot
                authService={authService}
                userId={userId}
                userName={userName}
              />
            }
          />
          <Route
            path="/spot"
            element={
              <Spot
                authService={authService}
                userId={userId}
                userName={userName}
              />
            }
          />
          <Route
            path="/activity"
            element={
              <Activity
                authService={authService}
                userId={userId}
                userName={userName}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
