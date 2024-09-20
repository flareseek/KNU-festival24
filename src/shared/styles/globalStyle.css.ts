import { globalStyle } from "@vanilla-extract/css";

import { vars } from "./vars.css";

globalStyle("body", {
  position: "relative",
  background:
    "linear-gradient(180deg, #4FD1C5 0%, #56C5CF 16.67%, #5DB9D9 33.33%, #63ADE3 50%, #63A1ED 66.7%, #4FD1C5 100%)",
  backgroundSize: "100% 2400px",
  backgroundRepeat: "repeat-y",
  minHeight: "100vh",
  width: "100%",
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
