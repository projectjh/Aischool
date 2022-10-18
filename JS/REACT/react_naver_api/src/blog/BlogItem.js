import styled from "styled-components";

const BlogItemBlock = styled.div`
  display: flex;

  .thumbnail {
    margin-right: 0.5rem;
    img {
      display: block;
      width: 160px;
      height: 100px;
      object-fit: cover;
    }
  }
  a {
    text-decoration: none;
    color: black;
  }
  .contents {
    background: url(https://kin-phinf.pstatic.net/20200414_95/1586791382265Hjmhv_JPEG/2.jpg);
    background-size: cover;
    border-radius: 0.5rem;
    box-shadow: 5px 5px 5px;
    h2 {
      margin: 0;
      padding: 5px;
      background: url(https://kin-phinf.pstatic.net/20200414_276/1586791382257IGehi_JPEG/3.jpg);
      background-size: cover;
      border-radius: 0.5rem;
      font-weight: 700;
      padding-left: 50px;
      padding-right: 150px;
      box-shadow: 3px 3px 3px;
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
      font-weight: 400;
      padding-left: 50px;
      padding-right: 150px;
    }
  }
  & + & {
    margin-top: 3rem;
  }
`;

const BlogItem = ({ article }) => {
  const { title, link, description, bloggername, bloggerlink, postdate } =
    article;

  console.log(article);
  console.log(article.title);
  console.log(article.link);
  return (
    <BlogItemBlock>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="contents">
          <h2>
            {title
              .replace(/<b>/gi, "")
              .replace(/<\/b>/gi, "")
              .replace(/&lt/gi, "")
              .replace(/&gt/gi, "")}
          </h2>
          <p>
            <b>내용 : </b>{" "}
            {description
              .replace(/<b>/gi, "")
              .replace(/<\/b>/gi, "")
              .replace(/&lt/gi, "")
              .replace(/&gt/gi, "")}
          </p>
          <p style={{ fontWeight: "700" }}>
            <b>작성자 : </b>{" "}
            {bloggername
              .replace(/<b>/gi, "")
              .replace(/<\/b>/gi, "")
              .replace(/&apos;s/gi, "")
              .replace(/&gt/gi, "")}
          </p>
          <p style={{ fontWeight: "700" }}>
            <b>작성 날짜 : </b>{" "}
            {postdate.replace(/<b>/gi, "").replace(/<\/b>/gi, "")}
          </p>
          <p style={{ color: "blue", fontWeight: "700" }}>
            <b>하이퍼텍스트 link : </b>{" "}
            {bloggerlink.replace(/<b>/gi, "").replace(/<\/b>/gi, "")}
          </p>
        </div>
      </a>
    </BlogItemBlock>
  );
};

export default BlogItem;

{
  /* <div className="thumbnail">
<a href={link} target="_blank" rel="noopener noreferrer">
  <img src={description} alt="바로가기" />
</a>
</div> */
}
