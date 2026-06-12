import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { content, Lang } from "./content";

interface LangContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (typeof content)["ru"];
}

const LangContext = createContext<LangContextValue | null>(null);

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("wes-lang") : null;
    if (saved === "ru" || saved === "en") return saved;
    return navigator.language?.toLowerCase().startsWith("ru") ? "ru" : "en";
  });

  useEffect(() => {
    localStorage.setItem("wes-lang", lang);
    document.documentElement.lang = lang;
    document.title = content[lang].meta.title;
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang, t: content[lang] }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
};
