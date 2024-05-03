import "../../App.css";
import "./Contacts.css";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import TextInput from "../../components/ArticleAddField/ArticleAddField";

function Contacts() {
  return (
    <div className="page-contacts">
      <Breadcrumbs />
      <div className="rectangle-contacts">
        <h5 className="title-contacts"> Контакты </h5>
      </div>

      <div className="contacts-container">
        <p style={{ fontSize: "20px" }}>
          {" "}
          Если у вас возникли вопросы или вы хотите узнать больше о наших
          услугах, мы всегда рады помочь. Вы можете связаться с нами <br /> по
          указанным контактным данным или заполнить форму обратной связи на
          нашем сайте. <br />
          <br />
          Болотов Илья Дмитриевич - Android @Paragven <br /> Васюкова Наталья
          Павловна - Fullstack @nata_lotal
          <br /> Морозова Ольга Андреевна - Fullstack @tvar_iz_ada <br />{" "}
          Ситникова Дарья Евгеньевна - UI/UX дизайн @manul0w0
          <br />
          <br /> Наша цель - Ваше удовлетворение и успешная коммуникация.
        </p>
        Text <br />
        <input type="text" />
        <br />
        <br />
        Text2 <br />
        <input type="text" />
        <br /> <br />
        <TextInput />
      </div>
    </div>
  );
}

export default Contacts;
