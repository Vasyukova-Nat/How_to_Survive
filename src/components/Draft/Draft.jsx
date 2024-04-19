import { useState, useEffect } from 'react';

const Header = () => {
const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (

    <header className="header" style={{ position: 'fixed', top: 0, left: 0, right: 0, backgroundColor: 'white', borderBottom: '1px solid #ccc', transition: 'top 0.3s', top: isScrolled ? '-100px' : '0' }}>

       <nav>
        <img className='logo' src='/logo_med.svg' alt="F" />
         <ul>
           <li><a href="/">Home</a></li>
           <li><a href="/about">Статьи</a></li>
           <li><a href="/contact">Раздел</a></li>
         </ul>
       </nav>
     </header>
  );
};

export default Header;