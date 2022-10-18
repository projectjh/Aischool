import axios from "axios";
import "./App.css";
import ShopList from "./components/ShopList";
import { useState, useCallback } from "react";
const App = () => {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState("");
  const [categori, setCategory] = useState("shop"); //쇼핑 관련 카테고리를 검색하기 위해 설정한 기본값
  const NAVER_CLIENT_ID = "YZKC2K4_Fvqx_rEPI_BE";
  const NAVER_CLIENT_SECRET = "jPPEV84uAd";
  // 검색어 상태 업데이트
  const onChange = (e) => {
    setSearch(e.target.value);
    console.log("input: " + e.target.value);
  };
  // 카테고리 상태 업데이트
  const onChangeCategori = (e) => {
    setCategory(e.target.value);
    console.log(e.target.value);
  };
  // 검색 버튼 클릭 시 실행 함수
  const onClick = () => {
    console.log("click:", categori);
    // 카테고리 및 검색어 입력 URI
    const str = `/v1/search/${categori}?query=${search}`;
    console.log("str: ", str);
    const response = axios
      .get(str, {
        params: {
          query: { search }, //이미지 검색 텍스트
          // query: "react", //이미지 검색 텍스트
          start: 1, // 검색 시작 위치
          display: 5, // 가져올 이미지 갯수
          sort: "sim", // 정렬 유형(sim:유사도)
        },
        headers: {
          "X-Naver-Client-Id": NAVER_CLIENT_ID,
          "X-Naver-Client-Secret": NAVER_CLIENT_SECRET,
        },
      })
      .then((response) => {
        //response.data.items : 데이터중 아이템 부분만 추출하여 상태 업데이트
        setData(response.data.items);
        console.log(response.data);
      });
    // 검색후 상태 초기화
    setSearch("");
    //setCategory("");
    setData("");
    console.log("search: ", search);
  };
  // 검색어 입력 후 엔터 시 자동 버튼 클릭
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };
  return (
    <div>
      <div>
        {/* 카테고리 선택 버튼 */}
        <button value="shop" onClick={onChangeCategori}>
          쇼핑
        </button>
        <br />
        {/* 검색어 입력 */}
        <input type="text" name="searchWord" onChange={onChange} value={search} onKeyPress={onKeyPress} />
        {/* 검색 버튼 */}
        <button onClick={onClick}>검색</button>
      </div>
      {/* 데이터 출력창 */}
      {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />}
      <ShopList data={data}></ShopList>
    </div>
  );
};
export default App;