import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { appWithTranslation } from "next-i18next";
import theme from "~/styles/theme.style";
import "../styles/font-face.css";
// import "../locales/i18n";
// import { useEffect } from "react";
// import i18next from "i18next";

function MyApp({ Component, pageProps }: AppProps) {
  // useEffect(() => {
  //   i18next.on("languageChanged", (lng: "ko" | "en") => {
  //     if (typeof document !== "undefined") {
  //       document.documentElement.setAttribute("lang", lng);
  //     }
  //   });
  // }, []);

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
