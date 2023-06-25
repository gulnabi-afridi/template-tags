import React, { ReactNode, useContext, useState, createContext } from "react";
import { TemplateTage } from "@/data/data";
import { CardData } from "@/data/data";

// create context
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
    // provide context
    <TemplateContext.Provider value={valuesToPass}>
      {children}
    </TemplateContext.Provider>
  );
};

// use context
export const UseTemplateContext = () => useContext(TemplateContext);
