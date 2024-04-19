import CardButton from "../CardButton/CardButton";
import "./ReturnHomeButton.css";

function ReturnHomeButton() {
  return (
    <CardButton className="return_home">
      <a href="/">Перейти на главную</a>
    </CardButton>
  );
}

export default ReturnHomeButton;
