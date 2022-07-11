import * as Svgs from "@svgs/common";
import Colors from "~/constants/Colors";
import { FlexBox, SizedBox } from "~/constants/Common.style";
import { Header1, Subtitle1, Subtitle2 } from "~/constants/Typography";
import { closeModal } from "~/store/ducks/root/rootSlice";
import { useAppDispatch } from "~/store/hooks";
import * as Styled from "./ModalLayout.style";

interface ModalLayoutProps {
  title: string;
  checkedList: string[];
  description: string;
  proficiency: number;
  proficiencyColor: string;
}

const ModalLayout = ({
  title,
  checkedList,
  description,
  proficiency,
  proficiencyColor
}: ModalLayoutProps) => {
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
          <Subtitle1 color={Colors.redf9}>{title}</Subtitle1>
          <Subtitle1>에 대해 숙지하고 있는 리스트</Subtitle1>
        </FlexBox>
        <Styled.CheckedListWrapper>
          {checkedList.map(item => (
            <Styled.CheckedListItem>
              <Subtitle2> - {item}</Subtitle2>
            </Styled.CheckedListItem>
          ))}
        </Styled.CheckedListWrapper>
        <FlexBox>
          <Subtitle1 color={Colors.redf9}>{title}</Subtitle1>
          <SizedBox width={6} />
          <Subtitle1>에</Subtitle1>
          <SizedBox width={6} />
          <Subtitle1 color={proficiencyColor}>{proficiency}</Subtitle1>
          <Subtitle1>점을 부여한 근거 및 이유</Subtitle1>
        </FlexBox>
        <Styled.DescriptionWrapper>
          <Subtitle2 whiteSpace="pre-wrap">{description}</Subtitle2>
        </Styled.DescriptionWrapper>
      </Styled.ContentsWrapper>
    </Styled.Container>
  );
};

export default ModalLayout;
