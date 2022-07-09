import Colors from "~/constants/Colors";
import { VerticalSeperateLine } from "~/constants/Common.style";
import { Header2 } from "~/constants/Typography";
import SkillItem from "../SkillItem";
import * as Styled from "./SkillChunk.style";

interface SkillChunkProps {
  category: Skill.categoryType;
  skills: Skill.SkillType[];
}

const SkillChunk = ({ category, skills }: SkillChunkProps) => {
  return (
    <>
      <VerticalSeperateLine height={500} />
      <Styled.Container gap={100} position="relative">
        <Styled.CategoryWrapper>
          <Header2 color={Colors.redf9}>{category}</Header2>
        </Styled.CategoryWrapper>
        {skills.map(skill => (
          <SkillItem {...skill} key={skill.id} />
        ))}
      </Styled.Container>
    </>
  );
};

export default SkillChunk;
