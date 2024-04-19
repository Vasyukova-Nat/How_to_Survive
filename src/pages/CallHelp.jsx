import "../App.css";
// import Button from "./components/Button/Button";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
// import Draft from './components/Draft/Draft';

import Carousel from "../components/Carousel/Carousel";
const photos = ["/planetm.jpg", "/image2.jpg", "/image3.jpg"];

function CallHelp() {
  return (
    <div className="app">
      <Header />

      {/* <Carousel /> */}
      {/* <Carousel images={images} /> */}
      <Carousel photos={photos} />

      <div className="Str" style={{ display: "flex", width: "100%" }} />

      <Footer />
    </div>
  );
}

export default CallHelp;
