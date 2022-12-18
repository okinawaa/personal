import { xHTML } from "~/assets/images/common";
import { Image } from "~/constants/Common.style";
import * as Styled from "./Footer.style";

const Footer = () => {
  return (
    <Styled.Container gap={20} moGap={10} as="footer">
      <a
        href="http://jigsaw.w3.org/css-validator/check/referer"
        title="w3c css 검사에 통과하였습니다."
      >
        <Image
          _width={100}
          _height={35}
          src="http://jigsaw.w3.org/css-validator/images/vcss-blue"
          alt="올바른 CSS입니다!"
        />
      </a>

      <a
        href="https://validator.w3.org/nu/?doc=http%3A%2F%2Fchanhyuk.com%2F"
        title="w3c HTML markup 검사에 통과하였습니다."
      >
        <Image
          src={xHTML}
          alt="올바른 XHTML MARKUP입니다!!"
          _width={100}
          _height={35}
        />
      </a>
    </Styled.Container>
  );
};

export default Footer;
