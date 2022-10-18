import React, { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Pagination from "react-js-pagination";
import * as List from './ReviewList';

const ReviewStorage = () => {
    const navigate = useNavigate();
    const sessionIdx = window.sessionStorage.getItem("USER_IDX");

    const [myReview, setMyReview] = useState([]);
    const [reviewSlice, setReviewSlice] = useState(10);
    const [page, setPage] = useState(1);

    var countMR = myReview.length;
    var MRIdx = countMR - (page - 1) * reviewSlice;

     useEffect(() => {
        getMyReview();
    },[]);

    const getMyReview = () => {
        axios
            .post("http://localhost:8008/storage/review", {sessionIdx})
            .then((res) => {
                setMyReview(res.data)
            })
            .catch((e) => {console.error(e);});
    }


    // toggle
    // const sortRef = useRef();
    const [toggle, setToggle] = useState(false);

    // 보관함 정렬
    const checkSort = (e) => {
        const order = e.target.id;
        e.currentTarget.classList.toggle("on");
        // e.currentTarget.classList.remove("on");
        // e.currentTarget.classList.add("on");
        // console.log(e.currentTarget)
        // if (e.currentTarget) {
        //     e.currentTarget.classList.add("on");
        // } else if (!e.currentTarget){
        //     e.currentTarget.classList.remove("on");
        // }
        // setToggle();
        // document.getElementsByClassName('toggleSemo').preventDefault();
        // e.currentTarget.preventDefault();
        setToggle(!toggle);
        storageSort(order);
    }

    const storageSort = (order) => {
        axios
            .post("http://localhost:8008/storage/review/orderBy", {
                order: order,
                sessionIdx,
            })
            .then((res) => {
                setMyReview(res.data);
                setPage(1);
            })
            .catch((e) => {console.error(e);});
    };


    const handlePage = (page) => {
        setPage(page);
    }

    return (
        <div className="ReviewStorage">
            <h2>후기 보관함</h2>

            <div className="LikeList">
                <p>총 {countMR} 개</p>
                <table className="storageTable" border="0" cellPadding="0" cellSpacing="0">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>제목</th>
                            <th onClick={checkSort} id="REVIEW_DATE">작성날짜 <span className="toggleSemo">▾</span></th>
                            <th onClick={checkSort} id="REVIEW_CNT">조회수 <span className="toggleSemo">▾</span></th>
                            <th onClick={checkSort} id="REVIEW_LIKE">좋아요수 <span className="toggleSemo">▾</span></th>
                            <th onClick={checkSort} id="COMMENT_CNT">댓글수 <span className="toggleSemo">▾</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        {myReview
                            .slice(
                                reviewSlice * (page - 1),
                                reviewSlice * (page - 1) + reviewSlice,
                            )
                            .map((myReview) => {
                                return (
                                    <tr>
                                        {/* <td>{(countLA--) - (page - 1) + likeSlice}</td> */}
                                        <td>{MRIdx--}</td>
                                        <td className="storageTitle" onClick={() => navigate(`/review/view/${myReview.REVIEW_IDX}`)}>{myReview.REVIEW_TITLE}</td> 
                                        <td>{List.reviewTime(myReview.REVIEW_DATE).toString().split("T")[0]}</td> 
                                        <td>{myReview.REVIEW_CNT}</td> 
                                        <td>{myReview.REVIEW_LIKE}</td> 
                                        <td>{myReview.COMMENT_CNT}</td> 
                                    </tr>
                                )
                        })}
                    </tbody>
                </table>
            </div>

            <Pagination
                activePage={page}
                itemCountPerPage={reviewSlice}
                totalItemsCount={myReview.length}
                prevPageText={"‹"}
                nextPageText={"›"}
                onChange={handlePage}
            />
        </div>
    );
};

export default ReviewStorage;