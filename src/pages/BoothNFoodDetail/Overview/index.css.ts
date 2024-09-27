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

import { style } from "@vanilla-extract/css";
import { vars } from "../../../shared/styles/vars.css.ts";

export const imgContainer = style({
  position: "relative",
  width: "100%",
  aspectRatio: "16 / 9",
});
export const bottomContainer = style({
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  bottom: "0",
  width: "calc(100% - 20px)",
  padding: "10px",
  background: "linear-gradient(rgba(0, 0, 0, 0), rgba(255, 255, 255, 180))",
});

export const title = style({
  position: "absolute",
  top: "0",
  right: "0",
  margin: "10px",
  padding: "6px",
  fontSize: "17px",
  maxWidth: "70%",
  borderRadius: "10px",
  backgroundColor: "rgba(255, 255, 255, 0.5)",
});
export const coverImg = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});
export const keywordLabel = style({
  fontFamily: vars.font.pyeongChangLight,
  fontSize: "15px",
  background: "rgba(255, 255, 255, 0.50)",
  borderRadius: "10px",
  padding: "4px 8px",
});
export const hoursContainer = style({
  display: "flex",
  gap: "10px",
});
export const hoursLabel = style({
  fontFamily: vars.font.pyeongChangLight,
  fontSize: "12px",
  display: "flex",
  alignItems: "center",
});
export const place = style({
  fontFamily: vars.font.pyeongChangLight,
  fontSize: "12px",
  margin: "5px",
  width: "clac(100%-5px)",
  textAlign: "right",
  color: vars.color.white,
});
