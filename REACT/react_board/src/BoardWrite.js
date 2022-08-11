import { useRef } from "react";
import axios from "../node_modules/axios/index";

const BoardWrite = ({handlelist}) => {
    const titleRef = useRef();
    const writerRef = useRef();
    const contentRef = useRef();

    const handleInsert = () => {
        console.log('handleInsert =>', titleRef.current.value);
        if (titleRef.current.value === "" || titleRef.current.value === undefined) {
            alert('제목을 입력해주세요 😑');
            titleRef.current.focus();
            return false;
        }

        if (writerRef.current.value === "" || writerRef.current.value === undefined) {
            alert('글쓴이를 입력해주세요 🤨');
            writerRef.current.focus();
            return false;
        }

        if (contentRef.current.value === "" || contentRef.current.value === undefined) {
            alert('내용을 입력해주세요 😠');
            contentRef.current.focus();
            return false;
        }

        axios
            .post("http://localhost:8008/insert", {
                title: titleRef.current.value,
                writer: writerRef.current.value,
                content: contentRef.current.value,
            })
            .then((res) => {
                console.log('handleInsert =>', res);
                handlelist();
                titleRef.current.value = "";
                writerRef.current.value = "";
                contentRef.current.value = "";
            })
            .catch((e) => {console.error(e)});
    }
    return(
        <div>
            <h2 className="title">글쓰기</h2>
            <form>
                <table border="1" width="700px" align="center">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <th align="left" width="100px">제목</th>
                            <td align="left" width="550px">
                                <input type="text" name="title" size="68" ref={titleRef} placeholder="제목을 입력하세요" />
                            </td>
                        </tr>
                        <tr>
                            <th align="left" width="100px">글쓴이</th>
                            <td align="left" width="550px">
                                <input type="text" name="writer" size="68" ref={writerRef} placeholder="글쓴이를 입력하세요" />
                            </td>
                        </tr>
                        <tr>
                            <th align="left" width="100px">내용</th>
                            <td align="left" width="550px">
                                <textarea row="5" cols="70" name="content" ref={contentRef} placeholder="내용을 입력하세요"></textarea>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2" align="center">
                                <input type="button" value="글쓰기" onClick={handleInsert} /> &nbsp;
                                <input type="reset" value="취소" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
};

export default BoardWrite;