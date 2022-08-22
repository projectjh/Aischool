import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ReviewArticle from './ReviewArticle';
import PageLink from './PageLink';


const ReviewList = () => {
    const navigate = useNavigate();
    
    const [reviewlist, setReviewlist] = useState({
        reviewList: [],
    });

    
    useEffect(()=>{
        getList();
    },[]);

    // const getList = () => {
    //     axios
    //         .get("http://localhost:8008/review", {})
    //         .then((res) => {
    //             // console.log('리뷰 getList res => ', res);

    //             const {data} = res;
    //             setReviewlist({
    //                 reviewList: data,
    //             });
    //             // navigate('/review/view');
    //         })
    //         .catch((e) => {console.error(e);});
    // };

    // 페이징 추가
    const [pageLink, setPageLink] = useState([]);
    // const pageRef = useRef('');

    var page_num = 1;
    const page_size = 10;
    var page_cnt = 1;
    var article_cnt = 0;

    const handlePage = (e) => {
        console.log('handlePage => ', e.target.id); 
        page_num = e.target.id;
        // pageRef.current.classList.add('on');
        getList();
    };

    async function getList() {
        await axios
            .get("http://localhost:8008/cnt", {})
            .then((res => {
                const {data} = res;
                article_cnt = data[0].CNT;
                page_cnt = Math.ceil(article_cnt / page_size);
                var page_link = [];
                for (let i = 1; i <= page_cnt; i++) page_link.push(i);
                setPageLink(page_link);
            }))
            .catch((e) => {console.error(e);});

            console.log('게시물 개수 확인 =>', article_cnt);

        await axios
            .post("http://localhost:8008/review", {
                page_num: page_num,
                page_size: page_size,
                article_cnt: article_cnt,
            })
            .then((res) => {
                const {data} = res;
                setReviewlist({
                    reviewList: data,
                });
            })
            .catch((e) => {console.error(e);});
    };
    
    
    // 등록된 게시물이 없을때
    if (reviewlist.reviewList.length === 0) {
        window.sessionStorage.setItem('USER_IDX', 18);
        return (
            <div className="ReviewList">
                <a href="/review/write" className="btn-go">글쓰기</a>

                <div className="NoList">
                    <p>등록된 게시물이 없습니다.</p>
                </div>
            </div>
        );
    } else {
    // 등록된 게시물이 있을 때
        return (
            <div className="ReviewList">
                <a href="/review/write" className="btn-go">글쓰기</a>

                <div>
                    {reviewlist.reviewList.map((article) => {
                        return (
                            <ReviewArticle article={article} />
                        );
                    })}
                </div>

                <div className="paging">
                    <ul>
                        <li><a href="#">⟪</a></li>
                        {pageLink.map((page) => {
                            return (
                                <PageLink page={page} key={page} handlePage={handlePage} />
                            );
                        })}
                        <li><a href="#">⟫</a></li>
                    </ul>
                </div>
            </div>
        );
    }
};

export default ReviewList;

   
// 게시글 날짜 변환 함수
export function reviewTime(date) {
    const start = new Date(date);
    const end = new Date();
    const diff = (end - start);

    const times = [
        { time: "분", milliSeconds: 1000 * 60 },
        { time: "시간", milliSeconds: 1000 * 60 * 60 },
        { time: "일", milliSeconds: 1000 * 60 * 60 * 24 },
        { time: "개월", milliSeconds: 1000 * 60 * 60 * 24 * 30 },
        { time: "년", milliSeconds: 1000 * 60 * 60 * 24 * 365 },
    ].reverse(); // 아래 코드를 위해서는 (년 ~ 분) 순서여야함

    // if (diff >= 86400000) {
    if (diff >= 1000 * 60 * 60 * 24 ) {
        // console.log('diff를 확인하고싶어', diff);
        // const pastDate = date.toString().replace("T", " ").replace(/\..*/, '');;
        return `${date}`;
    } else {
        // 년 단위부터 알맞는 단위 찾기
        for (const value of times) {
            const betweenTime = Math.floor(diff / value.milliSeconds);
            // 큰 단위는 0보다 작은 소수점 값이 나옴
            if (betweenTime > 0) {
                return `${betweenTime}${value.time} 전`;
            }
        }
    }

    // 모든 단위가 맞지 않을 시
    return "방금 전";   
};