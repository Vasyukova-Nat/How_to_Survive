import "./Error.css";
import { useRouteError } from "react-router-dom";
import Img from "../../components/Img/Img";
import ErrorTitle from "../../components/ErrorTitle/ErrorTitle";
import ErrorText from "../../components/ErrorText/ErrorText";
import Body from "../../layouts/Body/Body";
import Button from "../../components/Button/Button";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="StrError">
      <Body>
        <div style={{ display: "flex" }}>
          <Img img={["/error_cat.jpg"]} />
          <div className="error_msg">
            <ErrorTitle />
            <ErrorText error_text={error.statusText || error.message} />
            <div style={{ marginTop: "20px" }}>
              <Button text="Перейти на Главную" link="/" />
            </div>
          </div>
        </div>
      </Body>
    </div>
  );
}
