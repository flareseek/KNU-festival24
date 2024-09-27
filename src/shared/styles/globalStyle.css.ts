/**
 * @license
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 *
 * All contributors who participated in development before September 26, 2024, retain full copyright over their contributions.
 * These contributors are granted the right, under a Contributor License Agreement (CLA), to use, modify, and distribute their contributions
 * under additional or alternative licensing terms of their choosing, while the project as a whole remains licensed under the MPL 2.0.
 *
 * Any contributions made after September 26, 2024, are subject to the terms of the MPL 2.0 and are licensed accordingly.
 */

import { globalStyle } from "@vanilla-extract/css";
import { noticeDetail } from "../../pages/Notice/notice.css";
import { vars } from "./vars.css";

globalStyle("body", {
  position: "relative",
  background:
    "linear-gradient(180deg, #4FD1C5 0%, #56C5CF 16.67%, #5DB9D9 33.33%, #63ADE3 50%, #63A1ED 66.7%, #4FD1C5 100%)",
  backgroundSize: "1000% 2400px",
  backgroundRepeat: "repeat-y",
  minHeight: "100vh",
  width: "100%",
  paddingTop: "3.75rem",
  overscrollBehaviorY: "none",
  "@media": {
    "(min-height: 1000px)": {
      overscrollBehaviorX: "none",
    },
  },
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

// globalStyle을 이용한 전역 스타일 적용
globalStyle(`${noticeDetail} a`, {
  width: "auto",
  fontSize: 15,
  fontWeight: 900,
  color: vars.color.blue1,
  borderBottom: `solid 1px ${vars.color.blue1}`,
  "@media": {
    "(min-height: 1000px)": {
      fontSize: "25px",
    },
  },
});
