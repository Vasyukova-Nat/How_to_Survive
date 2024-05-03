import { useState, useEffect } from 'react';
import './ScrollProgressBar.css';

const ScrollProgressBar = () => {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY; // количество пикселей, на которое страница была прокручена по вертикали от верхнего края
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    // document.documentElement.scrollHeight - высота всего документа
    // window.innerHeight - высота видимой области окна браузера

    const percentage = (position / maxScroll) * 100;
    setScroll(percentage);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="scroll-progress" style={{ width: `${scroll}%` }}></div>
    //значение ширины элемента будет равно проценту, указанному в переменной scroll.
  );
};

export default ScrollProgressBar;