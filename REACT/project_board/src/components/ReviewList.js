import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReviewArticle from "./ReviewArticle";

const ReviewList = ({reviewlist, actionmode, handlelist, handleview, handlemodify}) => {
    const navigate = useNavigate();

    // console.log(article.review_idx);

   
    useEffect(() => {
        handlelist();
    }, []);
    
    if (reviewlist.reviewList.length === 0) {
        
         window.sessionStorage.setItem('USER_IDX', 18);
        return (
            <div className="ReviewList">
                <div className="NoList">
                    <p>등록된 게시물이 없습니다.</p>
                </div>
            </div>
        );
    } else {
        return (
            <div className="ReviewList">
                {reviewlist.reviewList.map((article) => {
                    return (
                        <ReviewArticle actionmode={actionmode} article={article} key={article.review_idx} handlelist={handlelist} handleview={handleview} handlemodify={handlemodify} />
                    );
                })}
            </div>
        );
    }
};

export default ReviewList;