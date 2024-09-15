import { createGlobalTheme, fontFace } from "@vanilla-extract/css";

const pretendardRegular = fontFace({
  src: "url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff')",
  fontWeight: 400,
  fontStyle: "normal",
});
const pyeongChangBold = fontFace({
  src: "url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2206-02@1.0/PyeongChangPeace-Bold.woff2') format('woff2');",
  fontWeight: 700,
  fontStyle: "nomal",
});
const pyeongChangLight = fontFace({
  src: "url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2206-02@1.0/PyeongChangPeace-Light.woff2') format('woff2');",
  fontWeight: 300,
  fontStyle: "nomal",
});

export const vars = createGlobalTheme("#root", {
  color: {
    blue1: "#CFCECE",
    blue2: "#029FD7",
    blue3: "#C9CEE1",
    green1: "#04D1C3",
    green2: "#6AE5AE",
    green3: "#B1F492",
    white: "#FFFFFF",
  },
  font: {
    pretendardRegular,
    pyeongChangBold,
    pyeongChangLight,
  },
});
