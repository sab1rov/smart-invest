import LanguageContextProvider from "../context/LanguageContext";

import "../styles/Main.scss";

export default function App({ Component, pageProps }) {
  return (
    <LanguageContextProvider>
      <Component {...pageProps} />
    </LanguageContextProvider>
  );
}
