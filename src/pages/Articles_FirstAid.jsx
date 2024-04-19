import "../App.css";
// import Button from "./components/Button/Button";
import Content from "../components/Content/Content";
import CardButton from "../components/CardButton/CardButton";
import Header from "../components/Header/Header";
import ContentList from "../components/ContentList/ContentList";
import Body from "../layouts/Body/Body";
import LeftPanel from "../layouts/LeftPanel/LeftPanel";
import ArticleAddButton from "../components/ArticleAddButton/ArticleAddButton";
import Footer from "../components/Footer/Footer";
// import Draft from './components/Draft/Draft';

function Articles() {
  const data = [
    // Задаем константой все тексты статей
    {
      title: "Статья 1. Кровотечение",
      text: "Артериальное и венозное ",
    },
    {
      title: "Статья 2. Ожоги",
      text: "Ожоги бывают разной степени",
    },
    {
      title: "Статья 3.",
      text: "Текст текст",
    },
    {
      title: "Статья 4.",
      text: "Текст текст",
    },
    {
      title: "Статья 4.",
      text: "Текст текст",
    },
  ];

  return (
    <div className="app">
      <Header />

      <div className="Str" style={{ display: "flex", width: "100%" }}>
        <LeftPanel>
          <ArticleAddButton />
          {/* <CardButton>Предложить статью</CardButton> */}

          <ContentList>
            <CardButton>
              <Content title={data[0].title} text={data[0].text} />
            </CardButton>

            <CardButton>
              <Content title={data[1].title} text={data[1].text} />
            </CardButton>

            <CardButton>
              <Content title={data[2].title} text={data[2].text} />
            </CardButton>

            <CardButton>
              <Content title={data[3].title} text={data[3].text} />
            </CardButton>

            <CardButton>
              <Content title={data[4].title} text={data[4].text} />
            </CardButton>
          </ContentList>
        </LeftPanel>

        <Body>
          Body
          <h5>Заголовок</h5>
          <input type="text" />
        </Body>

        {/* <p>Какой-то текст</p>
      <Button/> */}
      </div>

      <Footer />
    </div>
  );
}

export default Articles;
