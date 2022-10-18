import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginForm = () => {
    const idRef = useRef();
    const pwRef = useRef();

    const navigate = useNavigate(); // url이동을 위해 navigate생성

    const handleLogin = () => {
        if (idRef.current.value === "" || idRef.current.value === undefined) {
            alert('⚠️ 아이디를 입력해주세요.');
            idRef.current.focus();
            return false;
        }
        if (pwRef.current.value === "" || pwRef.current.value === undefined) {
            alert('⚠️ 비밀번호를 입력해주세요.');
            pwRef.current.focus();
            return false;
        }

        // 콘솔을 사용해 로그인 화면에서 로그인 중인지 확인
        console.log('LoginForm: window.sessionStorage(login_id) =>', window.sessionStorage.getItem('id'));  
        // 브라우저 자동 로그인을 원하면 local storage => 'window.localStorage'로 사용
        // 해당 탭만 유지를 원하면 session storage
        // id가 null값인지로 확인하여 로그인 여부 확인

        axios
            .post("http://localhost:8008/login", {
                id: idRef.current.value,
                pw: pwRef.current.value,
            })
            .then((res) => {
                console.log('handleLogin =>', res);
                if (res.data[0].cnt === 1) {
                    window.sessionStorage.setItem('id', idRef.current.value);
                    navigate('/main');
                }
                else {
                    navigate('/');
                }
            })
            .catch((e) => {console.error(e);});
    };

    const handleMemberForm = () => {
        navigate('/member');
    };

    return (
        <div>
            <form>
                <table border="1" width="400px" align="center">
                    <tbody>
                        <tr>
                            <td width="120px">아이디</td>
                            <td align="left" width="280px">
                                <input type="text" name="id" size="20" ref={idRef} placeholder="아이디를 입력하세요" />
                            </td>
                        </tr>
                        <tr>
                            <td width="120px">비밀번호</td>
                            <td align="left" width="280px">
                                <input type="password" name="pw" size="20" ref={pwRef} placeholder="비밀번호를 입력하세요" />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2" align="center" className="login-btn">
                                <input type="button" value="로그인" onClick={handleLogin} />
                                <input type="button" value="회원가입" onClick={handleMemberForm} />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
};

export default LoginForm;