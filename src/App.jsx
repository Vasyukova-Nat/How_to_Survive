import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import FirstAid from "./pages/Articles_FirstAid/Articles_FirstAid.jsx";
import Animals from "./pages/Articles_Animals/Articles_Animals.jsx";
import CallHelp from "./pages/CallHelp/CallHelp.jsx";
import AboutUs from "./pages/AboutUs/AboutUs.jsx";
import Contacts from "./pages/Contacts/Contacts.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/firstaid" element={<FirstAid />} />
      <Route path="/animals" element={<Animals />} />
      <Route path="/callhelp" element={<CallHelp />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contacts" element={<Contacts />} />
    </Routes>
  );
}

export default App;
