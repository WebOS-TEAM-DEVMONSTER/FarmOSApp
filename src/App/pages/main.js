import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';  // 상태를 받아오기 위해 useLocation, useNavigate 사용
import axios from 'axios';
import Cookies from 'js-cookie';  // 쿠키 사용
import mainCss from "./css/main.module.less";

function Main() {
  //const location = useLocation();  // 전달된 state를 받기 위한 hook
  const navigate = useNavigate();  // 페이지 이동을 위한 hook

  const [owner, setOwner] = useState('undefined'); // owner 상태 관리

  // 쿠키에서 farmId와 accessToken 가져오기
  const farmId = Cookies.get('farmId');
  const accessToken = Cookies.get('accessToken');
  const farmName = Cookies.get('farmName');


  useEffect(() => {
    // API 호출 
    const fetchOwnerData = async () => {
      console.log(accessToken);
      try {
        if (!farmId || !accessToken) {
          console.error('No farmId or accessToken found in cookies');
          return;
        }
  
        console.log(farmId);
  
  
        // /api/v1/farms/{farmId}/user API 호출
        const response = await axios.patch(`http://52.63.12.126/api/v1/farms/${farmId}/user`, {},{
          headers: {
            Authorization: `Bearer ${accessToken}`,  // AccessToken을 헤더에 추가
            'accept': 'application/hal+json',
          },
        });
  
        console.log(response.data);
        setOwner(response.data.username || 'undefined');  // owner 정보 업데이트

  
      } catch (error) {
        console.error('Error fetching owner data:', error);
      }
    };
    fetchOwnerData();
  }, [farmId, accessToken]);  


  // const fetchOwnerData = async () => {
  //   console.log(accessToken);
  //   try {
  //     if (!farmId || !accessToken) {
  //       console.error('No farmId or accessToken found in cookies');
  //       return;
  //     }

  //     console.log(farmId);


  //     // /api/v1/farms/{farmId}/user API 호출
  //     const response = await axios.patch(`http://52.63.12.126/api/v1/farms/${farmId}/user`, {},{
  //       headers: {
  //         Authorization: `Bearer ${accessToken}`,  // AccessToken을 헤더에 추가
  //         'accept': 'application/hal+json',
  //       },
  //     });

  //     console.log(response.data);
  //     return accessToken;

  //   } catch (error) {
  //     console.error('Error fetching owner data:', error);
  //   }
  // };

  // const getOwnerData = async (token) => {
    
  //   try {
  //     if (!farmId || !token) {
  //       console.error('No farmId or accessToken found in cookies');
  //       return;
  //     }

  //     console.log("act: "+token);
  //     console.log("frm: "+farmId);


  //     // /api/v1/farms/{farmId}/user API 호출
  //     const response = await axios.get(`http://52.63.12.126/api/v1/farms/${farmId}/user`, {},{
  //       headers: {
  //         Authorization: `Bearer ${token}`,  // AccessToken을 헤더에 추가
  //         'accept': 'application/hal+json',
  //       },
  //     });

  //     console.log(response.data);

  //     setOwner(response.data.owner || 'undefined');  // owner 정보 업데이트

  //   } catch (error) {
  //     console.error('Error fetching owner data:', error);
  //   }
  // };

  // const fetchOwner = async () => {
  //   const token = await fetchOwnerData();
  //   getOwnerData(token);
  // }
    

  // useEffect(() => {
  //   // API 호출 
  //   fetchOwner();
    
  //}, [farmId, accessToken]);  // farmId와 accessToken이 바뀔 때마다 호출

  //const farmName = location.state?.farmName || '스마트팜 이름을 불러오는 중...';  // state에서 farmName을 가져옴

  // '사용자 추가' 버튼 클릭 핸들러
  const handleAddUser = () => {
    navigate('/add');
  };

  // '삭제' 버튼 클릭 핸들러
  const handleDelete = () => {
    navigate('/remove');
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
      <div className={mainCss.container}>

        <div className={mainCss.left}>
          <h1>owner<br />{owner}</h1> {/* owner 정보 출력 */} 
        </div>

        <div className={mainCss.center}>
          {/* 전달된 스마트팜 이름을 출력 */}
          <h1>{farmName ? `${farmName} 스마트팜` : '스마트팜 이름을 불러오는 중...'}</h1>
          <div className={mainCss.footer}>
            <button style={{ backgroundColor: "#4A662C" }} onClick={handleAddUser}>사용자추가</button>
            <button style={{ backgroundColor: "#4A662C" }} onClick={handleDelete}>삭제</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Main;
