import * as Styled from "@pageStyle/skill.style";
import SkillChunk from "~/components/Skill/SkillChunk/SkillChunk";
import SkillDescription from "~/components/Skill/SkillDescription";
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
        <SkillChunk category="front" skills={skillList.front} />
        <SkillChunk category="back" skills={skillList.back} />
        <SkillChunk category="devOps" skills={skillList.devOps} />
      </Styled.ContentsWrapper>
    </Styled.Container>
  );
};

export default Skill;
