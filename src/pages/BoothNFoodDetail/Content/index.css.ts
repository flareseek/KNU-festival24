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
import { vars } from "../../../shared/styles/vars.css";

export const container = style({
  padding: "10px 0px",
  borderTop: "1px dashed white",
});
export const cards = style({
  background: "rgba(255, 255, 255, 0.50)",
  padding: "10px 22px",
});

export const h3 = style({
  display: "inline-block",
  fontSize: "20px",
  color: "white",
  fontFamily: vars.font.pyeongChangLight,
  background: vars.color.blue2,
  borderRadius: "10px",
  border: "1px solid white",
  padding: "4px 6px",
  marginBottom: "10px",
  marginLeft: "10px",
});

export const card = style({
  borderRadius: "10px",
  height: "70px",
  padding: "7px",
  marginBottom: "10px",
  background: "white",
  display: "flex",
  justifyContent: "space-between",
  fontSize: "17px",
});
export const cardInfo = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "5px",
});
export const cardHeader = style({
  fontWeight: "bold",
});
export const cardImg = style({
  aspectRatio: "1 / 1",
  height: "100%",
  borderRadius: "10px",
  objectFit: "cover",
});
