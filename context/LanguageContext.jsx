import React, { createContext, useEffect, useState } from "react";

export const LanguageContext = createContext();

function LanguageContextProvider({ children }) {
  const initialLanguage = "en";

  const [language, setLanguage] = useState(initialLanguage);

  useEffect(() => {
    if (localStorage.getItem("lang")) {
      setLanguage(localStorage.getItem("lang"));
    }
  }, []);
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageContextProvider;
