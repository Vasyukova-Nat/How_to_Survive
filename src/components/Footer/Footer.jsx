import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="/">Главная страница</a>
        <a href="/about-us">О нас</a>
        <a href="/contacts">Контакты</a>
        <a href='/article-suggestion'>Предложить статью</a>
      </div>
    </footer>
  );
};

export default Footer;
