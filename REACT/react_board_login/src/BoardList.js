import { useEffect } from "react";
import BoardArticle from "./BoardArticle";
import { useNavigate } from "react-router-dom";
import PageLink from "./PageLink";

const BoardList = ({boardlist, actionmode, handlelist, handledetail, handleupdateform, handlepage, pagelink}) => { 
    const navigate = useNavigate();

    useEffect(() => {   // 어떤 일을 수행하고 싶을때 useEffect 기술 => 여기서는 handlelist를 처리하고싶어서 useEffect 사용 
        handlelist();
    },[]);  // [] => 맨 처음 랜더링 후에 호출하겠다. => ∴ BoardList를 화면에 보여줄때 handlelist() 수행

    // 로그아웃
    const handleLogout = () => {
        console.log('handleLogout');
        
        window.sessionStorage.clear();  // 로그인할때 sessionStorage에 저장했던 정보를 삭제시켜줌
        
        console.log('handleLogout: window.sessionStorage(login_id) =>', window.sessionStorage.getItem('id'));
        
        navigate('/');  // 로그인 페이지로 이동
    };

    if(boardlist.boardList.length === 0) {  // table에 data가 없을 경우 반환값
        return (
            <div>
                <div className="btn-wrap btn-wrap2">
                    <button type="button" onClick={handleLogout} className="btn-logout">로그아웃</button>
                </div>
                <table width="700px" border="1" align="center">
                    <thead>
                        <tr>
                            <th width="60">번호</th>
                            <th width="240">제목</th>
                            <th width="100">작성자</th>
                            <th width="100">작성일</th>
                            <th width="200">수정/삭제</th>
                        </tr>
                    </thead>
                </table>
            </div>
        );
    } else {    // 하나 이상의 데이터가 존재할 때 반환 값
        return (
            <div>
                <div className="btn-wrap btn-wrap2">
                    <button type="button" onClick={handleLogout} className="btn-logout">로그아웃</button>
                </div>
                <table width="700px" border="1" align="center">
                    <thead>
                        <tr>
                            <th width="60">번호</th>
                            <th width="240">제목</th>
                            <th width="100">작성자</th>
                            <th width="100">작성일</th>
                            <th width="200">수정/삭제</th>
                        </tr>
                    </thead>
                    <tbody>
                        {boardlist.boardList.map((article) => {
                            return(
                                <BoardArticle actionmode={actionmode} article={article} key={article.board_num} handlelist={handlelist} handledetail={handledetail} handleupdateform={handleupdateform} />    
                            );
                        })}
                    </tbody>
                </table>

                <table align="center">
                    <tr>
                        <td>
                            {pagelink.map((page) => {
                                return (
                                    <PageLink page={page} key={page} handlepage={handlepage} />
                                );
                            })}
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
};

export default BoardList;