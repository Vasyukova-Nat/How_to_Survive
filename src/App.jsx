import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import FirstAid from "./pages/Articles_FirstAid.jsx";
import Animals from "./pages/Articles_Animals.jsx";
import CallHelp from "./pages/CallHelp.jsx";
import Contacts from "./pages/Contacts.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/firstaid" element={<FirstAid />} />
      <Route path="/animals" element={<Animals />} />
      <Route path="/callhelp" element={<CallHelp />} />
      <Route path="/contacts" element={<Contacts />} />
    </Routes>
  );
}

export default App;
