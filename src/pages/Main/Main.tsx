import Colors from "~/constants/Colors";
import { SizedBox } from "~/constants/Common.style";
import { Body4, Title2 } from "~/constants/Typography";
import { EXTRA_BOLD_WEIGHT } from "~/constants/Variables";
import * as Styled from "./Main.style";

const Main = () => {
  return (
    <Styled.Container fullWidth alignItems="center" direction="column">
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
    </Styled.Container>
  );
};

export default Main;
