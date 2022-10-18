import axios from "axios";

const BoardArticle = ({article, handlelist, handledetail, handleupdateform}) => {
    const handleDelete = (e) => {   // 삭제의 경우 article에서 삭제 하고 끝나면 되기 때문에 article안에 배치
        console.log('handleDelete(board_num) =>', e.target.id);
        axios
            .post("http://localhost:8008/delete", {
                num: e.target.id,                
            })
            .then((res) => {
                console.log('삭제된내용확인을 위해서는?', res.data.affectedRows);
                handlelist();
            })
            .catch((e) => {console.error(e);});
    };

    console.log('BoardArticle =>', article);

    return (
        <tr>
            <td>{article.BOARD_NUM}</td>
            <td><a href="#" id={article.BOARD_NUM} onClick={handledetail}>{article.BOARD_TITLE}</a></td>
            <td>{article.BOARD_WRITER}</td>
            <td>{article.BOARD_DATE}</td>
            <td align="center" className="btn-wrap">
                <input type="button" value="수정" id={article.BOARD_NUM} onClick={handleupdateform} />
                <input type="button" value="삭제" id={article.BOARD_NUM} onClick={handleDelete} />
            </td>
        </tr>
    );
};

export default BoardArticle;