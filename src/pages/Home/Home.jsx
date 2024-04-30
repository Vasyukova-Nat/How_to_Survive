import "../../App.css";
import "./Home.css";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Carousel from "../../components/Carousel/Carousel";
import Test from "../../components/Test/Test";

function Home() {
  return (
    <div className="home-page">
      
      <Header/>

      <div className="preview" >
        <div className = 'left-block-title'>
          <p> Сайт на котором вы <br/> получите практические <br/> знания по оказанию <br/> первой помощи </p>

          <Button text='Начать обучение' link='/callhelp'/>

        </div>

        <div className='right-block-title'> 
          <img src="/bro2.jpg" alt="F" style={{Height: '2px'}}/>
        </div>
      </div>
     
     
      <h3 style={{textAlign: 'center', marginTop: "50px", fontSize: '24px'}}>Вы узнаете</h3>
      <p style={{textAlign: 'center', fontSize: '20px'}}> Много важной информации. Например: </p>


      <div className="Block1" >
        <div className='left-block1'>
          <img  src="/bro.jpg" alt="F" />
        </div>

        <div className = 'right-block1'>
          <h3> Как позвать на помощь? </h3>
          <p> Очень важно сосредоточиться и позвонить <br/> по нужным телефонам </p>
        </div>
      </div>

      <div className="Block2" >
        <div className = 'left-block2'>
          <h3> Как оказать первую помощь? </h3>
          <p> Если вы оказались в ситуации, когда рядом с вами <br/> находится пострадавший человек, очень важно точно знать, что делать. </p>
        </div>
        
        <div className='right-block2'>
          <img  src="/group33.jpg" alt="F" />
        </div>
      </div>
      

      <div className="Block3" >
        <div className='left-block3'>
          <img  src="/cuate.jpg" alt="F" />
        </div>

        <div className = 'right-block3'>
          <h3> Что делать при встрече с опасными животными? </h3>
          <p> Очень важно аааааааааа <br/> аааааааааааааааа </p>
        </div>
      </div>


      <div className="Block4" >
        <div className='left-block4'>
          <p>  В приложении можно <br/> пройти тесты для <br/> закрепления знаний </p>
        </div>

        <div className = 'right-block4'>
          <img  src="/app-logo-title.png" alt="F" style={{height: '250px'}}/>
        </div>

      </div>

      <br/>

      <div className = 'Block5-carousel'>
        <h3 style={{fontSize: '24px', fontWeight: '400'}}>Приложение</h3>
        <p> Наше приложение было создано с целью помочь людям и мы <br/> очень надеемся, что Вам понравится его использовать!</p>
      
        <Carousel/>
        <br/>

        <p> Приложение имеет следующий функционал. <br/> </p>

        <br/>
        <Button text='Скачать' link="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"/>
        {/* link="/about-us" */}
      </div>

      <Test/>
      
      <Footer/>
    </div>
  );
}

export default Home;