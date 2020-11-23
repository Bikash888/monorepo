import React, { ReactNode } from "react";
import styled from "styled-components";
import { theme } from "../../../theme";
import { Button } from "antd";

type ButtonType = "primary" | "link" | "ghost";
export interface ButtonProps {
  children?: React.ReactNode;
  htmlType?: "button" | "submit" | "reset";
  type?: ButtonType;
  width?: string;
  fullWidth?: boolean;
  padding?: string;
  loading?: boolean;
  disabled?: boolean;
  icon?: ReactNode;
  minheight?: number;
  minwidth?: number;
  boxshadow?: string;
  background?: string;
  borderradius?: string;
  noradius?: boolean;
  typography?: any;
  color?: string;
  fontsize?: string;
  bold?: boolean;
  margin?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  bordercolor?: string;
}

const Wrapper = styled.div`
  display: contents;
  & .ant-btn-primary {
    background: ${theme.blue2};
    border-color: ${({ bordercolor }: ButtonProps) => {
      return bordercolor ? `${bordercolor} !important` : theme.blue2;
    }};
    box-shadow: 0px 0px 12px rgba(28, 86, 225, 0.51);
    font-size: 16px;
    line-height: 30px;
    font-weight: 700;
  }
  & .ant-btn-ghost {
    border-color: ${({ bordercolor }: ButtonProps) => {
      return bordercolor ? `${bordercolor} !important` : theme.blue2;
    }};
    background: ${({ background }: ButtonProps) => {
      return background ? `${background} !important` : "transparent";
    }};
    box-shadow: none;
    color: ${theme.blue2};
    font-size: 14px;
    line-height: 20px;
    font-weight: 700;
  }
  & .ant-btn-link {
    box-shadow: none;
    background: transparent;
    color: ${theme.blue2};
  }
`;
const StyledButton = styled(Button)`
  ${({ typography }: ButtonProps) => {
    if (typography) {
      return typography;
    }
  }}
  &[disabled] {
    background-color: ${theme.secondaryLight};
    border: none;
    box-shadow: none !important;
    color: ${theme.base};
  }

  border-radius: ${({ borderradius, noradius }: ButtonProps) => {
    return noradius ? "none" : borderradius ? borderradius : "100px";
  }};
  margin: ${({ margin }: ButtonProps) => {
    return margin && margin;
  }};
  padding: ${({ type, padding }: ButtonProps) => {
    if (padding) {
      return `${padding} !important`;
    }
    switch (type) {
      case "primary":
        return "0px 36px 0px 37px";
      case "ghost":
        return "0px 18px";
      default:
        return "0px 36px 0px 37px";
    }
  }};

  background: ${({ background }: ButtonProps) => {
    return background ? background : theme.blue2;
  }};
  box-shadow: ${({ boxshadow }: ButtonProps) => {
    return boxshadow
      ? `${boxshadow} !important`
      : "0px 0px 12px rgba(28, 86, 225, 0.51)";
  }};
  color: ${({ color }: ButtonProps) => {
    return color ? `${color} !important` : theme.base;
  }};
  font-size: ${({ fontsize }: ButtonProps) => {
    return fontsize && fontsize;
  }};
  font-weight: ${({ bold }: ButtonProps) => {
    return bold && "bold";
  }};
  min-width: ${({ minwidth }: ButtonProps) => {
    return minwidth ? `${minwidth}px` : "auto";
  }};
  width: ${({ width }: ButtonProps) => {
    return width ? `${width}` : "auto";
  }};
  min-height: ${({ minheight }: ButtonProps) => {
    return minheight ? `${minheight}px` : "auto";
  }};
`;

export const ButtonComponent: React.FC<ButtonProps> = ({
  children,
  htmlType,
  onClick,
  ...rest
}) => {
  return (
    <Wrapper {...rest}>
      <StyledButton onClick={onClick} htmlType={htmlType} {...rest}>
        {children}
      </StyledButton>
    </Wrapper>
  );
};
