import "./ArticlesFirstAid.css";
import { useState } from "react";
// import Button from "./components/Button/Button";
import Content from "../../components/Content/Content";
import CardButton from "../../components/CardButton/CardButton";
import ContentList from "../../components/ContentList/ContentList";
import Body from "../../layouts/Body/Body";
import LeftPanel from "../../layouts/LeftPanel/LeftPanel";
import ArticleAddButton from "../../components/ArticleAddButton/ArticleAddButton";
import Title from "../../components/Title/Title";
import Search from "../../components/Search/Search";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import FirstAid from "../../components/Articles/FirstAid";

function Articles({ data }) {
  const [Index, setIndex] = useState(0);
  const [search, SetSearch] = useState("");

  const findArticle = data.filter((data) => {
    return data.title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="StrArticlesFirstAid">
      <Breadcrumbs />

      <div className="Str" style={{ display: "flex" }}>
        <LeftPanel>
          <Title title="Первая помощь" />
          <Search onChange={(event) => SetSearch(event.target.value)} />
          <ContentList>
            {findArticle.map((el) => (
              <CardButton key={el.id} onClick={() => setIndex(el.id)}>
                <Content title={el.title} text={el.text} />
              </CardButton>
            ))}
          </ContentList>
        </LeftPanel>

        <Body>
          <ArticleAddButton text="Предложить свою статью" link="/article-suggestion" />
          <FirstAid Index={Index} data={data} />
        </Body>
      </div>
    </div>
  );
}

export default Articles;
