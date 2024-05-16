import "../../App.css";
import "./Contacts.css";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
// import TextInput from "../../components/ArticleAddField/ArticleAddField";
import FeedBackContacts from "../../components/FeedBackContacts/FeedBackContacts";

function Contacts() {
  return (
    <div className="page-contacts">

      <Breadcrumbs />

      <div style={{display: 'flex', background: '#DEF0F8'}}>
        <h5 style={{fontSize: '36px', fontWeight: '500', textAlign: 'center', width: '100%'}}>Контакты</h5>
      </div>

      <div className="contacts-container">
        <p>
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
      </div>

      <div className="rectangle-feedback">
          <p>Ниже вы можете связаться с нами</p>
          <h2 style={{textAlign: 'center'}}>Обратная связь</h2>

          <FeedBackContacts/>
      </div>
    </div>
  );
}

export default Contacts;
