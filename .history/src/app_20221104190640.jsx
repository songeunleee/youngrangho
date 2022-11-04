import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.css";
import Home from "./components/home/home";

function App() {
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/spot" element={<Spot />} />
      <Route path="/activity" element={<Activity />} />
    </Routes>
  </BrowserRouter>;
}

export default App;
