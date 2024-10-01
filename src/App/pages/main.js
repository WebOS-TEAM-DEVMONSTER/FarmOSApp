import {useState} from 'react';
import mainCss from "./css/main.module.less";

function Main() {
  return(
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
       <div className={mainCss.container}>

        <div className={mainCss.left}>
          <h1>owner<br />김동현</h1>
        </div>

        <div className={mainCss.center}>
          <h1>고구마 스마트팜</h1>
          <div className={mainCss.footer}>
            <button style={{ backgroundColor:"#4A662C"}}>사용자추가</button>
            <button>삭제</button>
          </div>
        </div>
      </div>
    </div>
   
  )
}

export default Main;