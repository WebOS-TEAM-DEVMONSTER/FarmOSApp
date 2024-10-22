import {useState} from 'react';
import { useEffect } from 'react'; //이거 추가한거
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom';
import Connect from "./pages/connect";
import Add from "./pages/add";
import Main from "./pages/main";
import Remove from "./pages/remove";
import Cookies from 'js-cookie'; //이거 추가한거


import React from 'react';

//d이거가 추가한거
function CheckAuth() {
    const navigate = useNavigate();
  
    useEffect(() => {
      const storedFarmName = Cookies.get('farmName'); // 쿠키에서 스마트팜 이름 가져오기
      if (storedFarmName) {
        // 스마트팜이 생성된 경우 Main 페이지로 이동
        navigate('/main', { state: { farmName: storedFarmName } });
      }
    }, [navigate]);
  
    return null; // 이 컴포넌트는 화면에 아무것도 렌더링하지 않음
  }




function App() {
    

    return (
        <div>
            <Routes>
                <Route path="/add" element={<Add />} />
				<Route path="/" element={<Connect />} />
				<Route path="/main" element={<Main />} />
				<Route path="/remove" element={<Remove />} />
                
            </Routes>
        </div>
    );
}

function Root() {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
}

export default Root;
