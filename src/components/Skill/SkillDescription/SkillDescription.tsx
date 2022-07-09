import Colors from "~/constants/Colors";
import { FlexBox } from "~/constants/Common.style";
import { Header1 } from "~/constants/Typography";
import useScrollFadeIn from "~/hooks/useScrollFadeIn";
import * as Styled from "./SkillDescription.style";

const SkillDescription = () => {
  const animation = useScrollFadeIn(undefined, "right");

  return (
    <Styled.Container direction="column" gap={6} {...animation}>
      <FlexBox gap={16}>
        <Header1>다양한</Header1>
        <Header1 color={Colors.redf9}>프로젝트</Header1>
        <Header1>및</Header1>
      </FlexBox>
      <FlexBox gap={16}>
        <Header1>수많은</Header1>
        <Header1 color={Colors.redf9}>훈련을</Header1>
        <Header1>통해</Header1>
      </FlexBox>
      <Header1>실무에 바로 적용 가능한</Header1>
      <FlexBox gap={16}>
        <Header1>능력을 가진</Header1>
        <Header1 color={Colors.redf9}>기술</Header1>
      </FlexBox>
    </Styled.Container>
  );
};

export default SkillDescription;
