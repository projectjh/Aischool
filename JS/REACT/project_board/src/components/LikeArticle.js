import React, { useEffect, useState } from 'react';
import * as List from './ReviewList';

const LikeArticle = ({article, countLA}) => {
    const listTime = List.reviewTime(article.REVIEW_DATE).toString().split("T")[0];
    
    console.log('좋아요 카운트 잘 가져오는지 확인', countLA);
    console.log('좋아요 article 잘 가져오는지 확인', article);

    // var i = 1;
    // for (i ; i < countLA; i++) {
    //     i += 1;
    //     return(i);
    // }
    
    const [likeIdx, setLikeIdx] = useState(1);
    
    // for(var i = 1; i <= countLA; i++) {
        
    //     console.log(i);
    //     // setLikeIdx(i);
    // }


    return (
        <tr>
           <td></td>
           <td>{article.REVIEW_TITLE}</td> 
           <td>{article.USER_NICK}</td> 
           <td>{listTime}</td> 
        </tr>
    );
};

export default LikeArticle;