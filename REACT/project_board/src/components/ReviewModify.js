import { useRef, useState } from "react";
import axios from "axios";
import ModifyEditor from "./ModifyEditor";

const ReviewModify = ({article, setarticle, handleupdate, handlelist}) => {
    // console.log('Modify article =>', article);   
    const title = article.review_title;
    const [desc, setDesc] = useState('');
    const [image, setImage] = useState('');

    const newArticle = article.review_txt;
    const [content, setContent] = useState(newArticle);


    const onChange = (e) => {
        setarticle({
            ...article,
            [e.target.name]: e.target.value,
        });
        // console.log('onchange article =>', article);
    };

    const txtChange = () => {
        setContent({
            ...content,
            newContent: content,
        });
    };

    console.log('modify content =>', content);

    // goReview(content);

    // 실제수정부분
    const handleUpdate = () => {
        console.log('handleUpdate =>', content);

        axios
            .post("http://localhost:8008/modify", {
                article: article,
                content: content,
            })
            .then((res) => {
                console.log("응답데이터 :",res.data)
                if(res.data==="업데이트성공"){
                    console.log("뜨냐?")
                handlelist();
                }
            })
            .catch((e) => {console.error(e);});
    };

    return(
        <div>
            <div className="Modify">
                <div className="Title"><h2>후기 게시판 수정</h2></div>
                <div className="WTitle">
                    <input type="text" name="title" defaultValue={title} onChange={onChange} />
                </div>
                <div className="Wysiwyg">
                    <ModifyEditor content={content} setContent={setContent} desc={desc} setDesc={setDesc} setImage={setImage} onChange={txtChange} />
                </div>
                <div className="btnWrap">
                    <button type="submit" onClick={handleUpdate}>등록</button>
                    {/* <button type="reset" onClick={handleReset}>취소</button> */}
                </div>
            </div>
        </div>
    );
};

export default ReviewModify;