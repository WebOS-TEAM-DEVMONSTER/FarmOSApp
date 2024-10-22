import styles from "./css/add.module.less";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Cookies from 'js-cookie';

function Add() {
  const navigate = useNavigate();
  const [email, setEmail] = useState(""); // 이메일 상태 관리
  const [password, setPassword] = useState(""); // 비밀번호 상태 관리
  const [message, setMessage] = useState(''); // 에러 메시지 상태 관리

  // 이메일 입력 핸들러
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // 비밀번호 입력 핸들러
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // 폼 제출 핸들러 (사용자 추가)
  const handleAddUser = async (e) => {
    e.preventDefault();

    try {
      console.log('Adding user...');

      const data = {
        email: email,
        password: password,
      };

      // API 호출
      const response = await axios.post('http://52.63.12.126/api/v1/auth/login', data, {
        headers: {
          'Content-Type': 'application/json',
          'accept': 'application/hal+json',
        },
      });

      // API 호출 성공 시 처리
      if (response.status === 200 ) {
        const { accessToken } = response.data; // 서버로부터 accessToken 받기
        Cookies.set('accessToken', accessToken, { expires: 180, path:'/' }); // 쿠키에 accessToken 저장
        //console.log(Cookies.get('accessToken'));

        setMessage('User added successfully');

        // 사용자 추가 성공 후 이메일을 state로 전달하여 Main 페이지로 이동
        navigate('/main', { state: { owner: email } }); // owner로 이메일 전달
      } else {
        setMessage('Unexpected response status');
      }
    } catch (error) {
      // 오류 처리
      if (error.response && error.response.status === 403) {
        setMessage('잘못된 이메일이나 비밀번호입니다. 다시 입력해주세요.');
      } else {
        setMessage('사용자 추가 요청 중 오류가 발생했습니다.');
      }
    }
  };

  return (
    <div style={{ height: '100vh', backgroundColor: '#F5F6F3', margin: "0" }}>
      <form className={styles.login} onSubmit={handleAddUser}>
        <fieldset>
          <div className={styles.header}>
            <h1>사용자 추가하기</h1>
            <hr />
          </div>
          <div className={styles.content}>
            <label htmlFor="email">이메일 입력 후 추가하기 버튼 눌러주세요</label>
            <input 
              type="email" 
              id="email" 
              value={email} 
              className={styles.password} 
              onChange={handleEmailChange} 
              placeholder="이메일" 
            />
            <input 
              type="password" 
              id="password" 
              value={password} 
              className={styles.password} 
              onChange={handlePasswordChange} 
              placeholder="비밀번호" 
            />
            <div>
              <button className={styles.loginButton} type="submit">추가하기</button>
            </div>
          </div>
          {message && <p>{message}</p>} {/* 에러 메시지 표시 */}
        </fieldset>
      </form>
    </div>
  );
}

export default Add;
