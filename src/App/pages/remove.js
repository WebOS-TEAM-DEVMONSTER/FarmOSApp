import styles from "./css/remove.module.less";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Remove() {
  const navigate = useNavigate();
	const [phone, setPhone] = useState("");   // useState 훅을 사용해 'id' 상태를 관리 (초기값은 null)
 	const [email,setEmail] = useState("");
  const [message, setMessage] = useState('');

  const [password,setPassword] = useState("");




  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
  }
  

  const containerStyle = {
    height: '100vh',
    backgroundColor: 	'#F5F6F3', 
    margin: "0"
  };
	return(
		<div  style={containerStyle}>
			<form className={styles.login}>
				<fieldset>
          <div className={styles.header}>
            <h1>사용자 삭제하기</h1>
            <hr />
          </div>
          <div className={styles.content}>
            <label for="id">이메일 입력 후 삭제하기 버튼 눌러주세요</label>
            {/* <div className={styles.phone}>
              <input type="text" id= "id"  className={styles.id} value={phone} onChange={handlePhoneChange} placeholder='전화번호' />
              <button>인증번호 전송</button> 
            </div> */}
            <input type="id" id="id" value = {email} className={styles.password} onChange={handleEmailChange} placeholder='이메일'/>
            <input type="id" id="id" value = {password} className={styles.password} onChange={handlePasswordChange} placeholder='비밀번호'/>
            <div>
              <button className={styles.loginButton} type="submit">삭제하기</button>
            </div>
          </div>
				</fieldset>
			</form>
			
		</div>
	)
}

export default Remove