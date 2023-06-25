import React, { useEffect, useState } from "react";
import { FiSettings } from "react-icons/fi";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";
import { BsPlus } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { UseTemplateContext } from "@/context/context";

const Card = ({ card, cardNo, setSelectedCardId, key }) => {
  const [open, setOpen] = useState(false);
  const { cardData, setCardData } = UseTemplateContext();
  const [tags, setTags] = useState([...cardData[cardNo].tags]);

  const handleSettingFunction = () => {
    setOpen((prevState) => {
      return !prevState;
    });
    setSelectedCardId(cardData.id);
  };

  useEffect(() => {
    setCardData((previousData) => {
      const updatedData = [...previousData];
      updatedData[cardNo].tags = tags;
      return updatedData;
    });
  }, [tags]);

  const handleTagChange = (index, tagValue) => {
    setCardData((prevState) => {
      const prevData = [...prevState];
      prevData[cardNo].tags[index] = tagValue;
      return prevData;
    });
  };

  const handleRemoveTag = (index) => {
    setTags((prevState) => {
      const updatedState = [...prevState];
      updatedState.splice(index, 1);
      return updatedState;
    });
  };

  const handleAddNewTag = () => {
    setTags((prevState) => [...prevState, "Add new tag"]);
  };

  // ===> modal style
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 24,
  };

  return (
    <React.Fragment>
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
                {cardNo + 1}
              </p>
              <div className="flex justify-center items-center gap-3">
                <FiSettings
                  onClick={handleSettingFunction}
                  className="text-white-main/70 cursor-pointer text-[22px] mr-2"
                />
                <div className="w-[50px] h-[37px] border-[2px] rounded-[4px] border-black-off"></div>
                <div className="w-[50px] h-[37px] border-[2px] rounded-[4px] border-black-off"></div>
              </div>
            </div>
          </div>
          {/* ===> template tags */}
          <div className="flex w-full justify-start items-center gap-2">
            {card.tags.map((tag, index) => {
              return (
                <p
                  key={index}
                  className={` ${
                    tag.tag === "featured"
                      ? "text-white-main border-[1px] border-white"
                      : "text-white-main/70 border-[1px] border-black-off"
                  } capitalize  text-[11px] rounded-[4px] p-[2px] px-2`}
                >
                  {tag}
                </p>
              );
            })}
          </div>
        </div>
      </div>

      {/* Modal  */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={{ ...style, width: "680px", background: "#1f1f1f" }}>
          <div className="w-full flex flex-col">
            <div className="flex min-h-[480px] justify-start items-start gap-3 p-8">
              {/* new tag button */}
              <button
                onClick={handleAddNewTag}
                className="flex justify-center items-center gap-1 border-[1px] border-dashed border-black-off px-2 py-[2px] rounded-[4px]"
              >
                <BsPlus className="text-white-main/70 text-[22px]" />
                <p className="text-white-main/70 font-normal text-[14px]">
                  New Tag
                </p>
              </button>
              {tags?.map((tag, index) => {
                return (
                  <div
                    key={index}
                    className="text-white-main/70 flex justify-center items-center gap-1 border-[1px] text-[14px] rounded-[4px] border-black-off p-[2px] px-2"
                  >
                    <input
                      className="bg-black-cool w-[80px] focus:outline-none"
                      type="text"
                      placeholder="new tag"
                      value={tag}
                      onChange={(e) =>
                        handleTagChange(index, e.currentTarget.value)
                      }
                    />
                    <RxCross2
                      onClick={() => handleRemoveTag(index)}
                      className="text-white-main/70 cursor-pointer text-[18px]"
                    />
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

export default Card;
