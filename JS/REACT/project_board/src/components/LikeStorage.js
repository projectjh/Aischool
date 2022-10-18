import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
// import LikeArticle from './LikeArticle';
import Pagination from "react-js-pagination";
import * as List from './ReviewList';

const LikeStorage = () => {
    const navigate = useNavigate();
    const sessionIdx = window.sessionStorage.getItem("USER_IDX");

    const [likelist, setLikelist] = useState([]);
    const [likeSlice, setLikeSlice] = useState(10);
    const [page, setPage] = useState(1);
    
    var countLA = likelist.length;
    var likeIdx = countLA - (page - 1) * likeSlice;
    
    useEffect(() => {
        getLikeList();
    },[]);

    const getLikeList = () => {
        axios
            .post("http://localhost:8008/storage/like", {sessionIdx})
            .then((res) => {
                // console.log('좋아요 보관함', res);
                setLikelist(res.data)
            })
            .catch((e) => {console.error(e);});
    }

    // console.log('좋아요 리스트 개수', likelist.likeList.length);
    console.log(likelist);
    // const [countLA, setCountLA] = useState(1)
    // setCountLA(likelist.length)
    // console.log(likelist)
    const handlePage = (page) => {
        setPage(page);
    }

    return (
        <div className="LikeStorage">
            <h2>좋아요 보관함</h2>

            <div className="LikeList">
                <p>총 {countLA} 개</p>
                <table border="0" cellPadding="0" cellSpacing="0">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>제목</th>
                            <th>작성자</th>
                            <th>작성날짜</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/*likelist.likeList.map((article) => {
                            return (
                                <tr>
                                    <td>{countLA--}</td>
                                    <td className="storageTitle" onClick={() => navigate(`/review/view/${article.REVIEW_IDX}`)}>{article.REVIEW_TITLE}</td> 
                                    <td>{article.USER_NICK}</td> 
                                    <td>{List.reviewTime(article.REVIEW_DATE).toString().split("T")[0]}</td> 
                                </tr>
                            )
                        })*/}

                        {likelist
                            .slice(
                                likeSlice * (page - 1),
                                likeSlice * (page - 1) + likeSlice,
                            )
                            .map((likelist) => {
                                return (
                                    <tr>
                                        {/* <td>{(countLA--) - (page - 1) + likeSlice}</td> */}
                                        <td>{likeIdx--}</td>
                                        <td className="storageTitle" onClick={() => navigate(`/review/view/${likelist.REVIEW_IDX}`)}>{likelist.REVIEW_TITLE}</td> 
                                        <td>{likelist.USER_NICK}</td> 
                                        <td>{List.reviewTime(likelist.REVIEW_DATE).toString().split("T")[0]}</td> 
                                    </tr>
                                )
                        })}
                    </tbody>
                </table>
            </div>

            <Pagination
                activePage={page}
                itemCountPerPage={likeSlice}
                totalItemsCount={likelist.length}
                prevPageText={"‹"}
                nextPageText={"›"}
                onChange={handlePage}
            />
        </div>
    );
};

export default LikeStorage;