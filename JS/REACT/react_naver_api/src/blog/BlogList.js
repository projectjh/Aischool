import { useState, useEffect } from "react";
import styled from "styled-components";
import BlogItem from "./BlogItem";
import axios from "axios";
import usePromise from "./usePromise";

const BlogListBlock = styled.div`
  box-sizing: boxder-box;
  padding: 50px;
  padding-left: 10rem;
  padding-right: 14rem;
  width: 80%;
  height: 100%;
  margin: 0 auto;
  background: url(https://kin-phinf.pstatic.net/20200418_108/1587174641776JVFhb_JPEG/IMG_3124.jpg);
  background-size: cover;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 5rem;
    padding-right: 5rem;
  }

  .searchname {
    color: black;
    background: #ffffcc;
    padding: 0.7rem 17rem 0.5rem 1rem;
    margin: 0rem 1rem 3rem 0.5rem;
    border: 1px solid teal;
    border-radius: 0.5rem;
    font-size: 1.5rem;
    line-height: 1.5;
    box-shadow: 4px 4px 4px;
  }

  .button {
    padding: 0.8rem 0.5rem 0.8rem 0.5rem;
    background: #f3e6ff;
    border-radius: 0.5rem;
    font-size: 1rem;
    margin: 0rem 0rem 0rem 0.5rem;
    box-shadow: 2px 2px;
    cursor: pointer;
    &:hover {
      color: #10fff0;
    }
  }
`;

const NAVER_CLIENT_ID = "__tcjAU1JE49SWlLrFrK";
const NAVER_CLIENT_SECRET = "VuCPBlTam9";

const BlogList = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState("");
  // const [items, setItems] = useState(null);
  const Datasearch = data.search;
  console.log(data);
  console.log(Datasearch);

  const onChange = (e) => {
    setSearch(e.target.value);
  };
  const onClick = () => {
    setData({ search });
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  console.log("체크1");
  // ?query=${Datasearch} 링크 서치 코드
  const [loading, response, error] = usePromise(() => {
    // const categorys = category === "blog" ? "" : `&category=${category}`;
    return axios.get(`/v1/search/blog?query=${Datasearch}`, {
      params: {
        // query: { search }, //이미지 검색 텍스트
        // query: "react", //이미지 검색 텍스트
        // start: 1, // 검색 시작 위치
        display: 10, // 가져올 이미지 갯수
        // sort: "sim", // 정렬 유형(sim:유사도)
      },
      headers: {
        "X-Naver-Client-Id": NAVER_CLIENT_ID,
        "X-Naver-Client-Secret": NAVER_CLIENT_SECRET,
      },
    });
  }, [data]);
  console.log(response);

  // 대기 중일 때
  if (loading) {
    console.log("체크2");
    return <BlogListBlock>대기 중...</BlogListBlock>;
  }
  // 아직 response(articles) 값이 설정되지 않았을때
  if (!response) {
    console.log("체크3");
    return null;
  }

  // 에러가 발생했을 때
  if (error) {
    console.log("체크4");
    return <BlogListBlock>에러 발생!</BlogListBlock>;
  }
  console.log("체크5");

  // response(articles) 값이 유효할 때
  const { items } = response.data;
  return (
    <BlogListBlock>
      <input
        className="searchname"
        type="text"
        name="searchname"
        placeholder="검색어를 입력해 주세요"
        value={search}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button className="button" onClick={onClick}>
        검색
      </button>
      {items &&
        items.map((item) => <BlogItem key={item.link} article={item} />)}
    </BlogListBlock>
  );
};

export default BlogList;

// const [data, setData] = useState(null);
//   const [search, setSearch] = useState("");
//   const [categori, setCategory] = useState("");

//   const NAVER_CLIENT_ID = "__tcjAU1JE49SWlLrFrK";
//   const NAVER_CLIENT_SECRET = "VuCPBlTam9";

// // 검색어 상태 업데이트
// const onChange = (e) => {
//   setSearch(e.target.value);
//   console.log("input: " + e.target.value);
// };

// // 카테고리 상태 업데이트
// const onChangeCategori = (e) => {
//   setCategory(e.target.value);
//   console.log(e.target.value);
// };

// 검색 버튼 클릭 시 실행 함수
// const onClick = () => {
//   console.log("click:", categori);

// 카테고리 및 검색어 입력 URI
// const str = `/v1/search/${categori}?query=${search}`;
// console.log("str: ", str);
// const response = axios
// .get(str, {
//   params: {
//     // query: { search }, //이미지 검색 텍스트
//     // query: "react", //이미지 검색 텍스트
//     // start: 1, // 검색 시작 위치
//     display: 5, // 가져올 이미지 갯수
//     // sort: "sim", // 정렬 유형(sim:유사도)
//   },
// headers: {
//   "X-Naver-Client-Id": NAVER_CLIENT_ID,
//   "X-Naver-Client-Secret": NAVER_CLIENT_SECRET,
// },
// })
// .then((response) => {
//   //response.data.items : 데이터중 아이템 부분만 추출하여 상태 업데이트
//   setData(response.data.items);
//   console.log(response.data);
// });

// 검색후 상태 초기화
//   setSearch("");
//   setCategory("");
//   setData("");
//   console.log("search: ", search);
// };

// // 검색어 입력 후 엔터 시 자동 버튼 클릭
// const onKeyPress = (e) => {
//   if (e.key === "Enter") {
//     onClick();
//   }
// };

// return (
//   <div>
//     <div>

//       {/* 검색어 입력 */}
//       <input
//         type="text"
//         name="searchWord"
//         onChange={onChange}
//         value={search}
//         onKeyPress={onKeyPress}
//       />

//       {/* 검색 버튼 */}
//       <button onClick={onClick}>검색</button>
//     </div>

//     {/* 데이터 출력창 */}
//     {data && (
//       <textarea
//         rows={7}
//         value={JSON.stringify(data, null, 2)}
//         readOnly={true}
//       />
//     )}
//   </div>
// );
