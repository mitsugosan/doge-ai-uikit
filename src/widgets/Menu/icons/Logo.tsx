import React from "react";
// import styled from "styled-components";
import { SvgProps } from "../../../components/Svg/types";

// const Text = styled.text`
//   font-size: 26.26px;
//   font-family: GoodTimingRg-Bold, Good Timing !important;
//   font-weight: 700;
// `;
// const Tspan = styled.tspan`
//   font-size: 26.26px;
//   font-family: GoodTimingRg-Bold, Good Timing !important;
//   font-weight: 700;
//   letter-spacing: 0em;
// `;

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark }) => {
  // const textColor = isDark ? "#FFFFFF" : "#432918";
  const image = isDark
    ? "https://cdn.discordapp.com/attachments/847731075640066048/869477114875895818/Glass_Wine_Banner_white.png"
    : "https://cdn.discordapp.com/attachments/847731075640066048/869389870177591296/Glass_Wine_Banner.png";
  return <img width="220px" height="50px" src={image} alt="logo" />;
};

export default Logo;
