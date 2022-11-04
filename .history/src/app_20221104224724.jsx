import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.css";
import Activity from "./components/activity/activity";
import Home from "./components/home/home";
import Spot from "./components/spot/spot";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/spot" element={<Spot />} />
        <Route path="/activity" element={<Activity />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
