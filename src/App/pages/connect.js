
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";






const Connect = () => {
    return (
      <>
        <div className="w-1024 h-600 relative">
        
        <div className="absolute inset-0 bg-[#f4f6f2] rounded-2xl" />
        
        
        <div className="absolute left-[207.47px] top-[33.89px] w-96 h-96 bg-white rounded-xl shadow p-2.5" />

        
        <div className="absolute left-[344.53px] top-[113.89px] w-80 h-px">
            <div className="w-full h-px border border-[#c4c8ba]" />
        </div>

        
        <div className="absolute left-[293.33px] top-[452.78px] w-96 h-12 bg-[#dbe7c8] rounded-full flex justify-center items-center">
            <div className="px-6 py-2.5 w-full bg-[#1d192b]/10 flex justify-center items-center">
            <span className="text-center text-[#151e0b] text-4xl font-medium">시작하기</span>
            </div>
        </div>

        
        <div className="absolute left-[428px] top-[69px] text-[#1a1c16] text-2xl">
            스마트팜 추가하기
        </div>

        
        <div className="absolute left-[293px] top-[168px] text-[#1a1c16] text-2xl">
            스마트팜 이름을 입력해주세요.
        </div>

        
        <div className="absolute left-[293.33px] top-[213.33px] w-96 h-11 flex items-start rounded-tl rounded-tr border-2 border-[#4a662c] pl-4 py-1">
            <div className="relative flex-grow">
            <span className="text-[#1a1c16] text-xl">Input</span>
            <div className="absolute left-[-4px] top-[-12px] bg-[#f9faef] px-1">
                <span className="text-[#4a662c] text-xl">스마트팜 이름</span>
            </div>
            </div>
            <div className="w-12 h-12 flex justify-center items-center">
            <div className="rounded-full p-2">
                <div className="w-6 h-6" />
            </div>
            </div>
        </div>
        </div>

        
      </>
    );
  };
  
  export default Connect;
  