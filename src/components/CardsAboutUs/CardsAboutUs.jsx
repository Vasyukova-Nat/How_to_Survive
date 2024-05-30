import "./CardsAboutUs.css";
import { useState } from 'react';

  

const employees = [
  {
    id: 1,
    name: 'Болотов Илья Дмитриевич',
    position: 'Android-разработчик',
    image: 'Ильяm.jpg'
  },
  {
    id: 2,
    name: 'Васюкова Наталья Павловна',
    position: 'Fullstack-разработчик',
    image: 'Натальяm.jpg'
  },
  {
    id: 3,
    name: 'Морозова Ольга Андреевна',
    position: 'Fullstack-разработчик',
    image: 'Ольгаm.jpg'
  },
  {
    id: 4,
    name: 'Ситникова Дарья Евгеньевна',
    position: 'UI/UX дизайнер',
    image: 'Дарьяm.jpg'
  }
];


const AboutUs = () => {

  // a
  const [showCircle, setShowCircle] = useState(false);

  const handleContainerClick = () => {
    if (!showCircle) {
      setShowCircle(true);
      setTimeout(() => {
        setShowCircle(false);
      }, 1000); // время анимации в миллисекундах
    }
  };
  // a


  return (
    <div className="about-us">
      
      {employees.map(employee => (
        <div key={employee.id} className="employee-card" onClick={handleContainerClick}>
          
          <img className='employee-img' src={employee.image} alt="employee image" />
          
          <div className="employee-info">
            
            <h3>{employee.name}</h3>
            {showCircle && <div className="circle"></div>}
            <p>{employee.position}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutUs;