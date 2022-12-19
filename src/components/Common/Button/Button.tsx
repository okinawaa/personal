import type { ButtonHTMLAttributes } from "react";

import * as Styled from "./Button.styles";
import type ButtonProps from "./Button.types";

const Button = ({
  children,
  ...props
}: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <Styled.Container {...props}>{children}</Styled.Container>;
};

export default Button;
