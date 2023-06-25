import React, { ReactNode, useContext, useState, createContext } from "react";
import { TemplateTage } from "@/data/data";
import { CardData } from "@/data/data";

const TemplateContext = createContext(null);

export const TemplateContextProvider = ({ children }) => {
  const [tags, setTags] = useState(TemplateTage);
  const [cardData, setCardData] = useState(CardData);
  const valuesToPass = {
    tags,
    setTags,
    cardData,
    setCardData,
  };
  return (
    <TemplateContext.Provider value={valuesToPass}>
      {children}
    </TemplateContext.Provider>
  );
};

export const UseTemplateContext = () => useContext(TemplateContext);
