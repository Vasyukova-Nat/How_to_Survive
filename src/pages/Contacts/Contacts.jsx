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
          Если у вас возникли вопросы или вы хотите узнать больше о наших
          услугах, мы всегда рады помочь. Вы можете связаться с нами по
          указанным контактным данным или заполнить форму обратной связи на
          нашем сайте. 
        </p>

        <p>
          Болотов Илья Дмитриевич - Android @Paragven <br /> 
          Васюкова Наталья Павловна - Fullstack @nata_lotal <br /> 
          Морозова Ольга Андреевна - Fullstack @tvar_iz_ada <br />
          Ситникова Дарья Евгеньевна - UI/UX дизайн @manul0w0
        </p>

        <p> Наша цель - Ваше удовлетворение и успешная коммуникация. </p>
        
        <p>Ниже Вы можете связаться с нами</p>
      </div>

      <div className="rectangle-feedback">
          <h2 style={{textAlign: 'center', fontWeight: '500', fontSize: '36px'}}>Обратная связь</h2>
          <FeedBackContacts/>
      </div>
    </div>
  );
}

export default Contacts;
