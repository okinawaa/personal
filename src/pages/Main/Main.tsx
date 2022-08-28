import { useTranslation } from "react-i18next";
import Colors from "~/constants/Colors";
import { FlexBox, SizedBox } from "~/constants/Common.style";
import {
  careers,
  contacts,
  educations,
  openSources,
  projects
} from "~/constants/data";
import { Body2, Body4, Caption2, Title2 } from "~/constants/Typography";
import { EXTRA_BOLD_WEIGHT } from "~/constants/Variables";
import SectionLayout from "~/layouts/SectionLayout";
import * as Styled from "./Main.style";

const Main = () => {
  const { t } = useTranslation("main");
  return (
    <Styled.Container direction="column" selfAlignRowCenter>
      <FlexBox direction="column" alignItems="center">
        <Title2 weight={EXTRA_BOLD_WEIGHT} color={Colors.black33}>
          ChanhyukPark-Tech
        </Title2>
        <SizedBox height={20} />
        <Title2 weight={EXTRA_BOLD_WEIGHT} color={Colors.black}>
          {t("introduction.name")}
        </Title2>

        <SizedBox height={20} />
        <Body4 color={Colors.gray66}>
          {t("introduction.job")} / {t("introduction.part")}
        </Body4>
        <SizedBox height={10} />
        <Body4 color={Colors.grayA8}>{t("introduction.nation")}</Body4>
        <SizedBox height={40} />
        <Body4 color={Colors.gray5f} lineHeight={28} whiteSpace="pre-wrap">
          {t("introduction.title")}
          {"\n"}
          {t("introduction.description")}
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
