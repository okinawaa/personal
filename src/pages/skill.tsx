import * as Styled from "@pageStyle/skill.style";
import SkillDescription from "~/components/Skill/SkillDescription";
import SkillItem from "~/components/Skill/SkillItem";
import {
  FlexCenter,
  SizedBox,
  VerticalSeperateLine
} from "~/constants/Common.style";
import skillList from "~/constants/data/skillList";
import useScroll from "~/hooks/useScroll";

const Skill = () => {
  const {
    state: { y }
  } = useScroll();

  return (
    <Styled.Container>
      <Styled.ContentsWrapper
        alignItems="center"
        style={{ transform: `translate3d(${-y}px, 0, 0)` }}
      >
        <SkillDescription />
        <SizedBox width={100} />
        <VerticalSeperateLine height={500} />
        <SizedBox width={100} />
        <FlexCenter gap={100}>
          {skillList.front.map(skill => (
            <SkillItem {...skill} />
          ))}
        </FlexCenter>
      </Styled.ContentsWrapper>
    </Styled.Container>
  );
};

export default Skill;
