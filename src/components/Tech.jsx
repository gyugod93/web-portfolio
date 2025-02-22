import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { useState } from "react";
import { useEffect } from "react";
import { useCallback } from "react";

const Tech = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleScroll = useCallback(() => {
    // 스크롤 바닥에 도달했을 때
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      // 6개씩 추가
      setVisibleCount((prevCount) =>
        Math.min(prevCount + 6, technologies.length)
      );
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className="flex flex-wrap justify-center gap-10">
      {technologies.slice(0, visibleCount).map((tech) => (
        <div key={tech.name}>{/* <BallCanvas icon={tech.icon} /> */}</div>
      ))}
    </div>
  );
};

export default Tech;
