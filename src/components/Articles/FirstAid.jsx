import ArticleTitle from "../ArticleTitle/ArticleTitle";
import ArticleText from "../ArticleText/ArticleText";
import ArticleImg from "../ArticleImg/ArticleImg";
import Test from "../Test/Test";

function FirstAid({ Index, data }) {
  const elements = [
    {
      title: <ArticleTitle title={data[Index].arttitle} />,
      body: (
        <div>
          <ArticleText text={data[Index].arttext} />
          <ArticleImg img={data[Index].img} />
        </div>
      ),
      test: <Test questions={data[Index].questions} />,
    },
    {
      title: <ArticleTitle title={data[Index].arttitle} />,
      body: (
        <div>
          <ArticleText text={data[Index].arttext} />
          <ArticleImg img={data[Index].img} />
        </div>
      ),
      test: <Test questions={data[Index].questions} />,
    },
    {
      title: <ArticleTitle title={data[Index].arttitle} />,
      body: (
        <div>
          <ArticleText text={data[Index].arttext} />
          <ArticleImg img={data[Index].img} />
        </div>
      ),
      test: <Test questions={data[Index].questions} />,
    },
    {
      title: <ArticleTitle title={data[Index].arttitle} />,
      body: (
        <div>
          <ArticleText text={data[Index].arttext} />
          <ArticleImg img={data[Index].img} />
        </div>
      ),
      test: <Test questions={data[Index].questions} />,
    },
    {
      title: <ArticleTitle title={data[Index].arttitle} />,
      body: (
        <div>
          <ArticleText text={data[Index].arttext} />
          <ArticleImg img={data[Index].img} />
        </div>
      ),
      test: <Test questions={data[Index].questions} />,
    },
  ];

  return (
    <>
      {elements[Index].title}
      {elements[Index].body}
      {elements[Index].test}
    </>
  );
}

export default FirstAid;
