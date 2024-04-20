import "../App.css";
import "./AboutUs.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";

function Contacts() {
  return (
    <div className="page-contacts">
      <Header />

      <Breadcrumbs />
      <div className="rectangle-contacts">
        <h5 className="title-contacts"> О нас </h5>
      </div>

      <div className="contacts-container">
        <div className="about-us">
          <h2>ЗАГОЛОВОК О нас</h2>
          <p>
            Мы - команда студентов первого курса бакалавриата МТУСИ на
            направлении 09.03.01 факультета Информационные Технологии.
          </p>
          <p>
            Нас объединяет не только номер учебной группы, но и общая цель -
            проект Как Выжить в рамках дисциплины Проектный практикум.
          </p>
          <p>Своей целью мы поставили создать веб-сайт.</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contacts;
