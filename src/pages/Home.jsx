import "../App.css";
import "./Home.css";
// import CardButton from "../components/CardButton/CardButton";
import Button from "../components/Button/Button";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import Carousel from "../components/Carousel/Carousel";
const photos = ["/planetm.jpg",'мы1.jpg', 'мы2.jpg', "/image2.jpg", "/image3.jpg"];

function Home() {
  return (
    <div className="home-page">
      <Header />
      {/* <div className="Str" > */}

      <div className="preview" >
         <p className='text-preview'> Сайт на котором вы <br/> получите практические <br/> знания по оказанию <br/> первой помощи
         </p>

        <Button/>
      </div>
     
      

      <h3 style={{textAlign: 'center'}}>Вы узнаете</h3>
      <p style={{textAlign: 'center'}}> Много важной информации. Например: </p>

      <div className="Block1" >
        <img className='left-block1' src="/bro.jpg" alt="F" />

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
      
        <img className='right-block2' src="/group33.jpg" alt="F" />
      </div>
      

      <div className="Block3" >
        <img className='left-block3' src="/cuate.jpg" alt="F" />

        <div className = 'right-block3'>
          <h3> Что делать при встрече с опасными животными? </h3>
          <p> Очень важно аааааааааа <br/> аааааааааааааааа </p>
        </div>
      </div>

      <br/>
      <h3 style={{textAlign: 'center', fontSize: '24px', fontWeight: '400'}}>Приложение</h3>
      <p style={{textAlign: 'center'}}> Наше приложение было создано с целью помочь людям и мы <br/> очень надеемся, что Вам понравится его использовать!</p>
      
      
      <Carousel photos={photos} />
      <br/>

      <p style={{textAlign: 'center'}}> Приложение имеет следующий функционал: <br/> </p>
      

      <Button/>

      {/* </div> */}
      <Footer />
    </div>
  );
}

export default Home;