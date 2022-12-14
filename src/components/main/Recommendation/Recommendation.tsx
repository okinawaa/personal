import { useState } from "react";
import Colors from "~/constants/Colors";
import { SizedBox } from "~/constants/Common.style";
import { recommendations } from "~/constants/data";
import { Body2, Body4, Caption2 } from "~/constants/Typography";
import SectionLayout from "~/layouts/SectionLayout";
import { chunkByLength } from "~/utils/common";
import * as Styled from "./Recommendation.style";

const Recommendation = () => {
  const [openRecommendations, setOpenRecommendations] = useState<string[]>([]);

  return (
    <SectionLayout title="Recommendation">
      {recommendations.map(recommendation => (
        <>
          <Styled.ItemWrapper key={recommendation.title}>
            <a
              href={recommendation.link}
              title={`${recommendation.title}님 깃허브 보러가기`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Body2 _color={Colors.gray5f} moFontSize={14}>
                {recommendation.title}
              </Body2>
            </a>

            <SizedBox _height={10} />
            <Body4 as="p" moFontSize={14} whiteSpace="pre-wrap">
              {openRecommendations.includes(recommendation.title) ? (
                recommendation.description
              ) : (
                <>
                  {chunkByLength(recommendation.description)[0]}...
                  <button
                    type="button"
                    onClick={() =>
                      setOpenRecommendations([
                        ...openRecommendations,
                        recommendation.title
                      ])
                    }
                    title="내용 더보기"
                  >
                    <Caption2 color={Colors.grayA8}>더보기</Caption2>
                  </button>
                </>
              )}
            </Body4>
          </Styled.ItemWrapper>
          <Styled.HorizontalLine />
        </>
      ))}
    </SectionLayout>
  );
};

export default Recommendation;
