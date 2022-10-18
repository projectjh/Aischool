import { useState } from "react";
import ReviewList from "./ReviewList";
import ReviewView from "./ReviewView";
import ReviewWrite from "./ReviewWrite";
import ReviewModify from "./ReviewModify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Review = () => {
    // [검색]

    // [리스트]
    // -- 게시물 번호, 썸네일, 제목, 내용, 날짜, 회원번호(닉네임), 좋아요, 조회수
    const [reviewlist, setReviewlist] = useState({
        reviewList: [],
    });

    const navigate = useNavigate();

    const [article, setArticle] = useState({
        review_idx: 0,
        review_thumb: '',
        review_title: '',
        review_txt:'',
        review_date: '',
        user_idx: '',
        user_nick: '',
        review_like: '',
        review_cnt: '',
        review_file: ''
    });

    // 0: List | 1: View | 2: Write | 3: Modify
    const [actionMode, setActionMode] = useState({mode: 0});

    const getList = () => {
        axios
            .get("http://localhost:8008/list", {})
            .then((res) => {
                const {data} = res;
                setReviewlist({
                    reviewList: data,
                });
                setActionMode({
                    ...actionMode,
                    mode: 0,
                });
            })
            .catch((e) => {console.error(e);});
    };

    const handleView = (e) => {
        axios
            .post("http://localhost:8008/view", {idx: e.target.id})
            .then((res) => {
                // console.log('view res =>', res);
                // console.log('target =>', e.target.id);
                
                const {data} = res;
                if (res.data.length > 0) {
                    setArticle({
                        ...article,
                        review_idx: data[0].REVIEW_IDX,
                        // review_thumb: data[0].REVIEW_THUM,
                        review_title: data[0].REVIEW_TITLE,
                        review_txt: data[0].REVIEW_TXT,
                        review_date: data[0].REVIEW_DATE,
                        user_idx: data[0].USER_IDX,
                        user_nick: data[0].USER_NICK,
                        review_like: data[0].REVIEW_LIKE,
                        review_cnt: data[0].REVIEW_CNT,
                        // review_file: data[0].REVIEW_FILE
                    });

                    setActionMode({
                        ...actionMode,
                        mode: 1,
                    });
                }
                // navigate('/view');
                    // const txt = data[0].REVIEW_TXT;
                    // console.log('데이타자르기위해', txt.substring(txt.indexOf('<img'), txt.indexOf('</p>')));
            })
            .catch((e) => {console.error(e);});
    };

    const writeAction = () => {
        setActionMode({
            ...actionMode,
            mode: 2,
        });
    };

    const handleModify = (e) => {
        // console.log("ck1 -------",e.target.id)
        
        axios
            .post("http://localhost:8008/view", {idx: e.target.id}) 
            .then((res) => {
                console.log('target =>', e.target.id);

                const {data} = res;
                if(res.data.length > 0) {
                    setArticle({
                        ...article,
                        review_idx: data[0].REVIEW_IDX,
                        review_title: data[0].REVIEW_TITLE,
                        review_txt: data[0].REVIEW_TXT,
                        review_date: data[0].REVIEW_DATE,
                        user_idx: data[0].USER_IDX,
                        user_nick: data[0].USER_NICK,
                        review_like: data[0].REVIEW_LIKE,
                        review_cnt: data[0].REVIEW_CNT,
                    });
                    setActionMode({
                        ...actionMode,
                        mode: 3,
                    });
                }
            })
            .catch((e) => {console.error(e);})
    };

    // // 실제수정부분
    // const handleUpdate = () => {
    //     console.log('handleUpdate =>', article);

    //     axios
    //         .post("http://localhost:8008/modify", {
    //             article: article,
    //             // newContent: content,
    //         })
    //         .then(() => {getList();})
    //         .catch((e) => {console.error(e);});
    // }

    // console.log('Modify article =>', article);
    // console.log('Modify article.content => ', );

    // const goReview


    // [페이징]



    // [페이지 반환]
    if (actionMode.mode === 0) {
        // 0. List
        return (
            <div>
                <button onClick={writeAction}>글쓰기</button>
                <ReviewList reviewlist={reviewlist} actionmode={actionMode} handlelist={getList} article={article} handleview={handleView} />
            </div>
        );
    } else if (actionMode.mode === 1) {
        // 1. View
        return (
            <div>
                <ReviewView actionmode={actionMode} handlelist={getList} article={article} handleview={handleView} handlemodify={handleModify} />
            </div>
        );
    } else if (actionMode.mode === 2) {
        // 2. Write
        return (
            <div>
                <ReviewWrite actionmode={actionMode} handlelist={getList} />
            </div>
        );
    } else if (actionMode.mode === 3) {
        // 3. Modify
        return (
            <div>
                <ReviewModify actionmode={actionMode} article={article} setarticle={setArticle} handlelist={getList}  />
            </div>
        ); 
    }
};

export default Review;