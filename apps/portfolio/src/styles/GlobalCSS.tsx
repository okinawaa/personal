import { css, Global } from "@emotion/react";
import { media, ROOT_FONT_SIZE, vw, vwMobile } from "~/constants";

const GlobalCSS = () => {
  return (
    <Global
      styles={css`
        /* 앱처럼 user-select 제거 */
        * {
          box-sizing: border-box;
          padding: 0;
          margin: 0;
        }

        a {
          text-decoration: none;
          cursor: pointer;
          color: inherit;
        }

        ul {
          list-style: none;
        }

        input {
          border: none;
        }

        input,
        textarea {
          outline: none;
          /* On iOS 5 and later */
          border-radius: 0;
        }

        textarea {
          resize: none;
        }

        input,
        textarea {
          font-family: "NotoSansKR";
        }

        button {
          background-color: transparent;
          cursor: pointer;
          padding: 0;
          margin: 0; // ios default css
          border: none;
        }

        svg,
        image,
        video {
          vertical-align: top;
        }

        html {
          font-size: ${vw(ROOT_FONT_SIZE)};
          will-change: font-size;
          height: 100%;

          ${media.tablet} {
            font-size: ${vwMobile(ROOT_FONT_SIZE)};
          }
        }
      `}
    />
  );
};

export default GlobalCSS;
