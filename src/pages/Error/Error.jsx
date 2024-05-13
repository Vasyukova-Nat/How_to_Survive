import "./Error.css";
import { useRouteError } from "react-router-dom";
import Img from "../../components/Img/Img";
import ErrorTitle from "../../components/ErrorTitle/ErrorTitle";
import ErrorText from "../../components/ErrorText/ErrorText";
import FullBody from "../../layouts/FullBody/FullBody";
import Button from "../../components/Button/Button";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="StrError">
      <FullBody>
        <div style={{ display: "flex" }}>
          <Img img={["/error_cat.jpg"]} />
          <div>
            <ErrorTitle />
            <ErrorText error_text={error.statusText || error.message} />
            <div style={{ marginLeft: "20%", marginTop: "20px" }}>
              <Button text="Перейти на Главную" link="/" />
            </div>
          </div>
        </div>
      </FullBody>
    </div>
  );
}
