import { useState } from 'react';
import './Stars2.css';


const Container = () => {
  const [fireworks, setFireworks] = useState([]);

  const handleFireworks = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    
    const newFireworks = [];
    
    for (let i = 0; i < 30; i++) {
      const style = {
        left: x + 'px',
        top: y + 'px',
        animationDelay: Math.random() + 's',
      };
      
      newFireworks.push(<div key={i} className="firework" style={style}></div>);
    }
    
    setFireworks(newFireworks);
    
    setTimeout(() => {
      setFireworks([]);
    }, 2000);
  };

  return (
    <div className="container" onMouseDown={handleFireworks}>
      {fireworks}
      <p>Click to see fireworks!</p>
    </div>
  );
};

export default Container;
