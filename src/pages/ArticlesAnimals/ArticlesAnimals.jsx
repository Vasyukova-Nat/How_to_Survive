import "./ArticlesAnimals.css";
import { useState } from "react";
// import Button from "./components/Button/Button";
import Content from "../../components/Content/Content";
import CardButton from "../../components/CardButton/CardButton";
import ContentList from "../../components/ContentList/ContentList";
import Body from "../../layouts/Body/Body";
import LeftPanel from "../../layouts/LeftPanel/LeftPanel";
import ArticleAddButton from "../../components/ArticleAddButton/ArticleAddButton";
import Title from "../../components/Title/Title";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Animals from "../../components/Articles/Animals";

function Articles({ data }) {
  const [Index, setIndex] = useState(0);

  return (
    <div className="app">
      <Breadcrumbs />

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
          <ArticleAddButton text="Предложить свою статью" link="" />
          <Animals Index={Index} data={data} />
        </Body>
      </div>
    </div>
  );
}

export default Articles;
