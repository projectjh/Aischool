import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import * as List from './ReviewList';
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";


const ReviewView = () => {
    var ckCnt = 0;
    var ckIdx = 0;
    var likeOX; 
    const navigate = useNavigate();
    const params = useParams();
    console.log("params :", params)

    const [view, setView] = useState({
        review_idx: 0,
        review_title: '',
        review_txt: '',
        review_date: '',
        user_idx: '',
        user_nick: '',
        review_like: '',
        review_cnt: '',
    });

    console.log('뷰어 view => ', view);


    useEffect(()=>{
        handleView();
    },[]);

    const handleView = () => {
        axios
            .post("http://localhost:8008/review/view", {params})
            .then((res) => {
                // console.log('handleView res =>', res);

                const {data} = res;     
                ckIdx = data[0].REVIEW_IDX;           
                ckCnt = data[0].REVIEW_CNT;           
                if (res.data.length > 0) {
                    setView({
                        ...view,
                        review_idx: data[0].REVIEW_IDX,
                        review_title: data[0].REVIEW_TITLE,
                        review_txt: data[0].REVIEW_TXT,
                        review_date: data[0].REVIEW_DATE,
                        user_idx: data[0].USER_IDX,
                        user_nick: data[0].USER_NICK,
                        review_like: data[0].REVIEW_LIKE,
                        review_cnt: data[0].REVIEW_CNT,
                        // review_file: data[0].REVIEW_FILE
                    });
                }
                // console.log(typeof view.review_cnt);
            })
            .then((res) => {
                const viewCnt = ckCnt + 1;
                const viewIdx = ckIdx;
                axios
                    .post("http://localhost:8008/viewcnt", {
                        viewCnt,
                        viewIdx
                    })
                    .then((res)=>{
                        console.log(res);
                    })
                    .then((res) => {
                         axios
                            .post("http://localhost:8008/review/view", {params})
                            .then((res) => {
                                // console.log('handleView res =>', res);

                                const {data} = res;     
                                ckIdx = data[0].REVIEW_IDX;           
                                ckCnt = data[0].REVIEW_CNT;           
                                if (res.data.length > 0) {
                                    setView({
                                        ...view,
                                        review_idx: data[0].REVIEW_IDX,
                                        review_title: data[0].REVIEW_TITLE,
                                        review_txt: data[0].REVIEW_TXT,
                                        review_date: data[0].REVIEW_DATE,
                                        user_idx: data[0].USER_IDX,
                                        user_nick: data[0].USER_NICK,
                                        review_like: data[0].REVIEW_LIKE,
                                        review_cnt: data[0].REVIEW_CNT,
                                        // review_file: data[0].REVIEW_FILE
                                    });
                                }
                                // console.log(typeof view.review_cnt);
                            })
                    })
                    .catch((e) => {console.error(e);});
            })
            .catch((e) => {console.error(e);});
    };
    
    // 게시글 시간 변경 (뷰어)
    const viewTime = List.reviewTime(view.review_date).toString().replace("T", " ").replace(/\..*/, '');


    // 좋아요
    const reviewLike = () => {
        axios
        .post("http://localhost:8008/viewlike", {params})
        .then((res) => {
            console.log('like 데이터', res.data);
            console.log('like 게시물 번호', params);
            likeOX = res.data[0].LIKE_OX;
            const reviewIdx = params.idx;
            const sessionIdx = window.sessionStorage.getItem("USER_IDX");
            var likeCk = 'O';

            // likeValue = res.data[0].LIKE_OX;
            // console.log("test : ", likeValue);
            // console.log(reviewIdx, sessionIdx, likeCk);
            if(res.data == 0){
                axios
                    .post("http://localhost:8008/like/insert", {
                        // idx, session.idx, likeCk
                        reviewIdx,
                        sessionIdx,
                        likeCk
                    })
                    .then((res) => {
                        // console.log('좋아요 누른거 응답이 필요해 =>', res);
                    })
                    .catch((e) => {console.error(e);});
                }else{
                    if (res.data[0].LIKE_OX == 'O') {
                        likeOX = "X"
                    }else{
                        likeOX = "O"
                    }

                    axios
                        .post("http://localhost:8008/like/update", {
                            reviewIdx,
                            sessionIdx,
                            likeOX
                        })
                        .then((res) => {
                            console.log('좋아요 누른거 바뀌었는지확인 =>', res);
                            
                        })
                        .catch((e) => {console.error(e);});
            }
        })
        .then(()=>{
            console.log("test2 : ", likeOX); 
        }
            // likeox확인해서 o개수만 update count => 게시물 저장
            )
            .catch((e) => {console.error(e);});
              
    };
            
    // 수정 페이지 링크
    const modifyLink = `/review/modify/${view.review_idx}`

    // 게시물 삭제
    const handleDelete = (e) => {
        console.log('삭제 버튼 만들거야 ', view.review_idx);
        if (window.confirm("정말 삭제하시겠습니까?")) {
            axios
                .post("http://localhost:8008/delete", {
                    idx: view.review_idx,
                })
                .then((res) => {
                    navigate('/review');
                })
                .catch((e) => {console.error(e);});
        }
    };
useEffect(()=>{
    console.log("나와!!!!",likeOX)
},[likeOX])


    return (
        <div>
            <a href="/review" className="btn-go">목록</a>
            <div className="ViewBox">
                <div className="ViewTitle">
                    <h2>타이틀.{view.review_title}</h2>
                    <ul>
                        <li>닉네임.{view.user_nick}</li>
                        <li>날짜.{viewTime}</li>
                    </ul>
                </div>
                <div className="ViewImg"></div>
                <div className="ViewTxt" dangerouslySetInnerHTML={{ __html: view.review_txt }}>
                </div>
                <ul>
                    <li>
                        <span className="likeIcon" onClick={reviewLike}>
                            {likeOX === "" ? <IoMdHeart /> : <IoMdHeartEmpty />}
                        </span>
                        {view.review_like}
                    </li>
                    <li>{view.review_idx}</li>
                    <li>{view.review_cnt}</li>
                </ul>
            </div>

            <div className="btn-wrap">
                <a className="btn-go" href={modifyLink} id={view.review_idx}>수정</a>
                <button onClick={handleDelete}>삭제</button>
            </div>
        </div>
    );
};

export default ReviewView;