import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import * as List from './ReviewList';


const ReviewView = () => {
    var ckCnt = 0;
    var ckIdx = 0;
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
    
    // const [cnt, setCnt] = useState({
        
    // });

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


    // const [like, setLike] = useState({
    //     like_idx: 0,
    //     review_idx: '',
    //     user_idx: '',
    //     like_ox: 'X',
    // });

    // 좋아요
    const reviewLike = () => {
        // const [like, setLike] = useState();
        //좋아요 버튼 클릭시에 현재 세션 회원번호 가져가야하고

        // axios
        //     .post("http://localhost:8008/like", {

        //     }).then((res) => {
        //         const likeCk = 'O'
        //         if(res.data[0]===0){
        //             axios.post("http://localhost:8008/likeUpdate", {
        //                 idx, session.idx, likeCk

        //             })
        //         }else{
        //             const test = res.data[0].LIKE_OX
        //             if(test ==='O'){

        //             }else{
                        
        //             }
        //         }
        //     })
        //     .catch((e) => {console.error(e);});

        axios
            .post("http://localhost:8008/viewlike", {params})
            .then((res) => {
                console.log('like 데이터', res.data[0]);
                console.log('like 게시물 번호', params);
                const likeIdx = params.idx;
                const sessionIdx = window.sessionStorage.getItem("USER_IDX");
                const likeCk = 'O';
                if(res.data[0] === 0){
                    axios
                        .post("http://localhost:8008/likeupdate", {
                            // idx, session.idx, likeCk
                            likeIdx,
                            sessionIdx,
                            likeCk
                        })
                        .then((res) => {
                            console.log(res);
                        })
                        .catch((e) => {console.error(e);});
                }else{
                    const test = res.data[0].LIKE_OX
                    if(test ==='O'){

                    }else{
                        
                    }
                }
            }).then(
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
                    <li>{view.review_like} <button onClick={reviewLike}>좋아요</button></li>
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