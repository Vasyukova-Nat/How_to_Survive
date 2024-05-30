import ArticleTitle from "../ArticleTitle/ArticleTitle";
import ArticleText from "../ArticleText/ArticleText";
import Test from "../Test/Test";

function FirstAid({ Index, data }) {
  return (
    <>
      <ArticleTitle title={data[Index].arttitle} />
      <div style={{ placeItems: "center" }}>
        <ArticleText text={data[Index].arttext} />
      </div>
      {data[Index].questions && <Test questions={data[Index].questions} />}
    </>
  );
}

export default FirstAid;
