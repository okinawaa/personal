import * as Images from "@images/main";
import * as Styled from "@pageStyle/index.style";
import Sketch from "react-p5";
import p5Types from "p5"; // Import this for typechecking and intellisense
import type { NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import PImage from "~/components/Common/NImage/PImage";
import Colors from "~/constants/Colors";
import { FlexBox } from "~/constants/Common.style";
import { Header1, Header2 } from "~/constants/Typography";
import { BOLD_WEIGHT } from "~/constants/Variables";
import useScrollFadeIn from "~/hooks/useScrollFadeIn";

const Main: NextPage = () => {
  let x = 50;
  const y = 50;
  // See annotations in JS for more information
  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(500, 500).parent(canvasParentRef);
  };

  const draw = (p5: p5Types) => {
    p5.background(0);
    p5.ellipse(x, y, 70, 70);
    x += 1;
  };

  const { t } = useTranslation("main");
  const profileImageAnimation = useScrollFadeIn("right");
  return (
    <Styled.Container>
      <Sketch setup={setup} draw={draw} />

      <Styled.ImageWrapper {...profileImageAnimation}>
        <PImage
          src={Images.profile}
          alt="박찬혁 프로필사진"
          width={640}
          height={1080}
        />
      </Styled.ImageWrapper>
      <Styled.ContentWrapper direction="column" gap={20}>
        <Header2>안녕하세요</Header2>
        <Header1
          underline={{
            height: 4,
            color: Colors.yellowff03
          }}
        >
          이유 없는 코드는 작성하지 않는
        </Header1>
        <FlexBox gap={20}>
          <Header1>프론트엔드 개발자</Header1>
          <Header1
            weight={BOLD_WEIGHT}
            underline={{
              height: 16,
              color: Colors.yellowff03
            }}
          >
            {" "}
            박찬혁
          </Header1>
          <Header1>입니다</Header1>
        </FlexBox>
      </Styled.ContentWrapper>
    </Styled.Container>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "main"]))
      // Will be passed to the page component as props
    }
  };
}

export default Main;
