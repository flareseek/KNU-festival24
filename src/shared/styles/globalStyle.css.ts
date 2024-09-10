import { globalStyle } from "@vanilla-extract/css";
import { vars } from "./vars.css";

// body에 글로벌 스타일 적용
globalStyle("body", {
  position: "relative",
  margin: 0,
  padding: 0,
  backgroundImage: 'url("src/assets/background.png")', // 배경 이미지 경로
  backgroundSize: "cover", // 배경 이미지를 화면 전체에 맞춤
  backgroundPosition: "center", // 이미지를 화면 중앙에 위치
  backgroundRepeat: "no-repeat", // 이미지를 반복하지 않도록 설정
  width: "100%",
  fontFamily: vars.font.pretendardRegular,
});

globalStyle("ol, ul", {
  listStyle: "none",
});

globalStyle("button", {
  background: "none",
  color: "inherit",
  border: "none",
  padding: 0,
  font: "inherit",
  cursor: "pointer",
  outline: "inherit",
});

globalStyle("input, textarea, select", {
  background: "var(--side-c)",
  color: "inherit",
  border: "none",
  padding: "5px",
  font: "inherit",
  cursor: "pointer",
  outline: "inherit",
  resize: "none",
  colorScheme: "dark",
  borderRadius: "5px",
});

globalStyle(
  `html,
  body,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video`,
  {
    margin: 0,
    padding: 0,
    border: 0,
    fontSize: "100%",
    font: "inherit",
    verticalAlign: "baseline",
  },
);
