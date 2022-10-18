import { useState } from "react";
import BoardList from "./BoardList";
import BoardWrite from "./BoardWrite";
import BoardDetail from "./BoardDetail";
import BoardUpdateForm from "./BoardUpdateForm";
import axios from "axios";
import './App.css';

function App() {
  const [boardlist, setBoardlist] = useState({
    boardList: [],  // 게시판 글 정보 저장 <= 행 데이터를 하나의 객체로 저장하여 배열에 추가 ∴ 여러개 데이터 저장
  });

  const [article, setArticle] = useState({  // 상세보기에 표현될 데이터를 article에 저장  ∴ 하나의 데이터 저장
    board_num: 0,   // 초기값은 의미없음
    board_writer: '',
    board_title: '',
    board_content: '',
    board_date: '',
  });

  // 0: 글쓰기, 1: 상세보기, 2: 글수정
  const [actionMode, setActionMode] = useState({mode: 0});

  // 글 목록 (리스트 데이터 출력하는 작업)
  const getList = () => {
    alert('getList(actionMode) => ' + actionMode.mode); // 함수 출력 확인을 위한 경고창
    axios
      .get("http://localhost:8008/list", {})  // ajax방식의 호출 (jquery에서 제공)과 라이브러리 활용 방법이 있음 => 우리는 라이브러리로 제작  / 우리가 최상단 index.js에서 cors를 선언했기 때문에 출처가 다르지만 가져올 수 있다. / axios는 내부적으로 promise형식으로 데이터 전달 => 결과값을 성공(.then)/실패(.catch)로 받아옴
      .then((res) => {      // res => 형식 매개변수로 변수이름을 정하기 나름
        console.log('res ==>', res);
        const {data} = res; // 비구조 할당으로 데이터 저장
        console.log('data ==>', data);  // 이 데이터는 배열구조
        setBoardlist({      // 빈 배열에 데이터의 배열로 저장
          boardList: data,
        });
        setActionMode({     // 데이터 모드 변환
          ...actionMode,
          mode: 0,  
        });
      })
      .catch((e) => {console.error(e);});
  };

  // 상세보기 (리스트의 제목을 눌렀을때 글쓰기 화면이 상세보기 화면으로 전환되는 부분)
  const handleDetail = (e) => {
    alert('handleDetail(actionMode) => ' + actionMode.mode);
    axios
      .post("http://localhost:8008/detail", {num: e.target.id}) // board_num을 id로 전달받아서 사용
      .then((res) => {
        const {data} = res;
        console.log('detail =>', data);
        if (res.data.length > 0) {  // board_num은 없거나 하나만 존재하기 때문에 length로 조건문 작성
          setArticle({
            ...article, // 상태 객체는 직접 수정이 안되므로 스프레드 연산자를 통해 복제
            board_num: data[0].BOARD_NUM, // key 이름이 대문자로 되어있기때문에 대문자로 작성해주어야함 (console 창의 배열을 확인해보면 key가 어떻게 설정되어있는지 확인이 가능하므로)
            board_writer: data[0].BOARD_WRITER,
            board_title: data[0].BOARD_TITLE,
            board_content: data[0].BOARD_CONTENT,
            board_date: data[0].BOARD_DATE,
          });

          setActionMode({
            ...actionMode,
            mode: 1, // 상세보기
          });
        }
      })
      .catch((e) => {console.error(e);})
  };

  // 수정 폼 보기
  const handleUpdateForm = (e) => {
    alert('handleUpdateForm(actionMode) => ' + actionMode.mode + ',' + e.target.id);
    axios
      .post("http://localhost:8008/detail", {num: e.target.id})
      .then((res) => {
        const {data} = res;
        console.log('handleUpdateForm =>', data);
        if(res.data.length > 0) {
          setArticle({
            ...article,
            board_num: data[0].BOARD_NUM,
            board_writer: data[0].BOARD_WRITER,
            board_title: data[0].BOARD_TITLE,
            board_content: data[0].BOARD_CONTENT,
            board_date: data[0].BOARD_DATE,
          });

          setActionMode({
            ...actionMode,
            mode: 2,  // 글 수정하기
          });
        }
      })
      .catch((e) => {console.error(e);})
  };

  // 실제 수정하는 부분
  const handleUpdate = () => {
    console.log('handleUpdate =>', article);
    axios
      .post("http://localhost:8008/update", {
        article: article,
      })
      .then(() => {getList();})
      .catch((e) => {console.error(e);});
  };

  if(actionMode.mode === 0) {
    // 글쓰기
    return (
      <div>
        <BoardWrite handlelist={getList} />
        <br />
        <BoardList boardlist={boardlist} actionmode={actionMode} handlelist={getList} handledetail={handleDetail} handleupdateform={handleUpdateForm} />
      </div>
    );
  } else if (actionMode.mode === 1) {
    // 상세보기
    return (
      <div>
        <BoardDetail article={article} handlelist={getList} />
        <br />
        <BoardList boardlist={boardlist} handlelist={getList} handledetail={handleDetail} handleupdateform={handleUpdateForm} />
      </div>
    );
  } else if (actionMode.mode === 2) {
    // 글수정
    return (
      <div>
        <BoardUpdateForm article={article} setarticle={setArticle} handleupdate={handleUpdate} />
        <br />
        <BoardList boardlist={boardlist} handlelist={getList} handledetail={handleDetail} handleupdateform={handleUpdateForm} />
      </div>
    );
  }
};

export default App;