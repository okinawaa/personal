import Colors from "~/constants/Colors";
import { Body3 } from "~/constants/Typography";
import SectionLayoutProps from "./SectionLayout.props";
import * as Styled from "./SectionLayout.style";

const SectionLayout = ({ title, children }: SectionLayoutProps) => {
  return (
    <section>
      <Body3 fontFamily="NotoSansKR" color={Colors.green00}>
        {title}
      </Body3>
      <Styled.ContentsWrapper>{children}</Styled.ContentsWrapper>
    </section>
  );
};

export default SectionLayout;
