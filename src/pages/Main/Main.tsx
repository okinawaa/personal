import Colors from "~/constants/Colors";
import { FlexBox, SizedBox } from "~/constants/Common.style";
import {
  openSources,
  projects,
  careers,
  educations,
  contacts
} from "~/constants/data";
import { Body2, Body4, Caption2, Title2 } from "~/constants/Typography";
import { EXTRA_BOLD_WEIGHT } from "~/constants/Variables";
import SectionLayout from "~/layouts/SectionLayout";
import * as Styled from "./Main.style";

const Main = () => {
  return (
    <Styled.Container direction="column" selfAlignRowCenter>
      <FlexBox direction="column" alignItems="center">
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
          프론트엔드 개발자를 꿈꾸고 있습니다.{"\n"}제가 주관적으로 생각한
          최고의 프론트엔드 개발자란, 플랫폼에 독립적으로 어떠한 정보라도
          사용자에게 유연하게 전달해줄 수 있는 사람이라고 생각합니다. 코더가
          아닌 개발자가 되기 위해 2가지 원칙을 준수합니다. 이유 없는 코드는
          작성하지 않습니다. 단 한 줄의 코드라도, 나아가 복사 붙여 넣기 한
          코드라 할지라도 그 코드의 존재유무에 대해서 고찰합니다. 두 번째 기술과
          결혼하지 않습니다. 빠르게 변화하는 기술의 홍수 속에서 특정 기술을
          고집하지 않고, 근본적인 개발자가 지녀야 할 사고력을 증진합니다.
        </Body4>
      </FlexBox>
      <SizedBox height={40} />
      {/* 본문 시작 */}
      <FlexBox direction="column" gap={40}>
        {/* 스킬 */}
        <SectionLayout title="SKILL">
          <Body2>
            HTML / CSS / Javascript / Typescript / React / Next.js / Flutter
          </Body2>
        </SectionLayout>
        {/* 프로젝트 */}
        <SectionLayout title="PROJECT">
          <FlexBox gap={15} direction="column">
            {projects.map(project => (
              <Styled.ItemWrapper direction="column" key={project.title}>
                <a
                  href={project.link}
                  title={`${project.title} 프로젝트 보러가기`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Body4>{project.title}</Body4>
                </a>
                <Caption2 fontFamily="NotoSansKR" color={Colors.gray5f}>
                  {project.date}
                </Caption2>
              </Styled.ItemWrapper>
            ))}
          </FlexBox>
        </SectionLayout>
        {/* 오픈소스 */}
        <SectionLayout title="OPEN SOURCE CONTRIBUTION">
          <FlexBox gap={15} direction="column">
            {openSources.map(openSource => (
              <Styled.ItemWrapper direction="column" key={openSource.title}>
                <a
                  href={openSource.link}
                  title={`${openSource.title} 오픈소스 프로젝트 보러가기`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Body4>{openSource.title}</Body4>
                </a>
              </Styled.ItemWrapper>
            ))}
          </FlexBox>
        </SectionLayout>
        {/* 경력 */}
        <SectionLayout title="CAREER">
          <FlexBox gap={15} direction="column">
            {careers.map(career => (
              <Styled.ItemWrapper direction="column" key={career.title}>
                <Body4>{career.title}</Body4>
                <Caption2 fontFamily="NotoSansKR" color={Colors.gray5f}>
                  {career.date}
                </Caption2>
              </Styled.ItemWrapper>
            ))}
          </FlexBox>
        </SectionLayout>
        {/* 교육 */}
        <SectionLayout title="EDUCATION">
          <FlexBox gap={15} direction="column">
            {educations.map(education => (
              <Styled.ItemWrapper direction="column" key={education.title}>
                <Body4>{education.title}</Body4>
                <Body4 color={Colors.gray66}>{education.description}</Body4>
                <Caption2 fontFamily="NotoSansKR" color={Colors.gray5f}>
                  {education.date}
                </Caption2>
              </Styled.ItemWrapper>
            ))}
          </FlexBox>
        </SectionLayout>
        {/* 연락처 */}
        <SectionLayout title="CONTACT">
          <FlexBox gap={15} direction="column">
            {contacts.map(contact => (
              <Styled.ItemWrapper direction="column" key={contact.title}>
                <a
                  href={contact.link}
                  title={`${contact.title} 오픈소스 프로젝트 보러가기`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Body4>{contact.title}</Body4>
                </a>
              </Styled.ItemWrapper>
            ))}
          </FlexBox>
        </SectionLayout>
      </FlexBox>
    </Styled.Container>
  );
};

export default Main;
