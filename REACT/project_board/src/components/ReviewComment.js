import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReviewCommentArticle from './ReviewCommentArticle';

const ReviewComment = ({view, setView}) => {
    const [comment, setComment] = useState({
        commentList: [],
    });
    const [textCount,setTextCount] = useState(0)
    const commentRef = useRef();
    const params = useParams();
    const sessionIdx =  window.sessionStorage.getItem('USER_IDX');

    useEffect(() => {
        commentView();
        // textTyping();
    }, [comment]);

    // 댓글 작성
    const commentWrite = () => {
        if (commentRef.current.value === "" || commentRef.current.value === null) {
            alert('내용을 입력해주세요:)');
            commentRef.current.focus();
            return false;
        }

        axios
            .post("http://localhost:8008/review/comment/insert", {
                params,
                comment: commentRef.current.value,
                user: sessionIdx,
            })
            .then((res) => {
                alert('댓글이 등록되었습니다.');
                commentRef.current.value = '';
                setTextCount(0);
                console.log(view.comment_cnt);
                setView({
                    ...view,
                    comment_cnt: view.comment_cnt + 1
                });
                
                // window.location.reload();

                axios
                    .post("http://localhost:8008/review/comment/cnt", {params})
                    .then((res)=>{
                        // console.log("여기 오나요??")
                    })
                    .catch((e) => {console.error(e)});
            })
            .catch((e) => {console.error(e);});
    }

    // 댓글 등록 취소
    const commentReset = () => {
        commentRef.current.value = '';
    }

    // 댓글 리스트
    const commentView = () => {
        axios
            .post("http://localhost:8008/review/comment", {params})
            .then((res) => {
                // console.log('등록된 댓글 확인', res);
                setComment({
                    commentList: res.data,
                })
            })
            .catch((e) => {console.error(e);});
    }

    


    // 댓글 글자 수 표현
    const textTyping = () => {
        console.log(commentRef.current.value.length); 

        if (commentRef.current.value === null || commentRef.current.value.length == 0) {
            setTextCount(0);
        } else {
            setTextCount(commentRef.current.value.length);
        }
    } 


    
    
    return (
        <div>
            <h3>댓글</h3>

            <div className="CommentWrite"> 
                <div className="textLimit">
                    <span>{textCount}</span>
                    <span> / 300자</span> 
                </div>
                <textarea ref={commentRef} onKeyUp={textTyping} maxLength="300" placeholder="댓글을 입력해주세요."></textarea>
                <div className="btn-wrap">
                    <button type="submit" onClick={commentWrite}>등록</button>
                    <button type="reset" onClick={commentReset}>취소</button>
                </div>
            </div>
            {comment.commentList.map((comment) => { 
                // console.log(comment);
                return (
                    <ReviewCommentArticle comment={comment} setComment={setComment} view={view} setView={setView} />
                )
            })}
        </div>
    );
};

export default ReviewComment;