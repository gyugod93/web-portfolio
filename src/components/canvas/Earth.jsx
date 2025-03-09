import React from "react";

// 3D 지구본 대신 사용할 정적 컴포넌트
const EarthCanvas = () => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-tertiary bg-opacity-10 rounded-lg">
      <div className="relative w-4/5 h-4/5 rounded-full bg-blue-500 flex items-center justify-center overflow-hidden">
        {/* 간단한 지구 스타일링 */}
        <div className="absolute w-full h-full opacity-40">
          <div className="absolute w-1/2 h-1/3 bg-green-600 top-1/4 left-1/4 rounded-full transform rotate-45"></div>
          <div className="absolute w-1/3 h-1/4 bg-green-600 top-2/4 left-1/3 rounded-full"></div>
          <div className="absolute w-1/4 h-1/5 bg-green-600 top-1/3 left-1/2 rounded-full"></div>
        </div>
        {/* 구름 효과 */}
        <div className="absolute w-full h-full bg-white opacity-30">
          <div className="absolute w-1/4 h-1/6 bg-white top-1/5 left-1/5 rounded-full opacity-40"></div>
          <div className="absolute w-1/5 h-1/8 bg-white top-1/2 left-1/3 rounded-full opacity-40"></div>
        </div>
      </div>
    </div>
  );
};

export default EarthCanvas;
