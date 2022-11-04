import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.css";
import Header from "./components/header/header";

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
