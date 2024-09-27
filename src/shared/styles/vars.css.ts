import { createGlobalTheme, fontFace } from "@vanilla-extract/css";
import boldFont from "../../assets/fonts/subset-PyeongChangPeace-Bold.woff2";
import lightFont from "../../assets/fonts/subset-PyeongChangPeace-Light.woff2";

const pyeongChangBold = fontFace({
  src: `url('${boldFont}') format('woff2');`,
  fontWeight: 700,
  fontStyle: "nomal",
});
const pyeongChangLight = fontFace({
  src: `url('${lightFont}') format('woff2');`,
  fontWeight: 300,
  fontStyle: "nomal",
});

export const vars = createGlobalTheme("#root", {
  color: {
    blue1: "#0781CD",
    blue2: "#029FD7",
    blue3: "#C9CEE1",
    green1: "#04D1C3",
    green2: "#6AE5AE",
    green3: "#B1F492",
    white: "#FFFFFF",
  },
  font: {
    pretendardRegular: "pretendard, sans-serif", // for debug: ,Courier New", // <-독특함
    pyeongChangBold,
    pyeongChangLight,
  },
});
