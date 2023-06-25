import React, { useEffect, useState, useTransition } from "react";
import { AiOutlineSearch } from "react-icons/ai";

import Card from "@/components/Card";
import { UseTemplateContext } from "@/context/context";

const Home = () => {
  const [selectedCardId, setSelectedCardId] = useState();
  const [searchTag, setSearchTag] = useState();
  const { cardData, setCardData } = UseTemplateContext();
  const [filterProducts, setFilterProducts] = useState([]);

  // Extract all unique tags from CardData

  const alltags = cardData.reduce((allTags, card) => {
    const tagsToAdd = card.tags.filter((tag) => !allTags.includes(tag));
    return [...allTags, ...tagsToAdd];
  }, []);
  //   =================================================================

  const handleFilterCardData = () => {
    const matchingProducts = cardData.filter((card) =>
      card.tags.includes(searchTag)
    );
    setFilterProducts(matchingProducts);
  };

  return (
    <React.Fragment>
      <div className="w-full">
        <div className="w-full m-auto max-w-[1100px] min-h-screen flex flex-col gap-8 justify-center items-center">
          {/* ===> search inpurt */}
          <div className="w-[220px] grid grid-cols-[1fr,.3fr] h-[50px] justify-center items-center border-2 bg-black-main border-black-off rounded-[2px]">
            <input
              className="h-full w-full pl-3 focus:outline-none bg-black-main text-white-off rounded-[10px]"
              type="text"
              value={searchTag}
              placeholder="Search tag"
            />
            <div className="w-full flex justify-center items-center">
              <AiOutlineSearch
                onClick={handleFilterCardData}
                className="text-white-off text-[26px] cursor-pointer"
              />
            </div>
          </div>

          {/* ===> all tages used */}
          <div className="flex justify-center items-center gap-4">
            {alltags.map((item, index) => {
              return (
                <button
                  key={index}
                  onClick={() => setSearchTag(item)}
                  className="capitalize text-[14px] font-normal text-white-off border-[2px] border-dotted leading-5 border-black-off rounded-[6px] px-3 py-[1px]"
                >
                  {item}
                </button>
              );
            })}
          </div>
          {/* =====> template card */}

          <div className="w-full grid grid-cols-2 mt-10">
            {filterProducts.length > 0 ? (
              <>
                {filterProducts.map((card, index) => {
                  return (
                    <div className="w-full flex justify-center items-center">
                      <Card
                        card={card}
                        cardNo={index}
                        setSelectedCardId={setSelectedCardId}
                      />
                    </div>
                  );
                })}
              </>
            ) : (
              <>
                {cardData?.map((card, index) => {
                  return (
                    <div className="w-full flex justify-center items-center">
                      <Card
                        card={card}
                        cardNo={index}
                        setSelectedCardId={setSelectedCardId}
                      />
                    </div>
                  );
                })}
              </>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
