const BoardDetail = ({article, handlelist}) => {
    console.log('BoardDetail =>', article);
    return (
        <div>
            <h2 className="title">상세보기</h2>
            <form>
                <table border="1" width="700px" align="center">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <th align="left" width="100px">글번호</th>
                            <td align="left" width="600px">{article.board_num}</td>
                        </tr>
                        <tr>
                            <th align="left" width="100px">제목</th>
                            <td align="left" width="600px">{article.board_title}</td>
                        </tr>
                        <tr>
                            <th align="left" width="100px">글쓴이</th>
                            <td align="left" width="600px">{article.board_writer}</td>
                        </tr>
                        <tr>
                            <th align="left" width="100px">글쓴날짜</th>
                            <td align="left" width="600px">{article.board_date}</td>
                        </tr>
                        <tr>
                            <th align="left" width="100px">글내용</th>
                            <td align="left" width="600px">{article.board_content}</td>
                        </tr>
                        <tr>
                            <td colSpan="2" align="center">
                                <input type="button" value="글목록" onClick={handlelist} />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
};

export default BoardDetail;