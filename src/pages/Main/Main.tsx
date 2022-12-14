import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { fetchCareers, fetchEducations, fetchSkills } from "~/apis/main";
import { Recommendation } from "~/components/main";
import Colors from "~/constants/Colors";
import { FlexBox, SizedBox } from "~/constants/Common.style";
import { contacts, openSources, projects } from "~/constants/data";
import { Body4, Caption2, Title2 } from "~/constants/Typography";
import { EXTRA_BOLD_WEIGHT } from "~/constants/Variables";
import SectionLayout from "~/layouts/SectionLayout";
import * as Styled from "./Main.style";

const Main = () => {
  const { t, i18n } = useTranslation("main");
  const language = i18n.language as Common.LanguageType;

  const [skills, setSkills] = useState<string[]>([]);
  const [careers, setCareers] = useState<Common.CareerType[]>([]);
  const [education, setEducation] = useState<Common.EducationType>();

  useEffect(() => {
    const getSkills = async () => {
      const skills = await fetchSkills(language);
      setSkills(skills);
    };

    const getCareers = async () => {
      const careers = await fetchCareers(language);
      setCareers(careers);
    };

    const getEducations = async () => {
      const education = await fetchEducations(language);
      setEducation(education);
    };

    getSkills();
    getCareers();
    getEducations();
  }, [language]);

  return (
    <Styled.Container _direction="column" selfAlignRowCenter>
      <FlexBox _direction="column" alignItems="center" as="header">
        <Title2 weight={EXTRA_BOLD_WEIGHT} _color={Colors.black33} as="h1">
          ChanhyukPark-Tech
        </Title2>
        <SizedBox _height={20} />
        <Title2 weight={EXTRA_BOLD_WEIGHT} _color={Colors.black} as="h2">
          {t("introduction.name")}
        </Title2>

        <SizedBox _height={20} />
        <Body4 _color={Colors.gray66} as="h3">
          {t("introduction.job")} / {t("introduction.part")}
        </Body4>
        <SizedBox _height={10} />
        <Body4 _color={Colors.grayA8} as="h4">
          {t("introduction.nation")}
        </Body4>
        <SizedBox _height={40} />
        <article>
          <Body4
            _color={Colors.gray5f}
            lineHeight={28}
            whiteSpace="pre-wrap"
            as="h5"
            moFontSize={14}
          >
            {t("introduction.title")}
            {"\n"}
            {t("introduction.description")}
          </Body4>
        </article>
      </FlexBox>
      <SizedBox _height={40} />
      {/* 본문 시작 */}
      <FlexBox _direction="column" gap={40} as="main">
        {/* 스킬 */}
        <SectionLayout title="SKILL" list={false}>
          <Styled.SkillWrapper gap={10} as="ul">
            {skills.length === 0 ? (
              <Body4 moFontSize={14} moLineHeight={18}>
                스킬을 불러오고 있습니다.
              </Body4>
            ) : (
              skills.map(skill => (
                <Body4 moFontSize={14} key={skill} moLineHeight={18} as="li">
                  {skill}
                </Body4>
              ))
            )}
          </Styled.SkillWrapper>
        </SectionLayout>
        {/* 프로젝트 */}
        <SectionLayout title="PROJECT">
          {projects.map(project => (
            <Styled.ItemWrapper key={project.title}>
              <a
                href={project.link}
                title={`${project.title} 프로젝트 보러가기`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Body4 moFontSize={14}>{project.title}</Body4>
              </a>
              <Caption2 _color={Colors.gray5f}>{project.date}</Caption2>
            </Styled.ItemWrapper>
          ))}
        </SectionLayout>
        {/* 오픈소스 */}
        <SectionLayout title="OPEN SOURCE CONTRIBUTION">
          {openSources.map(openSource => (
            <Styled.ItemWrapper key={openSource.title}>
              <a
                href={openSource.link}
                title={`${openSource.title} 오픈소스 프로젝트 보러가기`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Body4 moFontSize={14}>{openSource.title}</Body4>
              </a>
            </Styled.ItemWrapper>
          ))}
        </SectionLayout>
        {/* 경력 */}
        <SectionLayout title="CAREER">
          {careers.length === 0 ? (
            <Body4>경력을 불러오고 있습니다.</Body4>
          ) : (
            careers.map(career => (
              <Styled.ItemWrapper key={career.title}>
                <Body4 moFontSize={14}>{career.title}</Body4>
                <Caption2 _color={Colors.gray5f}>{career.date}</Caption2>
              </Styled.ItemWrapper>
            ))
          )}
        </SectionLayout>
        {/* 교육 */}
        <SectionLayout title="EDUCATION">
          {education ? (
            <Styled.ItemWrapper gap={6}>
              <Body4 moFontSize={14}>{education?.title}</Body4>
              <Body4 moFontSize={14} _color={Colors.gray66}>
                {education?.description}
              </Body4>
              <Caption2 _color={Colors.gray5f}>{education?.date}</Caption2>
            </Styled.ItemWrapper>
          ) : (
            <Body4>교육을 불러오고 있습니다.</Body4>
          )}
        </SectionLayout>
        {/* 연락처 */}
        <SectionLayout title="CONTACT">
          {contacts.map(contact => (
            <Styled.ItemWrapper key={contact.title}>
              {contact.link ? (
                <a
                  href={contact.link ?? "#"}
                  title={`${contact.title} 로 바로가기`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Body4 moFontSize={14}>{contact.title}</Body4>
                </a>
              ) : (
                <Body4 moFontSize={14}>{contact.title}</Body4>
              )}
            </Styled.ItemWrapper>
          ))}
        </SectionLayout>
        {/* 추천사 */}
        <Recommendation />
      </FlexBox>
    </Styled.Container>
  );
};

export default Main;
