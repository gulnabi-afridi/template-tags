import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";
import { BsPlus } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { UseTemplateContext } from "@/context/context";

const Model = ({ cardIndex, open, setOpen }) => {
  const { cardData, setCardData } = UseTemplateContext();
  const [tags, setTags] = useState([...cardData[cardIndex].tags]);

  // ===> modal style
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 24,
  };

  //   useEffect(() => {
  //     setCardData((previousData) => {
  //       const updatedData = [...previousData];
  //       updatedData[cardIndex].tags = tags;
  //       return updatedData;
  //     });
  //   }, [tags]);

  const handleTagChange = (index, tagValue) => {
    setCardData((prevState) => {
      const prevData = [...prevState];
      prevData[cardIndex].tags[index] = tagValue;
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
    setTags((prevState) => [...prevState, "new tag"]);
  };

  const handleAcceptChanges = () => {
    setCardData((previousData) => {
      const updatedData = [...previousData];
      updatedData[cardIndex].tags = tags;
      return updatedData;
    });
  };

  return (
    <Modal sx={{ margin: "18px" }} open={open} onClose={() => setOpen(false)}>
      <Box
        sx={{
          ...style,
          width: { md: "680px", sm: "600px", xs: "100%" },
          background: "#1f1f1f",
        }}
      >
        <div className="w-full flex flex-col">
          <div className="flex min-h-[480px] justify-start items-start gap-3 p-8">
            {/* new tag button */}
            <button
              onClick={handleAddNewTag}
              className="flex justify-center items-center gap-1 border-[1px] border-dashed border-black-off px-2 py-[2px] rounded-[4px]"
            >
              <BsPlus className="text-white-main/70 text-[22px]" />
              <p className="text-white-main/70 whitespace-nowrap font-normal text-[14px]">
                New Tag
              </p>
            </button>
            <div className="flex justify-center items-center flex-wrap gap-3">
              {tags?.map((tag, index) => {
                return (
                  <div
                    key={index}
                    className={`${
                      tag === "featured"
                        ? "text-white-main border-white-main "
                        : "text-white-main/70 border-black-off"
                    }  flex justify-center items-center gap-1 border-[1px] text-[14px] rounded-[4px] p-[2px] px-2`}
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
          </div>
          {/* ===> buttons */}
          <div className="w-full h-[70px] flex gap-4 justify-end items-center px-8 border-t-[2px] border-black-off">
            <button
              onClick={() => setOpen(false)}
              className="text-white-main/70 border-[1px] border-black-off rounded-[4px] px-4 py-2"
            >
              Cancel
            </button>
            <button
              onClick={handleAcceptChanges}
              className="text-white-main/70 bg-blue-main rounded-[4px] px-5 py-2"
            >
              Ok
            </button>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default Model;
