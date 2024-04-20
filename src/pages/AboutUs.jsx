import "../App.css";
import "./AboutUs.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import EmployeeCard from '../components/CardsAboutUs/CardsAboutUs';


function AboutUs() {

  return (
    <div className="page-about-us">
      <Header />

      <Breadcrumbs />
      <div className="rectangle-contacts" >
         <h5 className='title-contacts'> О нас </h5>
      </div>

      <div className="about-us-container">
        <p>Мы - команда студентов первого курса бакалавриата МТУСИ на направлении 09.03.01 факультета Информационные Технологии.</p>
        <p>Нас объединяет не только номер учебной группы, но и общая цель - проект Как Выжить в рамках дисциплины Проектный практикум.</p>
        <p>Своей целью мы поставили создать веб-сайт.
        <br/><br/>
        Будем рады видеть вас в числе наших пользователей!
        </p>
      </div>

      <div className="about-us-body">
        <h3 style={{textAlign: 'center', fontSize: '30px'}}> В нашей команде: </h3>

        <EmployeeCard />

      {/* <div className="about-us-page"> */}
          
      {/* <EmployeeCard name="Jane Smith" position="Designer" photoUrl="jane.jpg" /> */}
      {/* </div> */}

      </div>

    


      <Footer />
    </div>

);
}

export default AboutUs;