import "./Articles_FirstAid.css";
import { useState } from "react";
// import Button from "./components/Button/Button";
import Content from "../../components/Content/Content";
import CardButton from "../../components/CardButton/CardButton";
import Header from "../../components/Header/Header";
import ContentList from "../../components/ContentList/ContentList";
import Body from "../../layouts/Body/Body";
import LeftPanel from "../../layouts/LeftPanel/LeftPanel";
import ArticleAddButton from "../../components/ArticleAddButton/ArticleAddButton";
import Footer from "../../components/Footer/Footer";
import ArticleTitle from "../../components/ArticleTitle/ArticleTitle";
import ArticleText from "../../components/ArticleText/ArticleText";
import ArticleImg from "../../components/ArticleImg/ArticleImg";
import Title from "../../components/Title/Title";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
// import Draft from './components/Draft/Draft';

// import ArticleTest from "../../components/ArticleTest/ArticleTest";
import Test from "../../components/Test/Test";

function Articles() {
  const [Index, setIndex] = useState(0);

  const data = [
    // Задаем константой все тексты статей
    {
      title: "1. Кровотечение",
      text: "Артериальное и венозное",
      arttitle: "Кровотечение",
      arttext: "Кровотечения бывают внешние и внутренние.",
      img: [""],
      test: <Test/>
    },
    {
      title: "2. Ожоги",
      text: "Ожоги бывают разной степени",
      arttitle: "Ожоги",
      arttext:
        "Ожоги бывают разной степени (от I до IV), которые различаюся тяжестью полученных повреждений. Лёгкие ожоги характеризуются покраснением кожи в месте ожога и ощущением тепла.",
      img: ["/burn1.jpg"],
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

      <Breadcrumbs />

      <div className="Str" style={{ display: "flex" }}>
        <LeftPanel>
          <Title title="Первая помощь" />
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
          <Test/>
        </Body>
      </div>
      <Footer />
    </div>
  );
}

export default Articles;
