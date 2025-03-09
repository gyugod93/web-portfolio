import React, { useState, useEffect } from "react";
import { technologies } from "../constants";

// 3D 모델링을 완전히 제거하고 2D 대체 컴포넌트 사용
const Tech = () => {
  return (
    <div className="flex flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div
          className="w-28 h-28 flex flex-col items-center justify-center"
          key={technology.name}
        >
          {/* 3D 볼 대신 일반 이미지 사용 */}
          <div className="w-20 h-20 rounded-full bg-tertiary flex items-center justify-center p-3 mb-2">
            <img
              src={technology.icon}
              alt={technology.name}
              className="w-full h-full object-contain"
            />
          </div>
          <p className="text-white text-sm text-center">{technology.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Tech;
