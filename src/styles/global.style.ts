// global-style.ts
import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import { media } from "~/constants/Media";
import { vw, vwMobile } from "~/constants/Size";
import { ROOT_FONT_SIZE } from "~/constants/Variables";

// 외부에서 import 할거니까 모듈 내보내자~!
export const GlobalStyle = createGlobalStyle`
  ${reset}

  /* 그밖에 글로벌 스타일 작성하기  */
  * {
    box-sizing: border-box;
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
    padding: 0;
    margin: 0;

    border: none;
  }
  
  input, textarea {
    outline: none;
    /* On iOS 5 and later */
    border-radius: 0;
  }

  textarea {
    resize: none;
  }

  input, textarea {
    font-family: "NotoSansKR";
  }

  button {
    background-color: transparent;
    cursor: pointer;
    padding: 0;
    margin: 0; // ios default css
    border: none;
  }

  svg, image, video {
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
`;
