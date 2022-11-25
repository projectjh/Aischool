import { Outlet, Link, useNavigate } from 'react-router-dom';
import * as server_bridge from '../../controller/server_bridge';
import logo from "../../images/logo-w.png"
import "../../css/user/common.scss"
import { useRef } from 'react';

const Header = () => {
  // const menuRef = useRef('');
  // console.log(menuRef);
  // let menu = document.querySelectorAll('.menu ul li');
  // console.log(menu)


  const onMouse = (e) => {
    e.target.nextElementSibling.classList.add('on');
  };
  
  const leaveMouse = (e) => {
    // e.target.nextElementSibling.classList.remove('on');
    e.target.classList.remove('on');
    // e.target.parentElement.classList.remove('on');
  };

  return (
    // <div>
    //   여기가 헤더
    //   <br />
    //   현재 서버는
    //   {server_bridge.getThisUrl() === server_bridge.py_url
    //     ? 'Flask'
    //     : 'Node.js'}
    //   입니다!
    //   <br />
    // </div>

    <div id="Header">
      <div className="logo">
        <a href="/" title="메인으로"><img src={logo} alt="안전꽹과리 로고" /></a>
      </div>
      <div className="menu">
        <ul>
          <li><a onMouseOver={onMouse}>불법주정차 신고</a>
            <ul className="submenu sub1" onMouseOut={leaveMouse}>
              <li><a href="/report">불법주정차 신고</a></li>
              <li><a href="/quickreport">공유킥보드 신고</a></li>
            </ul>
          </li>
          <li><a onMouseOver={onMouse}>불법주정차 안내</a>
            <ul className="submenu sub2" onMouseOut={leaveMouse}>
              <li><a href="/illegalareaguide">주정차 금지 구역</a></li>
              <li><a href="/quickguide">공유킥보드 주차 금지 구역</a></li>
            </ul>
          </li>
          <li><a href="/point">포인트 사용</a></li>
          <li><a href="/notice">공지사항</a></li>
        </ul>
      </div>
      <div className="login">
        <ul>
          <li><a href="/login">로그인</a></li>
          <li><a href="/join">회원가입</a></li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
