import { NavLink } from "react-router-dom";
import styled from "styled-components";

const categories = [
  {
    name: "blog",
    text: "블로그",
  },
  {
    name: "movie",
    text: "영화",
  },
  {
    name: "image",
    text: "이미지",
  },
  {
    name: "shop",
    text: "쇼핑",
  },
  {
    name: "news",
    text: "뉴스",
  },
];

const CategoriesBlock = styled.div`
  display: flex;
  padding: 20px;
  padding-left: 10rem;
  padding-right: 14rem;
  width: 80%;
  height: 100%;
  margin: 0 auto;
  background: url(https://kin-phinf.pstatic.net/20200414_265/1586791382260yUdsi_JPEG/1.jpg);
  background-size: cover;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

const Category = styled(NavLink)`
  font-size: 1.5rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;
  padding-right: 1rem;
  text-shadow: 0.3px 0.3px;

  &:hover {
    color: skyblue;
  }

  &.active {
    font-weight: 700;
    color: blue;
    &:hover {
      color: blueviolet;
    }
  }

  & + & {
    margin-left: 1rem;
  }
`;

const Categories = () => {
  return (
    <CategoriesBlock>
      {categories.map(
        //c는 카테고리 객체
        (c) => (
          <Category
            key={c.name}
            className={({ isActive }) => (isActive ? "active" : undefined)}
            to={c.name === "blog" ? "/" : `/${c.name}`}
          >
            {c.text}
          </Category>
        )
      )}
    </CategoriesBlock>
  );
};

export default Categories;
