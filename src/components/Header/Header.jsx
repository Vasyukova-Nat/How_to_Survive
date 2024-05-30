import "./Header.css";
import { useState, useEffect } from "react";

const Header = () => {
  // function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className="header"
      style={{ transition: "top 0.3s", top: isScrolled ? "-100px" : "0" }}
    >
      <div className="header-menu">
        <div className="header-logo">
          <img className="logo" src="/app-logo-title.svg" alt="F" />
          <a href="/">HowToSurvive</a>
        </div>

        <div className="header-links">
          <a href="/callhelp">Как позвать на помощь?</a>
          <a href="/firstaid">Первая помощь</a>
          <a href="/animals">При встрече с животными</a>
        </div>
      </div>
    </header>
  );
};

export default Header;

// return (
//   <>
//   <img className='logo' src='/logo_med.svg' alt="F" />
//   </>
//   )

//   import "./Header.css";

// function Header() {
//   return (
//   <header className="header">
//        <nav>
//         <img className='logo' src='/logo_med.svg' alt="F" />
//          <ul>
//            <li><a href="/">Home</a></li>
//            <li><a href="/about">Статьи</a></li>
//            <li><a href="/contact">Раздел</a></li>
//          </ul>
//        </nav>
//      </header>
//   );
// }

// export default Header;
