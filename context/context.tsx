import React, { ReactNode, useContext, useState } from "react";
import { TemplateTage } from "@/data/data";
import { createContext } from "vm";

interface TemContextProvider {
  children: ReactNode;
}

const TemplateContext = createContext();

export const TemplateContextProvider = ({ children }: TemContextProvider) => {
  const [tags, setTags] = useState(TemplateTage);
  const valuesToPass = {
    tags,
    setTags,
  };
  return (
    <TemplateContext.Provider value={valuesToPass}>
      {children}
    </TemplateContext.Provider>
  );
};

export const UseTemplateContext = () => useContext(TemplateContext);
