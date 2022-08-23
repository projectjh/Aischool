import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../img/logo-v.png';
import * as List from './ReviewList';
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";

const ReviewArticle = ({article, viewClick}) => {
    const navigate = useNavigate();
    const txt = article.REVIEW_TXT;
    const url = txt.substring(txt.indexOf('http'), txt.indexOf('g">')+1);

    // 리스트 썸네일 이미지 배경으로 변경
    const thumbImg = {
        backgroundImage : `url(${url})`,
        width: "100%",
        height: "240px",
        backgroundSize: "cover",
        backgroundPosition: "center",
    }

    // // 상세 페이지 이동
    const viewLink = `/review/view/${article.REVIEW_IDX}`

    // 게시글 시간 변경 (리스트 화면)
    const listTime = List.reviewTime(article.REVIEW_DATE).toString().split("T")[0];
    // console.log(listTime);


    // // 좋아요 상태 리스트에서 확인
    // const [like, setLike] = useState({
    //     like_idx: 0,
    //     review_idx: '',
    //     user_idx: '',
    //     like_value: '',
    // });

    // const likeState = () => {
    //     const params = article.REVIEW_IDX;
    //     const sessionIdx = window.sessionStorage.getItem("USER_IDX");
    //     console.log('라이크params',params);
    //     axios
    //         .post("http://localhost:8008/view/like", {params, sessionIdx})
    //         .then((res) => {
    //             setLike({
    //                 ...like,
    //                 like_idx: res.data[0].LIKE_IDX,
    //                 review_idx: res.data[0].REVIEW_IDX,
    //                 user_idx: res.data[0].USER_IDX,
    //                 like_value: res.data[0].LIKE_OX,
    //             });
    //         })
    //         .catch((e) => {console.error(e);});
    //         console.log('리스트 like', like);
    // };

    // useEffect(() => {
    //     likeState();
    // },[]);


    return (
        <div>
            <div className="ListBox">
                <a href={viewLink} id={article.REVIEW_IDX}></a>
                {url === ""? <div className="noImg"><img src={logo} alt="travel basket" /></div> : <div className="ReviewThumb" style={thumbImg}></div>}
                <div className="ReviewTxt">
                    <h3>{article.REVIEW_TITLE}</h3>
                    {/* <p>{article.REVIEW_TXT}</p> */}
                    {/* <p dangerouslySetInnerHTML={{ __html: article.REVIEW_TXT }}></p> */}
                    <h4>{article.USER_NICK} 닉네임</h4>
                    <ul>
                        <li>{article.REVIEW_LIKE}</li>
                        <li>{article.REVIEW_IDX} 댓글 개수 연결</li>
                        <li>{article.REVIEW_CNT} 조회수</li>
                        <li>{listTime}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ReviewArticle;