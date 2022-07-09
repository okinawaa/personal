import { useMemo } from "react";
import PImage from "~/components/Common/PImage";
import Colors from "~/constants/Colors";
import { Header1 } from "~/constants/Typography";
import useCountUp from "~/hooks/useCountUp";
import useScrollFadeIn from "~/hooks/useScrollFadeIn";
import { setModal } from "~/store/ducks/root/rootSlice";
import { useAppDispatch } from "~/store/hooks";
import ModalLayout from "../ModalLayout/ModalLayout";
import * as Styled from "./SkillItem.style";

const SkillItem = ({
  id,
  spec,
  proficiency,
  checkedList,
  description
}: Skill.SkillType) => {
  const dispatch = useAppDispatch();
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

  const onClickHandler = () => {
    dispatch(
      setModal(
        <ModalLayout
          title={id}
          checkedList={checkedList}
          description={description}
          proficiency={proficiency}
          proficiencyColor={proficiencyColor}
        />
      )
    );
  };

  return (
    <Styled.Container
      {...animation}
      direction="column"
      gap={30}
      title={`${spec.alt} 구현 능력에 대해 자세히 살펴보기`}
      onClick={onClickHandler}
    >
      <PImage {...spec} width={200} height={200} borderRadius={20} />
      <Header1 color={proficiencyColor}>{animatedProficiency}</Header1>
    </Styled.Container>
  );
};

export default SkillItem;
