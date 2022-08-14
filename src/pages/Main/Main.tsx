import Colors from "~/constants/Colors";
import { SizedBox } from "~/constants/Common.style";
import { Body4, Title2 } from "~/constants/Typography";
import { EXTRA_BOLD_WEIGHT } from "~/constants/Variables";
import * as Styled from "./Main.style";

const Main = () => {
  return (
    <Styled.Container alignItems="center" direction="column" selfAlignRowCenter>
      <Title2 weight={EXTRA_BOLD_WEIGHT} color={Colors.black33}>
        ChanhyukPark-Tech
      </Title2>
      <SizedBox height={20} />
      <Title2 weight={EXTRA_BOLD_WEIGHT} color={Colors.black}>
        박찬혁
      </Title2>

      <SizedBox height={20} />
      <Body4 color={Colors.gray66}>Front-end Developer / Web & App</Body4>
      <SizedBox height={10} />
      <Body4 color={Colors.grayA8}>South Korea</Body4>
      <SizedBox height={40} />
      <Body4 color={Colors.gray5f} lineHeight={28} whiteSpace="pre-wrap">
        기계공학과 소프트웨어공학을 전공했습니다. 지금은 이 시대 최고의
        프론트엔드 개발자를 꿈꾸고 있습니다.{"\n"}제가 주관적으로 생각한 최고의
        프론트엔드 개발자란, 플랫폼에 독립적으로 어떠한 정보라도 사용자에게
        유연하게 전달해줄 수 있는 사람이라고 생각합니다. 코더가 아닌 개발자가
        되기 위해 2가지 원칙을 준수합니다. 이유 없는 코드는 작성하지 않습니다.
        단 한 줄의 코드라도, 나아가 복사 붙여 넣기 한 코드라 할지라도 그 코드의
        존재유무에 대해서 고찰합니다. 두 번째 기술과 결혼하지 않습니다. 빠르게
        변화하는 기술의 홍수 속에서 특정 기술을 고집하지 않고, 근본적인 개발자가
        지녀야 할 사고력을 증진합니다.
      </Body4>
    </Styled.Container>
  );
};

export default Main;
