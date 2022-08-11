const BoardUpdateForm = ({article, setarticle, handleupdate}) => {
    console.log('BoardUpdateForm =>', article);

    const onChange = (e) => {
        setarticle({
            ...article,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div>
            <h2 className="title">글수정</h2>
            <form>
                <table border="1" width="700px" align="center">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <th align="left" width="100px">제목</th>
                            <td align="left" width="600px">
                                <input type="text" name="board_title" defaultValue="{article.board_title}" onChange={onChange} />
                            </td>
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
                            <td align="left" width="600px">
                                <input type="text" name="board_content" defaultValue="{article.board_content}" onChange={onChange} />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2" align="center">
                                <input type="button" value="글수정" onClick={handleupdate} />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
};

export default BoardUpdateForm;