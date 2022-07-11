import * as Styled from "@pageStyle/skill.style";
import { leftArrow as LeftArrow } from "@svgs/common";
import { useMemo } from "react";
import SkillChunk from "~/components/Skill/SkillChunk/SkillChunk";
import SkillDescription from "~/components/Skill/SkillDescription";
import { SizedBox } from "~/constants/Common.style";
import skillList from "~/constants/data/skillList";
import { pxToRem } from "~/constants/Size";
import useScroll from "~/hooks/useScroll";

const Skill = () => {
  const {
    state: { y }
  } = useScroll();

  // 가로 스크롤 길이 계산 Container 의 height로 매핑
  const totalWidth = useMemo(() => {
    // 카테고리의 개수
    const totalCategory = Object.keys(skillList).length;
    // 총 스킬의 개수
    let totalSkill = 0;
    Object.values(skillList).forEach(skills => {
      totalSkill += skills.length;
    });

    /*
     * Description
     * gap between skills
     * skill width itself
     * padding of category
     */
    return (
      950 +
      (totalSkill - totalCategory) * 100 +
      totalSkill * 200 +
      200 * totalCategory
    );
  }, []);

  const arrowClickHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <Styled.Container totalWidth={totalWidth}>
      <Styled.ContentsWrapper
        alignItems="center"
        style={{ transform: `translate3d(-${pxToRem(y)}, 0, 0)` }}
      >
        <SkillDescription />
        {/* 객체 배열을 map 함수를 사용하기 위해 */}
        {Object.entries(skillList).map(entry => (
          <SkillChunk
            category={entry[0] as Skill.categoryType}
            skills={entry[1]}
            key={entry[0]}
          />
        ))}
        <SizedBox width={200} />
        <Styled.ArrowWrapper
          onClick={arrowClickHandler}
          title="가장 처음으로 가기"
        >
          <LeftArrow />
        </Styled.ArrowWrapper>
      </Styled.ContentsWrapper>
    </Styled.Container>
  );
};

export default Skill;
