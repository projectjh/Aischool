import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../node_modules/axios/index';
import * as List from './ReviewList';

const ReviewComment = ({view, setView}) => {
    const [comment, setComment] = useState({
        commentList: [],
    });
    const [textCount,setTextCount] = useState(0)
    const commentRef = useRef();
    const params = useParams();
    const sessionIdx =  window.sessionStorage.getItem('USER_IDX');

    
    // //댓글 등록 reload 없이 가능
    // useEffect(() => {
    //     commentView();
    //     // textareaLimit();
    // },[comment]);

    useEffect(() => {
        commentView();
        // textTyping();
    }, [comment]);

    // 댓글 작성
    const commentWrite = () => {
        // console.log('보낼 내용 확인 => ', commentRef.current.value, '/ user_idx =>', window.sessionStorage.getItem('USER_IDX'), '/ 게시물 번호 =>', params);

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

    // const commentTime = List.reviewTime(comment.COMMENT_DATE).toString().split("T")[0];

    // 댓글 삭제
    const commentDelete = (e) => {
        console.log('삭제할 댓글의 인덱스 가져오기', e.target.id);

        if (window.confirm('정말 삭제하시겠습니까?')){
            axios
                .post("http://localhost:8008/review/comment/delete", {
                    params,
                    comment_idx: e.target.id,
                    user: sessionIdx,
                })
                .then(() => {
                    axios
                        .post("http://localhost:8008/review/comment/cnt", {params})
                        .then((res)=>{
                            // window.location.reload();
                            setView({
                                ...view,
                                comment_cnt: view.comment_cnt - 1
                            })
                        })
                        .catch((e) => {console.error(e)});
                })
                .catch((e) => {console.error(e);});
        }
    }

    // // 댓글 수 카운트
    // const commentCount = () => {
    //     axios
    //         .post("http://localhost:8008/reivew/comment/cnt", {params})
    //         .then()
    //         .catch((e) => {console.error(e)});
    // }


    
    // console.log('게시판 데이터 가져올 수 있는지 확인', view.user_idx);
    // const commentUpdate = () => {
        
    // }

    
    // var textArea = 0;
    // const textareaLimit = () => {
    //     if (commentRef.current.value !== null || commentRef.length != 0) {
            
    //     } 
    // }


    // console.log(commentRef.current.value.length);
    
    // var textCount = commentRef.current.value.length;
    // if (commentRef.current.value !== null || commentRef.current.value.length != 0) {
        //     textCount = commentRef.current.value.length;
        // } 

    

    // 댓글 글자수 확인
    // var textCount = commentRef.current.value.length; 

    // if (commentRef.current.value !== null || commentRef.current.value.length != 0) {
    //     textCount = commentRef.current.value.length;
    // } else {
    //     textCount = 0;
    // }


    // 댓글 글자 수 표현
    const textTyping = () => {
        console.log(commentRef.current.value.length); 

        if (commentRef.current.value === null || commentRef.current.value.length == 0) {
            setTextCount(0);
        } else {
            setTextCount(commentRef.current.value.length);
        }
    } 


    // 댓글 수정
    // var commentIdx = 0;
    // var commentTxt = '';
    // const [modify, setModify] = useState(false);
    // const commentModify= (e) => {
    //     console.log('수정하려면 해당 댓글 인덱스와 아이디가 필요할거야,', e.target.className);
    //     // console.log('수정하려면 해당 댓글의 내용도 필요한데,', commentRef.current.value);
    //     // currentComment = e.target.name.COMMENT_TXT;

    //     // axios
    //     //     .post("http://localhost:8008/review/comment", {params})
    //     //     .then((res) => {
    //     //         console.log('수정인덱스를 다시 보내면 ?', res);
    //     //     })
    //     //     .catch((e) => {console.error(e);});

    //     setModify(!modify);

    //     // var commentIdx = e.target.className;
        
    //     // axios
    //     //     .post("http://localhost:8008/review/comment/modify", {commentIdx})
    //     //     .then((res) => {
    //     //         console.log('수정인덱스보내고 정보를 가져와', res);
    //     //     })
    //     //     .catch((e) => {console.error(e);});
    // };

    // const boxRef = useRef();
    // const modifyRef = useRef();
    // var CModify = ({ modifyRef }) => <p ref={modifyRef}>{comment.COMMENT_TXT}</p>;

    // const modifyCk = (e) => {
    //     console.log('게시물 idx랑 사용자idx 체크를 해야하는데', e.target.className);
    //     // if (e.target.className == comment.COMMENT_IDX ) {
    //     //     setModify(!modify);
    //     // } else {
    //     //     setModify(modify);
    //     // }
    //     // setModify(!modify);
    //     // console.log(boxRef.current.className)
    //     // // document.getElementBy
    //     if (e.target.className == boxRef.current.className ) {
    //         setModify(!modify);
    //         CModify = ({ modifyRef }) => <li ref={modifyRef}><input type="text" /></li>;
    //     } else {
    //         setModify(modify);
    //         CModify = ({ modifyRef }) => <li ref={modifyRef}>{comment.COMMENT_TXT}</li>;
    //     }
    // }
 
    const commentUpdate = (e) => {
        console.log('수정하려면 해당 댓글 인덱스와 아이디가 필요할거야,', e.target.className);
        var commentIdx = e.target.className;
        
        axios
            .post("http://localhost:8008/review/comment/modify", {commentIdx})
            .then((res) => {
                console.log('수정인덱스보내고 정보를 가져와', res);


                axios
                    .post("http://localhost:8008/review/comment/update",{

                    })
                    .then((res) => {

                    })
                    .catch((e) => {console.error(e);});
                
            })
            .catch((e) => {console.error(e);});
        
    };
    
    return (
        <div>
            <h3>댓글</h3>

            <div className="CommentWrite"> 
                <div className="textLimit">
                    {/* <span dangerouslySetInnerHTML={{ __html: textCount }}></span> */}
                    <span>{textCount}</span>
                    <span> / 300자</span> 
                </div>
                <textarea ref={commentRef} onKeyUp={textTyping} maxLength="300" placeholder="댓글을 입력해주세요."></textarea>
                <div className="btn-wrap">
                    <button type="submit" onClick={commentWrite}>등록</button>
                    <button type="reset" onClick={commentReset}>취소</button>
                </div>
            </div>
            {comment.commentList.map(function(comment) { 
                // console.log(comment);
                return (
                    // <div className="CommentBox">
                    <div className={sessionIdx == comment.USER_IDX ? "CommentBox myCommentBox" : "CommentBox"}>
                        <ul className={comment.COMMENT_IDX}>
                            <li className="comment-nick">{comment.USER_NICK} 
                                {comment.USER_IDX === view.user_idx ? 
                                    <span className="ft_writer">작성자</span>
                                : null }
                            </li>
                            <li>{comment.COMMENT_TXT} </li>
                            {/* <li>
                                {modify? <textarea>{comment.COMMENT_TXT}</textarea> : comment.COMMENT_TXT }
                            </li> */}
                            {/* <li><CModify setRef={modifyRef} /></li> */}
                            <li className="comment-date">{List.reviewTime(comment.COMMENT_DATE).toString().split("T")[0]}</li>
                        </ul>
                        
                        {sessionIdx == comment.USER_IDX ? 
                            <div className="C-btn-wrap">
                                {/* <button onClick={() => setModify(!modify)} className={comment.COMMENT_IDX}>수정</button> */}
                                <button onClick={commentDelete} id={comment.COMMENT_IDX}>삭제</button>

                                {/*modify ? 
                                    <div className="modifyOn">
                                        <button onClick={commentUpdate}>등록</button>
                                        <button onClick={() => setModify(!modify)}>취소</button>
                                    </div>
                                :
                                    <div className="modifyOff">
                                        <button onClick={modifyCk} className={comment.COMMENT_IDX}>수정</button>
                                        <button onClick={commentDelete} id={comment.COMMENT_IDX}>삭제</button>
                                    </div>
                                */}
                            </div>
                        : null}
                    </div>
                )
            })}
        </div>
    );
};

export default ReviewComment;