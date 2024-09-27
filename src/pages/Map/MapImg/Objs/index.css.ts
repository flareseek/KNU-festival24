/*
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 *
 * All contributors who participated in development before September 26, 2024, retain full copyright over their contributions.
 * These contributors are granted the right, under a Contributor License Agreement (CLA), to use, modify, and distribute their contributions
 * under additional or alternative licensing terms of their choosing, while the project as a whole remains licensed under the MPL 2.0.
 *
 * Any contributions made after September 26, 2024, are subject to the terms of the MPL 2.0 and are licensed accordingly.
 */

import { keyframes, style } from "@vanilla-extract/css";
import { vars } from "../../../../shared/styles/vars.css";

export const movDiv = style({
  position: "absolute",
  zIndex: 1,
});
const floatingDrop = keyframes({
  "0%": {
    filter: `drop-shadow(0px 4px 4px ${vars.color.green1})`,
  },
  "100%": {
    filter: `drop-shadow(0px 0px 3px ${vars.color.green1})`,
  },
});
export const imgDrop = style({
  animation: `3s ease 0s infinite alternate ${floatingDrop}`,
});
export const container = style({
  position: "relative",
  width: 0,
  height: 0,
});

export const labelBtn = style({
  display: "block",
  background: vars.color.white,
  boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
  width: "fit-content",
  margin: "0 auto",
  padding: "3px 10px",
  borderRadius: "10px",
});
export const labelBtnText = style({
  fontFamily: vars.font.pyeongChangBold,
  fontSize: "14px",
  whiteSpace: "nowrap",
  background: `linear-gradient(90deg, ${vars.color.green3}, ${vars.color.green1}, ${vars.color.blue2})`,
  WebkitBackgroundClip: "text",
  color: "transparent",
});
