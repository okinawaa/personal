import { useMemo } from "react";
import PImage from "~/components/Common/PImage";
import Colors from "~/constants/Colors";
import { Header1 } from "~/constants/Typography";
import useCountUp from "~/hooks/useCountUp";
import useScrollFadeIn from "~/hooks/useScrollFadeIn";
import * as Styled from "./SkillItem.style";

const SkillItem = ({ spec, proficiency }: Skill.SkillType) => {
  const animation = useScrollFadeIn();
  const animatedProficiency = useCountUp(proficiency);

  const proficiencyColor = useMemo(() => {
    if (animatedProficiency >= 85) {
      return Colors.redf7;
    }
    if (animatedProficiency > 70) {
      return Colors.redf9;
    }
    return Colors.yellowff;
  }, [animatedProficiency]);
  return (
    <Styled.Container
      {...animation}
      direction="column"
      gap={30}
      title={`${spec.alt} 구현 능력에 대해 자세히 살펴보기`}
    >
      <PImage {...spec} width={200} height={200} borderRadius={20} />
      <Header1 color={proficiencyColor}>{animatedProficiency}</Header1>
    </Styled.Container>
  );
};

export default SkillItem;
