import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.css";
import Activity from "./components/activity/activity";
import Home from "./components/home/home";
import Spot from "./components/spot/spot";

function App({ authService }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Spot authService={authService} />} />
        <Route path="/spot" element={<Spot authService={authService} />} />
        <Route path="/activity" element={<Activity />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
