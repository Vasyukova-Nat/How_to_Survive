import { useState } from 'react';
import './Stars2.css';


const CircleEffect = () => {
  const [showCircle, setShowCircle] = useState(false);

  const handleContainerClick = () => {
    if (!showCircle) {
      setShowCircle(true);
      setTimeout(() => {
        setShowCircle(false);
      }, 1000); // время анимации в миллисекундах
    }
  };

  return (
    <div className="container" onClick={handleContainerClick}>
      {showCircle && <div className="circle"></div>}
      <p>Контейнер</p>
    </div>
  );
};

export default CircleEffect;
