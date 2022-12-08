import { useState, useRef, useReducer } from 'react';
import userIcon from '../../../images/profile.png';

const handleSubmit = (e) => {
  e.preventDefault();
  alert('adsfasdf');
  const data = new FormData(e.currentTarget);
  //   const joinData = {
  //     email: data.get('email'),
  //     name: data.get('name'),
  //     password: data.get('password'),
  //     rePassword: data.get('rePassword'),
  //   };
  console.log();
};

function reducer(state, action) {
  return { ...state, [action.name]: action.value };
}
const UserInfoContainer = ({ data }) => {
  //사용자 정보 핸들링용 공용 컴포넌트
  return (
    <div className="userWrap">
      <div className="userImg">
        <img src={userIcon} alt="Profile" />
      </div>
      <div className="user">
        <table className="userTable" border="0" cellPadding="0" cellSpacing="0">
            <colgroup>
                <col width="120px;" />
                <col />
            </colgroup>
            <tbody>
                <tr>
                    <th>이름</th>
                    <td><input type="text" defaultValue={data.USER_NAME} /></td>
                </tr>
                <tr>
                    <th>아이디</th>
                    <td><input type="text" defaultValue={data.USER_ID} /></td>
                </tr>
                <tr>
                    <th>이메일</th>
                    <td><input type="text" defaultValue={data.USER_MAIL} /></td>
                </tr>
                <tr>
                    <th>연락처</th>
                    <td><input type="text" defaultValue={data.USER_TEL} /></td>
                </tr>
                <tr>
                    <th>관리자 여부</th>
                    <td>
                        <div className="radioWrap">
                            {data.ADMIN_OX === 'O' ? (
                                <>
                                    <input type="radio" id="admin_o" name="admin" value="O" defaultChecked />
                                    <label htmlFor="admin_o">관리자</label>
                                    <input type="radio" id="admin_x" name="admin" value="X" />
                                    <label htmlFor="admin_x">일반회원</label>
                                </>
                            ):(
                                <>
                                    <input type="radio" id="admin_o" name="admin" value="O" />
                                    <label htmlFor="admin_o">관리자</label>
                                    <input type="radio" id="admin_x" name="admin" value="X" defaultChecked />
                                    <label htmlFor="admin_x">일반회원</label>
                                </>
                            )}
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>

        <div className="adminBtnWrap">
            <button type="submit" className="adminBtn adminBtn2 adminBtnNavy">수정하기</button>
        </div>
      </div>

    </div>
  );
};
export default UserInfoContainer;
