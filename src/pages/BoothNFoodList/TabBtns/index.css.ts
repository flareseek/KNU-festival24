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

export const tabsContainer = style({
  borderRadius: "10px",
  backgroundColor: "rgba(255, 255, 255, 0.5)",
});
export const tabContainer = style({
  display: "flex",
});
export const bottomTabContainer = style({
  backgroundColor: vars.color.white,
  borderRadius: "0px 0px 10px 10px",
});

export const tabBtn = style({
  flexGrow: 1,
  fontWeight: "bold",
  fontSize: "17px",
  height: "42px",
});
export const topBtns = style({
  fontSize: "14px",
  borderRadius: "10px 10px 0px 0px",
});
export const bottomBtns = style({
  borderRadius: "8px",
  width: "50%",
  margin: "3px",
});
export const activeTopBtn = style({
  backgroundColor: "#fff",
  color: vars.color.blue1,
});
export const activeBottomBtn = style({
  color: "#2c2c2c",
});
