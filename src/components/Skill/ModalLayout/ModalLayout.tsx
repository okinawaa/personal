import * as Svgs from "@svgs/common";
import Colors from "~/constants/Colors";
import { FlexBox, SizedBox } from "~/constants/Common.style";
import { Body1, Header1, Subtitle2 } from "~/constants/Typography";
import { closeModal } from "~/store/ducks/root/rootSlice";
import { useAppDispatch } from "~/store/hooks";
import * as Styled from "./ModalLayout.style";

interface ModalLayoutProps {
  title: string;
  checkedList: string[];
  description: string;
}

const ModalLayout = ({ title, checkedList, description }: ModalLayoutProps) => {
  const dispatch = useAppDispatch();
  return (
    <Styled.Container direction="column">
      <Styled.CloseButtonWrapper
        onClick={() => {
          dispatch(closeModal());
        }}
      >
        <Svgs.Close />
      </Styled.CloseButtonWrapper>

      <Styled.TitleWrapper>
        <Header1 color={Colors.black}>{title}</Header1>
      </Styled.TitleWrapper>
      <Styled.ContentsWrapper direction="column" gap={10}>
        <FlexBox gap={6}>
          <Subtitle2 color={Colors.redf9}>{title}</Subtitle2>
          <Subtitle2>에 대해 숙지하고 있는 리스트</Subtitle2>
        </FlexBox>
        <Styled.CheckedListWrapper>
          {checkedList.map(item => (
            <Styled.CheckedListItem>
              <Body1>- {item}</Body1>
            </Styled.CheckedListItem>
          ))}
        </Styled.CheckedListWrapper>
        <FlexBox gap={6}>
          <Subtitle2>내가 생각하는 </Subtitle2>
          <Subtitle2 color={Colors.redf9}>{title}</Subtitle2>
          <Subtitle2>을 잘한다는 것은?</Subtitle2>
        </FlexBox>
        <SizedBox height={10} />
        <Styled.DescriptionWrapper>
          <Body1>{description}</Body1>
          <Body1>
            로렘 입숨(lorem ipsum; 줄여서 립숨, lipsum)은 출판이나 그래픽 디자인
            분야에서 폰트, 타이포그래피, 레이아웃 같은 그래픽 요소나 시각적
            연출을 보여줄 때 사용하는 표준 채우기 텍스트로, 최종 결과물에
            들어가는 실제적인 문장 내용이 채워지기 전에 시각 디자인 프로젝트
            모형의 채움 글로도 이용된다. 이런 용도로 사용할 때 로렘 입숨을
            그리킹(greeking)이라고도 부르며, 때로 로렘 입숨은 공간만 차지하는
            무언가를 지칭하는 용어로도 사용된다. 로렘 입숨은 전통 라틴어와 닮은
            점 때문에 종종 호기심을 유발하기도 하지만 그 이상의 의미를 담지는
            않는다. 문서에서 텍스트가 보이면 사람들은 전체적인
            프레젠테이션보다는 텍스트에 담긴 뜻에 집중하는 경향이 있어서
            출판사들은 서체나 디자인을 보일 때는 프레젠테이션 자체에 초점을
            맞추기 위해 로렘 입숨을 사용한다. 로렘 입숨(lorem ipsum; 줄여서
            립숨, lipsum)은 출판이나 그래픽 디자인 분야에서 폰트, 타이포그래피,
            레이아웃 같은 그래픽 요소나 시각적 연출을 보여줄 때 사용하는 표준
            채우기 텍스트로, 최종 결과물에 들어가는 실제적인 문장 내용이
            채워지기 전에 시각 디자인 프로젝트 모형의 채움 글로도 이용된다. 이런
            용도로 사용할 때 로렘 입숨을 그리킹(greeking)이라고도 부르며, 때로
            로렘 입숨은 공간만 차지하는 무언가를 지칭하는 용어로도 사용된다.
            로렘 입숨은 전통 라틴어와 닮은 점 때문에 종종 호기심을 유발하기도
            하지만 그 이상의 의미를 담지는 않는다. 문서에서 텍스트가 보이면
            사람들은 전체적인 프레젠테이션보다는 텍스트에 담긴 뜻에 집중하는
            경향이 있어서 출판사들은 서체나 디자인을 보일 때는 프레젠테이션
            자체에 초점을 맞추기 위해 로렘 입숨을 사용한다. 로렘 입숨(lorem
            ipsum; 줄여서 립숨, lipsum)은 출판이나 그래픽 디자인 분야에서 폰트,
            타이포그래피, 레이아웃 같은 그래픽 요소나 시각적 연출을 보여줄 때
            사용하는 표준 채우기 텍스트로, 최종 결과물에 들어가는 실제적인 문장
            내용이 채워지기 전에 시각 디자인 프로젝트 모형의 채움 글로도
            이용된다. 이런 용도로 사용할 때 로렘 입숨을 그리킹(greeking)이라고도
            부르며, 때로 로렘 입숨은 공간만 차지하는 무언가를 지칭하는 용어로도
            사용된다. 로렘 입숨은 전통 라틴어와 닮은 점 때문에 종종 호기심을
            유발하기도 하지만 그 이상의 의미를 담지는 않는다. 문서에서 텍스트가
            보이면 사람들은 전체적인 프레젠테이션보다는 텍스트에 담긴 뜻에
            집중하는 경향이 있어서 출판사들은 서체나 디자인을 보일 때는
            프레젠테이션 자체에 초점을 맞추기 위해 로렘 입숨을 사용한다. 로렘
            입숨(lorem ipsum; 줄여서 립숨, lipsum)은 출판이나 그래픽 디자인
            분야에서 폰트, 타이포그래피, 레이아웃 같은 그래픽 요소나 시각적
            연출을 보여줄 때 사용하는 표준 채우기 텍스트로, 최종 결과물에
            들어가는 실제적인 문장 내용이 채워지기 전에 시각 디자인 프로젝트
            모형의 채움 글로도 이용된다. 이런 용도로 사용할 때 로렘 입숨을
            그리킹(greeking)이라고도 부르며, 때로 로렘 입숨은 공간만 차지하는
            무언가를 지칭하는 용어로도 사용된다. 로렘 입숨은 전통 라틴어와 닮은
            점 때문에 종종 호기심을 유발하기도 하지만 그 이상의 의미를 담지는
            않는다. 문서에서 텍스트가 보이면 사람들은 전체적인
            프레젠테이션보다는 텍스트에 담긴 뜻에 집중하는 경향이 있어서
            출판사들은 서체나 디자인을 보일 때는 프레젠테이션 자체에 초점을
            맞추기 위해 로렘 입숨을 사용한다.
          </Body1>
        </Styled.DescriptionWrapper>
      </Styled.ContentsWrapper>
    </Styled.Container>
  );
};

export default ModalLayout;
