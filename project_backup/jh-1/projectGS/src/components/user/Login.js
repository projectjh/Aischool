import React from 'react';
import axios from 'axios';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  // 페이지 이동 navigate
  const navigate = useNavigate();

  // 로컬 로그인 엔터키 입력시 자동 로그인 버튼 클릭
  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  // 아이디 패스워드 인풋태그 Ref
  const idRef = useRef();
  const pwRef = useRef();

  // 로그인 버튼 클릭시 실행 함수
  const handleLogin = () => {
    // 아이디 입력 확인
    if (idRef.current.value === '' || idRef.current.value === undefined) {
      alert('아이디를 입력하세요');
      idRef.current.focus();
      return false;
    }

    // 패스워드 입력 확인
    if (pwRef.current.value === '' || pwRef.current.value === undefined) {
      alert('패스워드를 입력하세요');
      pwRef.current.focus();
      return false;
    }

    // 로그인 요청시 서버로 요청
    axios
      .post('http://localhost:5000/login', {
        id: idRef.current.value,
        pw: pwRef.current.value,
      })
      .then((res) => {
        console.log('로그인 정보 일치 확인', res);

        // 일치하는 사용자가 있을경우
        if (res.data.length === 1) {
          console.log('성공 id', res.data[0].USER_ID);
          console.log('성공 name', res.data[0].USER_NAME);
          // 로그인에 성공하고 세션에 값 저장
          window.sessionStorage.setItem('USER_ID', res.data[0].USER_ID);
          window.sessionStorage.setItem('USER_NAME', res.data[0].USER_NAME);

          // 세션에 값 저장후 메인페이지로 이동
          navigate('/');
        } else {
          console.log('실패 id', res.data[0].USER_ID);
          console.log('실패 name', res.data[0].USER_NAME);
          console.log('실패 데이터', res.data[0]);
          //아이디 비밀번호 잘못 입력할 경우 input value 초기화
          idRef.current.value = '';
          pwRef.current.value = '';
          // alert('아이디 또는 비밀번호가 틀립니다.');

          // 로그인 실패시 다시 로그인 페이지로
          navigate('/login');
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <div id="Login">
      <div className="memberSection">
        <div className="sub-title"><h2>로그인</h2></div>
        
        <form>
          <div>아이디</div>
          <input
            className="id"
            type="text"
            defaultValue=""
            placeholder="아이디를 입력하세요"
            ref={idRef}
          />
          <div>비밀번호</div>
          <input
            className="pw"
            type="password"
            defaultValue=""
            placeholder="비밀번호를 입력하세요"
            ref={pwRef}
            onKeyPress={onKeyPress}
          />
          <input type="button" value="로그인" onClick={handleLogin} />
          <div>
            <a href="/forgot">비밀번호 찾기</a>
          </div>
          <div>
            <a href="/join">회원가입 </a>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
