import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";
import { BsPlus } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import Card from "@/components/TamplateCard/Card";
import { UseTemplateContext } from "@/context/context";

const Home = () => {
  const [open, setOpen] = useState(false);
  const { tags } = UseTemplateContext();

  console.log(tags);

  // ===> modal style
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 24,
  };

  return (
    <React.Fragment>
      <div className="w-full min-h-screen flex flex-col gap-10 justify-center items-center">
        {/* ===> search inpurt */}
        <div className="w-[220px] grid grid-cols-[1fr,.3fr] h-[50px] justify-center items-center border-2 bg-black-main border-black-off rounded-[2px]">
          <input
            className="h-full w-full pl-3 focus:outline-none bg-black-main text-white-off rounded-[10px]"
            type="text"
            placeholder="Search tag"
          />
          <div className="w-full flex justify-center items-center">
            <AiOutlineSearch className="text-white-off text-[26px]" />
          </div>
        </div>
        {/* ===> all tages used */}
        <div className="flex justify-center items-center gap-4">
          <button className="capitalize text-[16px] font-normal text-white-off border-[2px] border-dashed border-black-off rounded-[6px] px-4 py-[3px]">
            lemon
          </button>
        </div>
        {/* =====> template card */}
        <div className="w-full grid grid-cols-2">
          {/* 1 card */}
          <Card setState={setOpen} />
          {/* 2 card */}
          <div className="w-full flex justify-center items-center">
            <Card setState={setOpen} />
          </div>
        </div>
      </div>

      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={{ ...style, width: "680px", background: "#1f1f1f" }}>
          <div className="w-full flex flex-col">
            <div className="flex min-h-[480px] justify-start items-start gap-3 p-8">
              {/* new tag button */}
              <button className="flex justify-center items-center gap-1 border-[1px] border-dashed border-black-off px-2 py-[2px] rounded-[4px]">
                <BsPlus className="text-white-main/70 text-[22px]" />
                <p className="text-white-main/70 font-normal text-[14px]">
                  New Tag
                </p>
              </button>
              {templateTages.map((tage, index) => {
                return (
                  <div
                    key={index}
                    className="text-white-main/70 flex justify-center items-center gap-1 border-[1px] text-[14px] rounded-[4px] border-black-off p-[2px] px-2"
                  >
                    <input
                      className="bg-black-cool w-[60px] focus:outline-none"
                      type="text"
                      value={tage.tag}
                    />
                    <RxCross2 className="text-white-main/70 cursor-pointer text-[18px]" />
                  </div>
                );
              })}
            </div>
            {/* ===> buttons */}
            <div className="w-full h-[70px] flex gap-4 justify-end items-center px-8 border-t-[2px] border-black-off">
              <button className="text-white-main/70 border-[1px] border-black-off rounded-[4px] px-4 py-2">
                Cancel
              </button>
              <button className="text-white-main/70 bg-blue-main rounded-[4px] px-5 py-2">
                Ok
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </React.Fragment>
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

export default Home;
