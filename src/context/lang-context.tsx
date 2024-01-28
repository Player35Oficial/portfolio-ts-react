import { createContext, useState } from "react";

type LangContextProviderProp = {
  children: React.ReactNode;
};

type LangContextType = {
  lang: string;
  toggleLang: () => void;
};

export const LangContext = createContext<LangContextType>({
  lang: "pt-BR",
  toggleLang: () => {},
});

const LangContextProvider = ({ children }: LangContextProviderProp) => {
  const [lang, setLang] = useState("pt-BR");

  const toggleLang = () => {
    const html = window.document.querySelector("html");
    const currentLanguage = html?.getAttribute("lang");

    if (currentLanguage === "en-US") {
      html?.setAttribute("lang", "pt-BR");
      localStorage.setItem("lang", "pt-BR");
      setLang("pt-BR");
    } else {
      html?.setAttribute("lang", "en-US");
      localStorage.setItem("lang", "en-US");
      setLang("en-US");
    }
  };

  const contextValue: LangContextType = {
    lang,
    toggleLang,
  };

  return (
    <LangContext.Provider value={contextValue}>{children}</LangContext.Provider>
  );
};

export default LangContextProvider;
