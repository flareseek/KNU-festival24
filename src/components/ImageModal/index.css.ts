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

import { style } from "@vanilla-extract/css";

export const container = style({
  position: "relative",
  width: "100%",
  height: "100%",
});
export const zoomInBtn = style({
  position: "absolute",
  top: "5px",
  left: "5px",
  cursor: "pointer",
  padding: "3px",
  borderRadius: "5px",
  backgroundColor: "rgba(255, 255, 255, 0.3)",
});
export const image = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

export const placeBtn = style({
  position: "absolute",
  top: "5px",
  right: "5px",
  cursor: "pointer",
  padding: "3px",
  borderRadius: "5px",
  backgroundColor: "rgba(255, 255, 255, 0.3)",
});
