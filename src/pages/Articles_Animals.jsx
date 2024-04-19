import "../App.css";
import { useState } from "react";
// import Button from "./components/Button/Button";
import Content from "../components/Content/Content";
import CardButton from "../components/CardButton/CardButton";
import Header from "../components/Header/Header";
import ContentList from "../components/ContentList/ContentList";
import Body from "../layouts/Body/Body";
import LeftPanel from "../layouts/LeftPanel/LeftPanel";
import ArticleAddButton from "../components/ArticleAddButton/ArticleAddButton";
import Footer from "../components/Footer/Footer";
import ArticleTitle from "../components/ArticleTitle/ArticleTitle";
import ArticleText from "../components/ArticleText/ArticleText";
import ArticleImg from "../components/ArticleImg/ArticleImg";
import Title from "../components/Title/Title";
// import Draft from './components/Draft/Draft';

function Articles() {
  const [Index, setIndex] = useState(0);

  const data = [
    // Задаем константой все тексты статей
    {
      title: "1. Все ядовитые животные",
      text: "Список ядовитых животных",
      arttitle: "Ядовитые животные",
      arttext:
        "Ядовитые животные подразделяются на два основных класса: те, которые жалят/кусают вас, и которых можете тронуть или съесть ненароком вы сами.",
      img: [""],
    },
    {
      title: "2. Змеи",
      text: "Ожоги бывают разной степени",
      arttitle: "Змеи",
      arttext:
        "Очень важно уметь различать ядовитых и неядовитых змей. Также следует помнить, что практически никакая змея не нападёт на человека без причины.",
      img: ["/snake.jpg"],
    },
    {
      title: "3. Статья",
      text: "Текст текст",
      arttitle: "Статья",
      arttext: "Текст текст",
      img: [""],
    },
    {
      title: "4. Статья",
      text: "Текст текст",
      arttitle: "Статья",
      arttext: "Текст текст",
      img: [""],
    },
    {
      title: "5. Статья",
      text: "Текст текст",
      arttitle: "Статья",
      arttext: "Текст текст",
      img: [""],
    },
  ];

  return (
    <div className="app">
      <Header />

      <div className="Str" style={{ display: "flex" }}>
        <LeftPanel>
          <Title title="При встрече с животными" />
          <ContentList>
            <CardButton onClick={() => setIndex(0)}>
              <Content title={data[0].title} text={data[0].text} />
            </CardButton>

            <CardButton onClick={() => setIndex(1)}>
              <Content title={data[1].title} text={data[1].text} />
            </CardButton>

            <CardButton onClick={() => setIndex(2)}>
              <Content title={data[2].title} text={data[2].text} />
            </CardButton>

            <CardButton onClick={() => setIndex(3)}>
              <Content title={data[3].title} text={data[3].text} />
            </CardButton>

            <CardButton onClick={() => setIndex(4)}>
              <Content title={data[4].title} text={data[4].text} />
            </CardButton>
          </ContentList>
        </LeftPanel>

        <Body>
          <ArticleAddButton />
          <ArticleTitle title={data[Index].arttitle} />
          <ArticleText text={data[Index].arttext} />
          <ArticleImg img={data[Index].img} />
        </Body>
      </div>
      <Footer />
    </div>
  );
}

export default Articles;
