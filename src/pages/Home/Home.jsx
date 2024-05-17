import "../../App.css";
import "./Home.css";
import Button from "../../components/Button/Button";
import Carousel from "../../components/Carousel/Carousel";

function Home() {
  return (
    <div className="home-page">

      <div className="preview">
        <div className="left-block-title">
          <p>
            Сайт на котором Вы <br/> получите практические <br/> знания по
            оказанию <br/> первой помощи
          </p>

          <Button text="Начать обучение" link="/callhelp" />
        </div>

        <div className="right-block-title">
          <img src="/bro.svg" alt="F" style={{height: "505px"}} />
        </div>
      </div>

      <h3 style={{ textAlign: "center", marginTop: "50px", fontSize: "24px", fontWeight: "400"}}>Вы узнаете</h3>
      
      <p style={{ textAlign: "center", fontSize: "20px" }}>Много важной информации. Например:</p>

      <div className="Block1">
        <div className="left-block1">
          <img src="/group34.svg" alt="F" />
        </div>

        <div className="right-block1">
          <text style={{fontSize: '24px'}}>Как позвать на помощь?</text>
          <p> Очень важно сосредоточиться и позвонить <br /> по нужным телефонам </p>
        </div>
      </div>

      <div className="Block2">
        <div className="left-block2">
          <text style={{fontSize: '24px'}}>Как оказать первую помощь?</text>
          <p>
            Если Вы оказались в ситуации, когда рядом с Вами <br/> находится
            пострадавший человек, важно точно <br/> знать, что делать.
          </p>
        </div>

        <div className="right-block2">
          <img src="/group33.svg" alt="F"/>
        </div>
      </div>

      <div className="Block3">
        <div className="left-block3">
          <img src="/cuate.svg" alt="F"/>
        </div>

        <div className="right-block3">
          <text style={{fontSize: '24px'}}> Что делать при встрече с опасными животными? </text>
          <p> Очень важно аааааааааа <br /> аааааааааааааааа</p>
        </div>
      </div>

      <div className="Block4">
        <div className="left-block4">
          <p>В приложении можно <br /> пройти тесты для <br /> закрепления знаний</p>
        </div>

        <div className="right-block4">
          <img src="/app-logo-title.png" alt="F" style={{ height: "250px" }} />
        </div>
      </div>

      <br />

      <div className="Block5-carousel">
        <h3 style={{ fontSize: "24px", fontWeight: "400"}}>Приложение</h3>
        <p>
          Наше приложение было создано с целью помочь людям и мы <br /> очень
          надеемся, что Вам понравится его использовать!
        </p>

        <Carousel/>
        <br />

        <p> Приложение имеет следующий функционал. </p> <br/>

        <Button
          text="Скачать"
          link="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
        />
      </div>
      
    </div>
  );
}

export default Home;
