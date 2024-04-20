import { useRouteError } from "react-router-dom";
import "./Error.css";
import Img from "../components/Img/Img";
import ErrorTitle from "../components/ErrorTitle/ErrorTitle";
import ErrorText from "../components/ErrorText/ErrorText";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import FullBody from "../layouts/FullBody/FullBody";
import ReturnHomeButton from "../components/ReturnHomeButton/ReturnHomeButton";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="app">
      <Header />
      <FullBody>
        <div style={{ display: "flex" }}>
          <Img img={["/error_cat.jpg"]} />
          <div>
            <ErrorTitle />
            <ErrorText error_text={error.statusText || error.message} />
            <ReturnHomeButton />
          </div>
        </div>
      </FullBody>
      <Footer />
    </div>
  );
}
