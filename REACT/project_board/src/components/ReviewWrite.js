import { useRef, useState } from "react";
import axios from "axios";
import WriteEditor from "./WriteEditor";

const ReviewWrite = ({handlelist}) => {
    const [desc, setDesc] = useState('');
    const [image, setImage] = useState('');

    const titleRef = useRef();
    // const contentRef = useRef();

    const handleWrite = (e) => {
        e.preventDefault();
        // console.log('디이에스시', desc);

        axios
            .post("http://localhost:8008/write", {
                title: titleRef.current.value,
                // content: contentRef.current.value, 
                content: desc,
                user: window.sessionStorage.getItem('USER_IDX'),
            })
            .then((res) => {
                handlelist();
                // titleRef.current.value = "";
                // content = "";
            })
            .catch((e) => {console.error(e);});
    };

    const handleReset = (e) => {
        e.preventDefault();
        titleRef.current.value = "";
        setDesc('');
    }

    return(
        <div>
            <div className="Write">
                <div className="Title"><h2>후기 작성</h2></div>
                <div className="WTitle">
                    <input type="text" name="title" ref={titleRef} placeholder="제목을 입력해주세요" />
                </div>
                <div className="Wysiwyg">
                    <WriteEditor desc={desc} setDesc={setDesc} setImage={setImage} />
                </div>
                <div className="fileWrap">
                    {/* 첨부파일
                    <label for="input-file">업로드</label>
                    <input type="file" name="upFile" id="input-file" /> */}
                </div>
                <div className="btnWrap">
                    <button type="submit" onClick={handleWrite}>등록</button>
                    <button type="reset" onClick={handleReset}>취소</button>
                </div>
            </div>
        </div>
    );
};

export default ReviewWrite;