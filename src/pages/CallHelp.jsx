import "../App.css";
import "./CallHelp.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';


function CallHelp() {

  return (
    <div className="app">
      <Header />

      <Breadcrumbs />

      <div className="rectangle-title" >
         <h5 className='text-title'> Как позвать на помощь </h5>
      </div>

      <p style={{textAlign: 'center', fontSize: '20px'}}> Это страница с номерами телефонов спецслужб. <br/> Здесь вы найдете контактные данные различных организаций, которые <br/> 
      занимаются обеспечением безопасности и защитой граждан. Будьте готовы к любым ситуациям и знайте, что помощь всегда на расстоянии звонка. </p>

      <div className="phones-img" >
        <img src="/phones.png" alt="F" style={{height: '500px'}}/>
      </div>
      
      <h4>Важные правила</h4>

      <ul className="list" style={{listStyleType: 'disc', paddingLeft: '20px'}}>
        <li>Не звонить в спецслужбы без крайней необходимости.</li>
        <li>Говорить спокойно и четко, сообщая все детали и обстоятельства происшествия.</li>
        <li>Не делать шуток или ложных заявлений, так как это может привести к серьезным последствиям.</li>
        <li>Следовать указаниям оператора спецслужбы и отвечать на задаваемые вопросы.</li>
        <li>Не повторять звонок без необходимости, чтобы не перегружать линии спецслужб.</li>
        <li>Не беспокоить спецслужбы по пустякам или для разговоров на ненужные темы.</li>
        <li>Соблюдать конфиденциальность и не разглашать информацию, полученную от спецслужб, <br/> третьим лицам. </li>
      </ul>

      <Footer />
    </div>

);
}

export default CallHelp;