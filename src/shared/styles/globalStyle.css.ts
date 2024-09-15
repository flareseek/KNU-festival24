import { globalStyle } from "@vanilla-extract/css";

import backgroundImg from "../../assets/background.png";
import { vars } from "./vars.css";

globalStyle("body", {
  position: "relative",
  backgroundImage: `url(${backgroundImg})`, // 배경 이미지 경로
  backgroundSize: "100% auto",
});
globalStyle("#root", {
  fontFamily: vars.font.pretendardRegular,
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
  color: "inherit",
  border: "none",
  font: "inherit",
  cursor: "pointer",
  outline: "inherit",
  resize: "none",
});

globalStyle("::-webkit-scrollbar", {
  width: "0px",
  height: "0px",
});
globalStyle("a", {
  color: "inherit",
  textDecoration: "none",
});
