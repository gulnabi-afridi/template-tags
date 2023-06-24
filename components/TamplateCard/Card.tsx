import React, { useState } from "react";
import { FiSettings } from "react-icons/fi";
import Image from "next/image";

interface Props {
  setState: any;
}

const Card = ({ setState }: Props) => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full max-w-[380px] flex flex-col gap-3">
        <div className="w-full flex flex-col border-[1px] border-black-off">
          {/* ==> image */}
          <div className="w-full bg-black-cool p-[6px]">
            <div className="w-full h-[240px] border-[2px] border-white-main/40 relative">
              {/* <Image
                src="/assets/imageMockup.png"
                alt=""
                fill
                className="object-contain"
                 /> */}
            </div>
          </div>
          {/* template number + setting icon */}
          <div className="flex h-[60px] px-5 justify-between items-center w-full">
            <p className="capitalize text-white-main/70 font-normal ">
              template A
            </p>
            <div className="flex justify-center items-center gap-3">
              <FiSettings
                onClick={() => setState(true)}
                className="text-white-main/70 cursor-pointer text-[22px] mr-2"
              />
              <div className="w-[50px] h-[37px] border-[2px] rounded-[4px] border-black-off"></div>
              <div className="w-[50px] h-[37px] border-[2px] rounded-[4px] border-black-off"></div>
            </div>
          </div>
        </div>
        {/* ===> template tags */}
        <div className="flex w-full justify-start items-center gap-2">
          {templateTages.map((tag, index) => {
            return (
              <p
                className={` ${
                  tag.tag === "featured"
                    ? "text-white-main border-[1px] border-white"
                    : "text-white-main/70 border-[1px] border-black-off"
                } capitalize  text-[11px] rounded-[4px] p-[2px] px-2`}
              >
                {tag.tag}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const templateTages = [
  {
    tag: "featured",
  },
  {
    tag: "lemon",
  },
  {
    tag: "apple",
  },
];

export default Card;
