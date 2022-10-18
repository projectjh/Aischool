import './App.css';
import React, {useState, useCallback} from 'react';
import axios from 'axios';
import MovieList from './components/MovieList';

const App = () => {
  const [data, setData] = useState(null);

  const NAVER_CLIENT_ID = "NOt2yyw4Gn6Y5gvyBB8T";
  const NAVER_CLIENT_SECRET = "unzLll0HB9";

  const onClick = () => {
    axios
      // url로 접근시 console창에 Access to XMLHttpRequest... 와 같은 오류 발생
      // -> package.json에서 proxy 추가
      // .get("/v1/search/blog",{
      //   params: {
      //     query: "react",     // 이미지 검색 테스트
      //     start: 1,           // 검색 시작 위치
      //     display: 5,         // 가져올 이미지 개수
      //     sort: "sim",        // 정렬 유형 (sim:유사도)
      //   },
      //   headers: {
      //     "X-Naver-Client-Id": NAVER_CLIENT_ID,
      //     "X-Naver-Client-Secret": NAVER_CLIENT_SECRET,
      //   },
      // })

      .get("/v1/search/movie", {
        params: {
          query: "마블"
        },
        headers: {
          "X-Naver-Client-Id": NAVER_CLIENT_ID,
          "X-Naver-Client-Secret": NAVER_CLIENT_SECRET,
        },
      })
      .then((response) => {
        setData(response.data);
      });
  };

  return (
    <div>
      <div>
        <button onClick={onClick}> 불러오기 </button>
      </div>
      {data && (
        <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />
      )}
    </div>
  );
};

export default App;
