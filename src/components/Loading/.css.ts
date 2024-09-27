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

export const containerStyle = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  fontFamily: "Arial, sans-serif",
});

export const lottieStyle = style({
  width: "80%",
  height: "auto",
});

export const textStyle = style({
  marginTop: "20px",
  fontSize: "18px",
  fontWeight: "bold",
  color: "#333",
  textAlign: "center",
});

export const responsiveTextStyle = style({
  "@media": {
    "screen and (max-width: 600px)": {
      fontSize: "16px",
    },
    "screen and (min-width: 601px) and (max-width: 1200px)": {
      fontSize: "17px",
    },
    "screen and (min-width: 1201px)": {
      fontSize: "18px",
    },
  },
});
