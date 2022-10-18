import { useState, useEffect } from "react";
import BoardList from "./BoardList";
import BoardWrite from "./BoardWrite";
import BoardDetail from "./BoardDetail";
import BoardUpdateForm from "./BoardUpdateForm";
import axios from "axios";
import './Main.css';
import { useNavigate } from "react-router-dom"

function Main() {
  const [boardlist, setBoardlist] = useState({
    boardList: [],  // 게시판 글 정보 저장 <= 행 데이터를 하나의 객체로 저장하여 배열에 추가 ∴ 여러개 데이터 저장
  });

  const navigate = useNavigate();

  const [article, setArticle] = useState({  // 상세보기에 표현될 데이터를 article에 저장  ∴ 하나의 데이터 저장
    board_num: 0,   // 초기값은 의미없음
    board_writer: '',
    board_title: '',
    board_content: '',
    board_date: '',
  });

  // 0: 글쓰기, 1: 상세보기, 2: 글수정
  const [actionMode, setActionMode] = useState({mode: 0});


  // paging 추가-----------------------------------------------------
  const [pageLink, setPageLink] = useState([]);

  var page_num = 1;
  const page_size = 3;    //한 화면에 출력되는 개수
  var page_count = 1;
  var article_count = 0;  // 전체 글의 개수
  // useState는 컴포넌트를 통해 하위 컴포넌트에 전달이 가능하나 일반 변수는 이러한 형식으로 전달이 되지 않음 ∴ 그러므로 이 변수는 이 컴포넌트에서만 사용하기 위해 선언한 변수

  useEffect(() => {
    const login_id = window.sessionStorage.getItem('id');
    console.log('window.sessionStorage(login_id) =>', login_id);
    if (login_id === null) {
      alert('로그인 후에 사용이 가능합니다😂');
      navigate('/');
    }
  }, []);

  const handlePage = (e) => {
    console.log('handlePage(e.target.id) =>', e.target.id);
    page_num = e.target.id; // 전역변수 => 이 컴포넌트 내에서는 어디에서나 접근 가능
    getList();
  };

  //-------------------------------------------------------------------------

  // // 글 목록 (리스트 데이터 출력하는 작업)
  // const getList = () => {
  //   // alert('getList(actionMode) => ' + actionMode.mode); // 함수 출력 확인을 위한 경고창
  //   axios
  //     .get("http://localhost:8008/list", {})  // ajax방식의 호출 (jquery에서 제공)과 라이브러리 활용 방법이 있음 => 우리는 라이브러리로 제작  / 우리가 최상단 index.js에서 cors를 선언했기 때문에 출처가 다르지만 가져올 수 있다. / axios는 내부적으로 promise형식으로 데이터 전달 => 결과값을 성공(.then)/실패(.catch)로 받아옴
  //     .then((res) => {      // res => 형식 매개변수로 변수이름을 정하기 나름
  //       console.log('res ==>', res);
  //       const {data} = res; // 비구조 할당으로 데이터 저장
  //       console.log('data ==>', data);  // 이 데이터는 배열구조
  //       setBoardlist({      // 빈 배열에 데이터의 배열로 저장
  //         boardList: data,
  //       });
  //       setActionMode({     // 데이터 모드 변환
  //         ...actionMode,
  //         mode: 0,  
  //       });
  //     })
  //     .catch((e) => {console.error(e);});
  // };


  // 글 목록도 페이징에 맞춰 호출 변경 ----------------------------
  async function getList() {  // 선언적 함수에서만 async 사용 가능 (화살표 함수로는 사용 불가)
    await axios // 비동기식으로 호출 => 이 count를 호출하는동안 list 호출을 기다리게 하기 위해 async await을 사용하여 호출시켜줌 (선 후 관계를 위해)
      .get("http://localhost:8008/count", {})
      .then((res) => {
        console.log('res ==>', res);
        const {data} = res;
        article_count = data[0].COUNT;  // index.js에 COUNT를 대문자로 작성했기때문에 정확히 대문자로 통일시켜줘야함
        page_count = Math.ceil(article_count / page_size);  // ceil => 올림처리
        var page_link = [];
        for (let i = 1; i <= page_count; i++) page_link.push(i);  // 배열에 추가하는 작업
        console.log('getArticleCount(page_link) =>', page_link);
        setPageLink(page_link); // 생성된 페이지링크를 저장
      })
      .catch((e) => {console.error(e);});

      console.log('article_count =>', article_count);

      await axios
        .post("http://localhost:8008/list", { // 객체 형식으로 전달시 index.js에서 body로 전달받음
          page_num: page_num,
          page_size: page_size,
          article_count: article_count,
        })
        .then((res) => {
          const {data} = res;
          console.log('data ==>', data);
          setBoardlist({
            boardList: data,
          });
          setActionMode({
            ...actionMode,
            mode: 0,  
          });
        })
        .catch((e) => {console.error(e);});
  };

  // 상세보기 (리스트의 제목을 눌렀을때 글쓰기 화면이 상세보기 화면으로 전환되는 부분)
  const handleDetail = (e) => {
    // alert('handleDetail(actionMode) => ' + actionMode.mode);
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
    // alert('handleUpdateForm(actionMode) => ' + actionMode.mode + ',' + e.target.id);
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
        <BoardList boardlist={boardlist} actionmode={actionMode} handlelist={getList} handledetail={handleDetail} handleupdateform={handleUpdateForm} handlepage={handlePage} pagelink={pageLink} />
      </div>
    );
  } else if (actionMode.mode === 1) {
    // 상세보기
    return (
      <div>
        <BoardDetail article={article} handlelist={getList} />
        <br />
        <BoardList boardlist={boardlist} handlelist={getList} handledetail={handleDetail} handleupdateform={handleUpdateForm} handlepage={handlePage} pagelink={pageLink} />
      </div>
    );
  } else if (actionMode.mode === 2) {
    // 글수정
    return (
      <div>
        <BoardUpdateForm article={article} setarticle={setArticle} handleupdate={handleUpdate} />
        <br />
        <BoardList boardlist={boardlist} handlelist={getList} handledetail={handleDetail} handleupdateform={handleUpdateForm} handlepage={handlePage} pagelink={pageLink} />
      </div>
    );
  }
};

export default Main;