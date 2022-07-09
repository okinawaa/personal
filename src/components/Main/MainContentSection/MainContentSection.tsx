import * as Images from "@images/main";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";
import PImage from "~/components/Common/PImage";
import Colors from "~/constants/Colors";
import { FlexBox, SizedCircle } from "~/constants/Common.style";
import { Header1, Header2 } from "~/constants/Typography";
import {
  BOLD_WEIGHT,
  MAIN_CONTENTS_GAP,
  MAIN_PADDING_TOP
} from "~/constants/Variables";
import useScaleControl from "~/hooks/useScaleControl";
import useScroll from "~/hooks/useScroll";
import useScrollFadeIn from "~/hooks/useScrollFadeIn";
import * as Styled from "./MainContentSection.style";

const MainContentSection = () => {
  const router = useRouter();
  const {
    state: { y }
  } = useScroll();

  const breakPoint = useCallback((order: number) => {
    return MAIN_CONTENTS_GAP * order + 250 * (order - 1);
  }, []);

  const profileAnimation = useScrollFadeIn(
    {
      finish: 5000,
      opacity: 0
    },
    "right"
  );

  const rightBottomCircleAnimation = useScaleControl(0.6, 1.5, 0.6);

  useEffect(() => {
    if (y >= 5000) {
      setTimeout(() => {
        router.push("/skill");
      }, 1000);
    }
  }, [router, y]);

  return (
    <>
      <Styled.ImageWrapper {...profileAnimation}>
        <PImage
          src={Images.profile}
          alt="박찬혁 프로필사진"
          width={640}
          height={1080}
        />
      </Styled.ImageWrapper>
      <Styled.ContentWrapper
        direction="column"
        gap={MAIN_CONTENTS_GAP}
        position="relative"
      >
        <Styled.MainContentWrapper
          direction="column"
          gap={20}
          position="sticky"
          offset={{
            top:
              y < breakPoint(1)
                ? MAIN_PADDING_TOP
                : MAIN_PADDING_TOP - (y - breakPoint(1))
          }}
        >
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
              박찬혁
            </Header1>
            <Header1>입니다</Header1>
          </FlexBox>
        </Styled.MainContentWrapper>
        <Styled.SubContentWrapper
          position="sticky"
          direction="column"
          offset={{
            top:
              y < breakPoint(2)
                ? MAIN_PADDING_TOP
                : MAIN_PADDING_TOP - (y - breakPoint(2))
          }}
        >
          <Header1
            weight={BOLD_WEIGHT}
            underline={{
              height: 8,
              color: Colors.yellowff03
            }}
          >
            무죄가 입증될 때까지 모든 코드는 유죄다
          </Header1>
          <Header2>라는 생각을 갖고</Header2>
          <FlexBox>
            <Header2
              underline={{
                height: 8,
                color: Colors.yellowff03
              }}
            >
              테스트 코드
            </Header2>
            <Header2>와 함께합니다</Header2>
          </FlexBox>
        </Styled.SubContentWrapper>
        <Styled.SubContentWrapper
          position="sticky"
          direction="column"
          offset={{
            top:
              y < breakPoint(3)
                ? MAIN_PADDING_TOP
                : MAIN_PADDING_TOP - (y - breakPoint(3))
          }}
        >
          <Header2>자바스크립트 생태계에 빠져있으며</Header2>
          <FlexBox gap={10}>
            <Header2>질 좋은</Header2>
            <Header2
              underline={{
                height: 8,
                color: Colors.yellowff03
              }}
            >
              아키텍쳐를
            </Header2>
            <Header2>구현하고자</Header2>
          </FlexBox>
          <Header2>깊은 생각에도 빠져있습니다</Header2>
        </Styled.SubContentWrapper>
      </Styled.ContentWrapper>
      <SizedCircle
        as={motion.div}
        width={800}
        height={800}
        position="fixed"
        offset={{
          bottom: -250,
          right: -250
        }}
        background={Colors.gray60_03}
        {...rightBottomCircleAnimation}
      />
    </>
  );
};

export default MainContentSection;
