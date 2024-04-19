import "./App.css";
import { Route, Routes } from "react-router-dom";
import Articles from "./Articles.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Articles />} />
      <Route path="/about" element={<Articles />} />
    </Routes>
  );
}

export default App;
