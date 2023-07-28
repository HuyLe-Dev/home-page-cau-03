import React from "react";
import poster from "../../../img/poster2.png";
import * as ROUTES from "../../../constants/routes/routes";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div
        alt="header"
        className="bg-header bg-center h-full bg-no-repeat rounded-tl-[80px] rounded-br-[80px]"
      >
        <div className="max-w-7xl mx-auto px-4 pt-10">
          <div className="flex flex-wrap items-center -mx-4 mb-10 2xl:mb:14">
            <div className="w-full lg:w-1/2 sm:w-full px-4 mb-16 lg:mb-0">
              <h2 className="w-full mt-12 mb-12 text-center text-[35px] sm:text-center sm:text-[35px] lg:text-left lg:text-[45px] text-[#ad9fcd] font-bold font-heading leading-tight">
                리딩타임 <span className="text-white">만의</span>
              </h2>
              <p className="w-full mb-12 lg:mb-16 2xl:mb-24  text-center text-[45px] sm:text-center sm:text-[45px] lg:text-left lg:text-[65px] text-[#f4a5c7]">
                1:1맞춤<span className="text-white">독서 수업</span>
              </p>
              <p className="w-full  inline-block text-center sm:text-center lg:text-left text-lg text-white font-bold transition duration-200">
                A~Z까지 레벨별 도서를 활용하여 1:1맞춤 독서 수업 진행
              </p>
              <p className="w-full inline-block text-center sm:text-center lg:text-left text-lg text-white font-bold transition duration-200 mb-16">
                리딩타임만의 4단계 학습 Flow와 레벨별 세분화된 커리큘럼 적용
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
