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

const mobileBreakpoint = "1000px";

export const layout = style({
  "@media": {
    [`(min-width: ${mobileBreakpoint})`]: {
      display: "grid",
      gap: "20px",
      gridTemplateColumns: "1fr 1fr",
    },
  },
});

export const descriptionContainer = style({
  position: "relative",
  zIndex: 0,
  margin: "30px 20px",
});

export const description = style({
  fontSize: "15px",
  padding: "16px",
  background: "rgba(255, 255, 255, 0.70)",
  borderRadius: "10px",
});
export const sparkles = style({
  filter: "drop-shadow(0 5px 5px #fff)",
  position: "absolute",
});
export const sparkles1 = style({
  top: -10,
  left: 0,
});
export const sparkles2 = style({
  bottom: -10,
  right: 5,
});
