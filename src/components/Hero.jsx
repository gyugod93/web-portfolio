import React from "react";
import { styles } from "../styles";
import RobotCanvas from "./canvas/Robot";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            안녕하세요, 프론트엔드 개발자
            <br />
            <span className="text-[#915eff]">천민규 입니다!</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            React와 Next.js 위주로 웹 개발을 하고 있습니다.
            <br className="sm:block hidden" />{" "}
          </p>
        </div>
      </div>
      {/* <div className="absolute inset-0 top-[30%] sm:top-[40%] pointer-events-none"> */}
      <RobotCanvas />
      {/* </div> */}
    </section>
  );
};

export default Hero;
