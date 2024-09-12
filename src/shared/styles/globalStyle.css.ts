import { globalStyle } from "@vanilla-extract/css";

import backgroundImg from "../../assets/background.png";
import { vars } from "./vars.css";

globalStyle("body", {
  position: "relative",
  margin: 0,
  padding: 0,
  backgroundImage: `url(${backgroundImg})`, // 배경 이미지 경로
  backgroundSize: "100% auto",
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
