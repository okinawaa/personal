import Colors from "~/constants/Colors";
import { Body3 } from "~/constants/Typography";
import SectionLayoutProps from "./SectionLayout.props";
import * as Styled from "./SectionLayout.style";

const SectionLayout = ({
  title,
  children,
  list = true
}: SectionLayoutProps) => {
  return (
    <section>
      <Body3 _fontFamily="NotoSansKR" _color={Colors.green00} moFontSize={16}>
        {title}
      </Body3>
      {list ? (
        <Styled.ContentsWrapper _direction="column" gap={15} moGap={12} as="ul">
          {children}
        </Styled.ContentsWrapper>
      ) : (
        <Styled.ContentsWrapper _direction="column" gap={15} moGap={12}>
          {children}
        </Styled.ContentsWrapper>
      )}
    </section>
  );
};

export default SectionLayout;
