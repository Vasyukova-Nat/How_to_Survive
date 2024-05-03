import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import FirstAid from "./pages/Data/DataFirstAid.jsx";
import Animals from "./pages/Data/DataAnimals.jsx";
import CallHelp from "./pages/CallHelp/CallHelp.jsx";
import AboutUs from "./pages/AboutUs/AboutUs.jsx";
import Contacts from "./pages/Contacts/Contacts.jsx";
import Error404 from "./pages/Error404/Error404.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/firstaid" element={<FirstAid />} />
      <Route path="/animals" element={<Animals />} />
      <Route path="/callhelp" element={<CallHelp />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/*" element={<Error404 />} />
    </Routes>
  );
}

export default App;
