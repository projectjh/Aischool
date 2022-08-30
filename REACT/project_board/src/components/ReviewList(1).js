import React, { useEffect, useState, useRef, useDispatch } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ReviewArticle from './ReviewArticle';
// import PageLink from './PageLink';
// import Paging from './Paging';
import Pagination from "react-js-pagination";


const ReviewList = () => {
     
    useEffect(()=>{
        getList();
        valueSort(); 
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

    // // 페이징 추가
    // const [pageLink, setPageLink] = useState([]);
    // // const pageRef = useRef('');

    // var page_num = 1;
    // const page_size = 10;
    // var page_cnt = 1;
    // var article_cnt = 0;
    
    

    // const handlePage = (e) => {
    //     console.log('handlePage => ', e.target.id); 
    //     page_num = e.target.id;
    //     // pageRef.current.classList.add('on');
        
    //     getList();
    // };

    // const getList = () => {
    //     axios
    //         .get("http://localhost:8008/review/cnt", {})
    //         .then((res) => {
    //             const {data} = res;
    //             article_cnt = data[0].CNT;
    //             page_cnt = Math.ceil(article_cnt / page_size);
    //             var page_link = [];
    //             for (let i = 1; i <= page_cnt; i++) page_link.push(i);
    //             setPageLink(page_link);
    //             // console.log('게시물 개수 확인1 =>', data[0].CNT);
    //         })
    //         .then(() => {
    //             axios
    //                 .post("http://localhost:8008/review", {
    //                     page_num: page_num,
    //                     page_size: page_size,
    //                     article_cnt: article_cnt,
    //                 })
    //                 .then((res) => {
    //                     const {data} = res;
    //                     setReviewlist({
    //                         reviewList: data,
    //                     });
    //                 })
    //                 .catch((e) => {console.error(e);});
    //         })
    //         .catch((e) => {console.error(e);});
    //     // console.log('게시물 개수 확인2 =>', alllist.allList.length);
    // };

    
    // 게시물 페이징 ==============================================================
    const [reviewlist, setReviewlist] = useState({
        reviewList: [],
    });
    // const getCnt = () => {
    //     axios
    //         .get("http://localhost:8008/review/cnt", {})
    //         .then((res) => {
    //             const {data} = res;
    //             article_cnt = data[0].CNT;  // article_cnt => 게시물 총개수 41개
    //             console.log('총 게시물 개수 =>', article_cnt = data[0].CNT);
                 
    //         })
    //         .catch((e) => {console.error(e);});
    // };

    // const getList = () => {
    //     axios
    //         .post("http://localhost:8008/review", {
    //             page, page_size, article_cnt
    //         })
    //         .then((res) => {
    //             console.log('게시물 페이징?', res);

    //             const {data} = res;
    //             setReviewlist({
    //                 reviewList: data,
    //             }); 
    //         })
    //         .catch((e) => {console.error(e);});
    // }
   
    
    
    // 게시물 & 페이징
    const [articleCnt, setArticleCnt] = useState(0);
    const [page, setPage] = useState(1); 

    var pageCk = 1;
    var page_num = 1;
    const page_size = 10;
    var article_cnt = 0;
    

    const handlePage = (pageCking) => {       
        setPage(pageCking); 
        pageCk = pageCking;
        getList();
        console.log('handlePage=>', page); 
    }; 



    const getList = () => {
        axios
            .get("http://localhost:8008/review/cnt", {})
            .then((res) => {
                const {data} = res;
                article_cnt = data[0].CNT;  // article_cnt => 게시물 총개수 41개
                console.log('총 게시물 개수 =>', article_cnt = data[0].CNT);
                setArticleCnt(article_cnt);
            })
            .then(() => {
                axios 
                    .post("http://localhost:8008/review", {
                        page: pageCk, 
                        page_size: page_size, 
                        article_cnt: article_cnt,
                    })
                    .then((res) => {
                        console.log('게시물 페이징?', res);

                        const {data} = res;
                        setReviewlist({
                            reviewList: data,
                        }); 

                    })
                    .catch((e) => {console.error(e);});
            })
            .catch((e) => {console.error(e);});
    }



    // async function getList() {
    //     await axios
    //         .get("http://localhost:8008/review/cnt", {})
    //         .then((res) => {
    //             const {data} = res;
    //             article_cnt = data[0].CNT;  // article_cnt => 게시물 총개수 41개
    //             console.log('총 게시물 개수 =>', article_cnt = data[0].CNT);
                 
    //         })
    //         .catch((e) => {console.error(e);}); 
    
    //     await axios
    //         .post("http://localhost:8008/review", {
    //             page, page_size, article_cnt
    //         })
    //         .then((res) => {
    //             console.log('게시물 페이징?', res);

    //             const {data} = res;
    //             setReviewlist({
    //                 reviewList: data,
    //             }); 
    //         })
    //         .catch((e) => {console.error(e);});
    // }

 

    // 게시물 검색 =================================================================

    const [searchlist, setSearchlist] = useState({
        searchList: [],
    });

    const optionRef = useRef();
    const searchRef = useRef();

    const ReviewSearch = () => {
        console.log(optionRef.current.value);
        var optionValue = optionRef.current.value;
        var searchValue = searchRef.current.value;

        axios
            .post("http://localhost:8008/review/search", {
                optionValue,
                searchValue               
            })
            .then((res) => {
                // console.log('검색어 결과 출력 =>', res);
                if(res.data !== 0) {
                    setSearchlist({
                        ...searchlist,
                        searchList: res.data,
                    });
                } else {
                    alert('검색 결과가 없습니다.');
                }
            })
            .catch((e) => {console.error(e);});
    }
    
  
    // 검색 ENTER
    const onKeyPress = (e) => {
        if(e.key === 'Enter') {
            ReviewSearch();
        }
    }
    


    // 정렬 =======================================================

    const [alllist, setAlllist] = useState({
        allList: [],
    });
    
    const dateRef = useRef();
    const countRef = useRef();
    const likeRef = useRef();

    const valueSort = (e) => {
        axios
            .get("http://localhost:8008/review/all")
            .then((res) => {
                console.log('valueSort => ', res.data);
                setAlllist({
                    ...alllist,
                    allList: res.data,
                });
            })
            .catch((e) => {console.err(e);});
    }

    const valueCompare = (e) => {
        var sortAllData = alllist.allList.sort().reverse();
        var sortSearchData = searchlist.searchList.sort().reverse();

        if (dateRef.current.contains(e.target)) {
            setAlllist({
                ...alllist,
                allList: sortAllData.sort(compare('REVIEW_IDX')).reverse(),
            });

            setSearchlist({
                ...searchlist,
                searchList: sortSearchData.sort(compare('REVIEW_IDX')).reverse(),
            });
        } else if (countRef.current.contains(e.target)) {
            console.log('조회수 정렬 =>', alllist.allList);
            
            setAlllist({
                ...alllist,
                allList: sortAllData.sort(compare('REVIEW_CNT')).reverse(),
            });

            setSearchlist({
                ...searchlist,
                searchList: sortSearchData.sort(compare('REVIEW_CNT')).reverse(),
            });
        } else if (likeRef.current.contains(e.target)) {
            console.log('좋아요 정렬 =>', alllist.allList);

            setAlllist({
                ...alllist,
                allList: sortAllData.sort(compare('REVIEW_LIKE')).reverse(),
            });

            setSearchlist({
                ...searchlist,
                searchList: sortSearchData.sort(compare('REVIEW_LIKE')).reverse(),
            });

        } 

        // console.log('정렬되라', alllist.allList);
    }

    function compare(key) {
        return (a, b) => (a[key] > b[key] ? 1 : (a[key] < b[key] ? -1 : 0));
    }

    //총 게시물 수 출력
    var all_cnt = alllist.allList.length;

    // 검색 게시물 수 출력
    var search_cnt = searchlist.searchList.length;
    console.log('검색개수체크', search_cnt);
    
     
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
    } 
    // 등록된 게시물이 있을 떄
    else{
        return (
            <div className="ReviewList">
                {/* 게시물 검색 */}
                <div className="BoardSearch">
                    <select className="BoardOption" ref={optionRef}>
                        <option value="REVIEW_TITLE, REVIEW_TXT, USER_NICK">전체</option>
                        <option value="REVIEW_TITLE">제목</option>
                        <option value="REVIEW_TXT">내용</option>
                        <option value="USER_NICK">작성자</option>
                    </select>
                    <input type="text" name="reviewSearch" ref={searchRef} placeholder="후기 검색" onKeyPress={onKeyPress} />
                    <button onClick={ReviewSearch}>search</button>
                </div>
                
                <p>총 {all_cnt}개</p>
                <a href="/review/write" className="btn-go">글쓰기</a>

                {/* 게시물 정렬 */}
                <div className="sortList">
                    <ul>
                        <li onClick={valueCompare} ref={dateRef}>최신순</li>
                        <li onClick={valueCompare} ref={countRef}>조회수</li>
                        <li onClick={valueCompare} ref={likeRef}>좋아요수</li>
                    </ul>
                </div>
                
                {/* 게시물 리스트 */}
                <div className="Review">
                    {searchlist.searchList.length === 0 ? 
                        reviewlist.reviewList.map((article) => {
                            return (
                                <ReviewArticle article={article} />
                            );
                        }):
                        searchlist.searchList.map((article) => {
                            return (
                                <ReviewArticle article={article} />
                            );
                        }
                    )}
                </div>
                
                {/* 게시물 페이징 */}
                {/* <div className="paging">
                    <ul>
                        <li><a href="#">⟪</a></li>
                        {pageLink.map((page) => {
                            return (
                                <PageLink page={page} key={page} handlePage={handlePage} />
                            );
                        })}
                        <li><a href="#">⟫</a></li>
                    </ul>
                </div> */}
                {/* <Paging page={page} setPage={setPage} articleCnt={all_cnt} handlePage={handlePage} /> */}
                <Pagination
                    // id={page}
                    activePage={page}
                    itemCountPerPage={10}
                    totalItemsCount={articleCnt}
                    prevPageText={"‹"}
                    nextPageText={"›"}
                    onChange={handlePage}
                    // onChange={handleChange}
                    // onClick={handlePage}
                />
            </div>
        );
    }
    // // 검색된 게시물이 있을 때
    // else {    
    //     return (
    //         <div className="ReviewList">
    //             {/* 게시물 검색 */}
    //             <div className="BoardSearch">
    //                 <select className="BoardOption" ref={optionRef}>
    //                     <option value="REVIEW_TITLE, REVIEW_TXT, USER_NICK">전체</option>
    //                     <option value="REVIEW_TITLE">제목</option>
    //                     <option value="REVIEW_TXT">내용</option>
    //                     <option value="USER_NICK">작성자</option>
    //                 </select>
    //                 <input type="text" name="reviewSearch" ref={searchRef} placeholder="후기 검색" onKeyPress={onKeyPress} />
    //                 <button onClick={ReviewSearch}>search</button>
    //             </div>
                
    //             <p>총 {search_cnt}개</p>
    //             <a href="/review/write" className="btn-go">글쓰기</a>
                
    //             {/* 게시물 정렬 */}
    //             <div className="sortList">
    //                 <ul>
    //                     <li ref={countRef}>조회수</li>
    //                     <li ref={likeRef}>좋아요수</li>
    //                 </ul>
    //             </div>

    //             {/* 게시물 리스트 */}
    //             <div>
    //                 {searchlist.searchList.map((article) => {
    //                     return (
    //                         <ReviewArticle article={article} />
    //                     );
    //                 })}
    //             </div>
                
    //              {/* 게시물 페이징 */}
    //             <div className="paging">
    //                 <ul>
    //                     <li><a href="#">⟪</a></li>
    //                     {pageLink.map((page) => {
    //                         return (
    //                             <PageLink page={page} key={page} handlePage={handlePage} />
    //                         );
    //                     })}
    //                     <li><a href="#">⟫</a></li>
    //                 </ul>
    //             </div>
    //         </div>
    //     );
    // }
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