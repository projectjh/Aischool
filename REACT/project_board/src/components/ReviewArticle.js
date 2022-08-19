import axios from "axios";
import logo from "../img/logo-v.png";

const ReviewArticle = ({article, handlelist, handleview}) => {
    // console.log('article target =>', article.REVIEW_IDX);

    // console.log('리스트 확인!!', article.REVIEW_TXT);
    const txt = article.REVIEW_TXT;
    // const thumb_img = txt.substring(txt.indexOf('<img'), txt.indexOf('g">')+3);
    // console.log('리스트 확인!!', article.REVIEW_TXT);
    // console.log('썸네일확인확인', thumb);
    // console.log('스트링인덱스왜안먹어', '시작', txt.indexOf('<img'), '끝', txt.indexOf('.png">')+5);


    const url = txt.substring(txt.indexOf('http'), txt.indexOf('g">')+1);
    // console.log(url);

    const background = {
        backgroundImage: `url(${url})`,
        width: "100%",
        height: "240px",
        backgroundSize: "cover",
        backgroundPosition: "center",
    }
    

    return (
        <div>
            <div className="ListBox">
                <a href="#" id={article.REVIEW_IDX} onClick={handleview}></a>
                {url === ""? <div className="noImg"><img src={logo} alt="travel basket" /></div> : <div className="ReviewThumb" style={background}></div>}
                <div className="ReviewTxt">
                    <h3>{article.REVIEW_TITLE}</h3>
                    {/* <p>{article.REVIEW_TXT}</p> */}
                    {/* <p dangerouslySetInnerHTML={{ __html: article.REVIEW_TXT }}></p> */}
                    <h4>{article.USER_NICK} 닉네임</h4>
                    <ul>
                        <li>{article.REVIEW_LIKE} 좋아요</li>
                        <li>{article.REVIEW_IDX} 댓글 개수 연결</li>
                        <li>{article.REVIEW_CNT} 조회수</li>
                        <li>{article.REVIEW_DATE}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ReviewArticle;

