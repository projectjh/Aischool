import { useNavigate } from "react-router-dom";

const ReviewView = ({article, handlemodify}) => {
    // console.log('뷰어', article.review_idx);
    console.log('뷰어 article', article);
    // const navigate = useNavigate();

    return (
        <div>
            <a href="/review">목록</a>
            <div className="ViewBox">
                <div className="ViewTitle">
                    <h2>타이틀.{article.review_title}</h2>
                    <ul>
                        <li>닉네임.{article.user_nick}</li>
                        <li>날짜.{article.review_date}</li>
                    </ul>
                </div>
                <div className="ViewImg"></div>
                <div className="ViewTxt" dangerouslySetInnerHTML={{ __html: article.review_txt }}>
                    {/* <p>내용.{article.review_txt}</p> */}
                </div>
                <ul>
                    <li>{article.review_like}</li>
                    <li>{article.review_idx}</li>
                    <li>{article.review_cnt}</li>
                </ul>
            </div>

            <div className="btn-wrap">
                <button type="button" id={article.review_idx} onClick={handlemodify}>수정</button>
            </div>
        </div>
    );
};

export default ReviewView;