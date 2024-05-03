import "./Error404.css";
import Img from "../../components/Img/Img";
import ErrorTitle from "../../components/ErrorTitle/ErrorTitle";
import ErrorText from "../../components/ErrorText/ErrorText";
import FullBody from "../../layouts/FullBody/FullBody";
import Button from "../../components/Button/Button";

export default function ErrorPage() {
  return (
    <div className="app">
      <FullBody>
        <div style={{ display: "flex" }}>
          <Img img={["/error_cat.jpg"]} />
          <div>
            <ErrorTitle />
            <ErrorText error_text="Not Fount" />
            <div style={{ marginLeft: "20%", marginTop: "20px" }}>
              <Button text="Перейти на Главную" link="/" />
            </div>
          </div>
        </div>
      </FullBody>
    </div>
  );
}
