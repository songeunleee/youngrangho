import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.css";
import Activity from "./components/activity/activity";
import Header from "./components/header/header";
import Home from "./components/home/home";
import Spot from "./components/spot/spot";

function App({ authService }) {
  const [userId, setUserId] = useState(null);
  const setUser = (userId) => {
    setUserId(userId);
  };
  return (
    <>
      <BrowserRouter>
        <Header authService={authService} setUser={setUser} />
        <Routes>
          <Route path="/" element={<Spot authService={authService} />} />
          <Route path="/spot" element={<Spot authService={authService} />} />
          <Route path="/activity" element={<Activity />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
