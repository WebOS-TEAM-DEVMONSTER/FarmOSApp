import styles from "./css/remove.module.less";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from 'js-cookie';  // 쿠키 사용

function Connect() {
  const navigate = useNavigate();
  const [farmName, setFarmName] = useState(""); // 스마트팜 이름 상태 관리
  const [message, setMessage] = useState(''); // 서버 응답 메시지 상태 관리

  // 스마트팜 이름 입력 핸들러
  const handleFarmNameChange = (e) => {
    setFarmName(e.target.value);
  };

  // 폼 제출 핸들러 (스마트팜 생성)
  const handleCreateFarm = async (e) => {
    e.preventDefault();

    try {
      console.log('Creating farm with name:', farmName);

      // 스마트팜 생성 API 호출
      const response = await axios.post('http://52.63.12.126/api/v1/farms/createFarm', {
        farmName: farmName,
        farmCategory: "farmCategory"
      }, {
        headers: {
          'accept': 'application/hal+json',
          'Content-Type': 'application/json',
        }
      });

      if (response.status === 200 || response.status === 201) {
        const farmId = response.data;

        // 쿠키에 farmId와 farmName 저장 (7일 동안 유지)
        Cookies.set('farmId', farmId, { expires: 189, path: '/' });
        Cookies.set('farmName', farmName, { expires: 7, path: '/' });

        console.log("Farm ID 저장됨:", Cookies.get('farmId'));
        console.log("Farm Name 저장됨:", Cookies.get('farmName'));

        setMessage('Farm created successfully');
        navigate('/main');
      } else {
        console.log('Unexpected response status:', response.status);
        setMessage('Error: Unexpected response status');
      }

    } catch (error) {
      setMessage('Error creating farm');
      console.error('Error creating farm:', error);  
    }
  };

  return (
    <div style={{ height: '100vh', backgroundColor: '#F5F6F3', margin: "0" }}>
      <form className={styles.login} onSubmit={handleCreateFarm}>
        <fieldset>
          <div className={styles.header}>
            <h1>스마트팜 추가하기</h1>
            <hr />
          </div>
          <div className={styles.content}>
            <label htmlFor="farmName">스마트팜 이름을 입력해주세요</label>
            <input 
              type="text" 
              id="farmName" 
              value={farmName} 
              className={styles.password} 
              onChange={handleFarmNameChange} 
              placeholder="스마트팜 이름" 
            />
            <div>
              <button className={styles.loginButton} type="submit">시작하기</button>
            </div>
          </div>
          {message && <p>{message}</p>}
        </fieldset>
      </form>
    </div>
  );
}

export default Connect;
