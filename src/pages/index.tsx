import * as Images from "@images/main";
import * as Styled from "@pageStyle/index.style";
import { motion, useTransform, useViewportScroll } from "framer-motion";

import type { NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import PImage from "~/components/Common/NImage/PImage";
import Colors from "~/constants/Colors";
import { FlexBox, SizedBox } from "~/constants/Common.style";
import { Header1, Header2 } from "~/constants/Typography";
import { BOLD_WEIGHT } from "~/constants/Variables";

const Main: NextPage = () => {
  const { t } = useTranslation("main");
  const { scrollYProgress } = useViewportScroll();

  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    [Colors.black, Colors.purpleAd]
  );

  return (
    <Styled.Container position="relative">
      <Styled.ImageWrapper>
        <PImage
          src={Images.profile}
          alt="박찬혁 프로필사진"
          width={640}
          height={1080}
        />
      </Styled.ImageWrapper>
      <Styled.ContentWrapper direction="column">
        <Styled.MainContentWrapper direction="column" gap={20}>
          <Header2>안녕하세요</Header2>
          <Header1
            as={motion.span}
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
              as={motion.span}
              weight={BOLD_WEIGHT}
              underline={{
                height: 16,
                color: Colors.yellowff03
              }}
            >
              박찬혁
            </Header1>
            <Header1>입니다</Header1>
          </FlexBox>
        </Styled.MainContentWrapper>
        <SizedBox height={100} />
        <Styled.SubContentWrapper>
          <Header1>랄라라랄라김혜림</Header1>
        </Styled.SubContentWrapper>
      </Styled.ContentWrapper>

      <SizedBox height={3000} />
    </Styled.Container>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "main"]))
    }
  };
}

export default Main;
