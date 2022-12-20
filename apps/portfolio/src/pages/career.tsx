import styled from "@emotion/styled";
import { navigate, PageProps } from "gatsby";
import { Back, More } from "~/assets/svgs";
import { Button, Seo } from "~/components/Common";
import { AppLayout, SectionLayout } from "~/components/Layout";
import {
  Body1,
  BOLD_WEIGHT,
  Caption1,
  Colors,
  FlexBox,
  pxToRem,
  SizedBox
} from "~/constants";
import { careers } from "~/data";

type ElementType<T extends readonly unknown[]> = T[number];

interface PageContext {
  id: ElementType<typeof careers>["id"];
}

const Career = ({ pageContext }: PageProps<{}, PageContext>) => {
  const { id } = pageContext;
  const career = careers.find(career => career.id === id);

  if (!career) return <div>다시 시도해볼까요?</div>;

  return (
    <AppLayout isFooter={false}>
      <Seo
        description={`${career.title}에서의 기록`}
        url={`https://chanhyuk.com/career/${career.id}`}
        thumbnail={`https://chanhyuk.com/${career.id}.png`}
      />
      <Body1 weight={BOLD_WEIGHT} moFontSize={20}>
        {career.title}에서의 기록
      </Body1>
      <SizedBox _height={40} moHeight={20} />
      {career.works?.map(work => (
        <SectionLayout key={work.title} title={work.title}>
          {work.list.map(detail => (
            <Caption1 key={detail} as="li">
              - {detail}
            </Caption1>
          ))}
          <SizedBox _height={40} moHeight={20} />
        </SectionLayout>
      ))}
      <Button onClick={() => navigate(-1)} title="메인 페이지로 돌아가기">
        <FlexBox alignItems="center">
          <Back width={pxToRem(12)} height={pxToRem(12)} fill={Colors.gray5f} />

          <SizedBox _width={4} />
          <Caption1 _color={Colors.gray5f}>뒤로가기</Caption1>
        </FlexBox>
      </Button>
    </AppLayout>
  );
};

export default Career;
