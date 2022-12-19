import React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import { AppLayout, SectionLayout } from "~/components/Layout";
import { Recommendation } from "~/components/Main";
import {
  Body1,
  Body4,
  Caption1,
  Caption2,
  Caption3,
  Colors,
  EXTRA_BOLD_WEIGHT,
  FlexBox,
  LIGHT_WEIGHT,
  media,
  pxToRem,
  SizedBox,
  Title2
} from "~/constants";
import {
  careers,
  contacts,
  educations,
  info,
  openSources,
  projects,
  skills
} from "~/data";
import { Button } from "~/components/Common";

const Main = () => {
  return (
    <AppLayout>
      <FlexBox _direction="column" alignItems="center" as="header">
        <Title2 weight={EXTRA_BOLD_WEIGHT} _color={Colors.black33} as="h1">
          ChanhyukPark-Tech
        </Title2>
        <SizedBox _height={20} />
        <Title2 weight={EXTRA_BOLD_WEIGHT} _color={Colors.black} as="h2">
          {info.name}
        </Title2>

        <SizedBox _height={20} />
        <Body4 _color={Colors.gray66} as="h3">
          {info.job} / {info.part}
        </Body4>
        <SizedBox _height={10} />
        <Body4 _color={Colors.grayA8} as="h4">
          {info.nation}
        </Body4>
        <SizedBox _height={40} />
        <article>
          <Body4
            _color={Colors.gray5f}
            lineHeight={28}
            whiteSpace="pre-wrap"
            as="h5"
            weight={LIGHT_WEIGHT}
            moFontSize={14}
          >
            {info.title}
            {"\n"}
            {info.description}
          </Body4>
        </article>
      </FlexBox>
      <SizedBox _height={40} />
      {/* 본문 시작 */}

      <FlexBox _direction="column" gap={40} as="main">
        {/* 스킬 */}
        <SectionLayout title="SKILL" list={false}>
          <SkillWrapper gap={10} as="ul">
            {skills.map(skill => (
              <Body4 moFontSize={14} key={skill} moLineHeight={18} as="li">
                {skill}
              </Body4>
            ))}
          </SkillWrapper>
        </SectionLayout>
        {/* 프로젝트 */}
        <SectionLayout title="PROJECT">
          {projects.map(project => (
            <ItemWrapper key={project.title}>
              <a
                href={project.link}
                title={`${project.title} 프로젝트 보러가기`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Body4 moFontSize={14}>{project.title}</Body4>
              </a>
              <Caption2 _color={Colors.gray5f}>{project.date}</Caption2>
            </ItemWrapper>
          ))}
        </SectionLayout>

        {/* 경력 */}
        <SectionLayout title="CAREER">
          {careers.map(career => (
            <FlexBox alignItems="center" gap={20}>
              <ItemWrapper key={career.title}>
                <Body4 moFontSize={14}>{career.title}</Body4>
                <Caption2 _color={Colors.gray5f}>{career.date}</Caption2>
              </ItemWrapper>
              {career.works && (
                <Link to={`/career/${career.id}`}>
                  <Button>
                    <Caption1 _color={Colors.gray5f}>자세히 보기</Caption1>
                  </Button>
                </Link>
              )}
            </FlexBox>
          ))}
        </SectionLayout>
        {/* 오픈소스 */}
        <SectionLayout title="OPEN SOURCE CONTRIBUTION">
          {openSources.map(openSource => (
            <ItemWrapper key={openSource.title}>
              <a
                href={openSource.link}
                title={`${openSource.title} 오픈소스 프로젝트 보러가기`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Body4 moFontSize={14}>{openSource.title}</Body4>
              </a>
            </ItemWrapper>
          ))}
        </SectionLayout>

        {/* 교육 */}
        <SectionLayout title="EDUCATION">
          {educations.map(education => (
            <ItemWrapper gap={6} key={education.title}>
              <Body4 moFontSize={14}>{education?.title}</Body4>
              <Body4 moFontSize={14} _color={Colors.gray66}>
                {education?.description}
              </Body4>
              <Caption2 _color={Colors.gray5f}>{education?.date}</Caption2>
            </ItemWrapper>
          ))}
        </SectionLayout>

        {/* 연락처 */}
        <SectionLayout title="CONTACT">
          {contacts.map(contact => (
            <ItemWrapper key={contact.title}>
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
            </ItemWrapper>
          ))}
        </SectionLayout>
        {/* 추천사 */}
        <Recommendation />
      </FlexBox>
    </AppLayout>
  );
};

export default Main;

export const SkillWrapper = styled(FlexBox)`
  ${media.tablet} {
    flex-direction: column;
  }
`;

export const ItemWrapper = styled(FlexBox)`
  position: relative;
  flex-direction: column;

  &::before {
    content: "-";

    color: ${Colors.green00};
    position: absolute;
    left: -${pxToRem(15)};
    top: 0;
  }
`;

export const HorizontalLine = styled.hr`
  width: 100%;
  border: 0;
  background-color: ${Colors.grayA8};
  height: 1px;
`;
