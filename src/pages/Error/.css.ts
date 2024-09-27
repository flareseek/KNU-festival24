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

export const wrapContainer = style({
  fontFamily: "'Arial', sans-serif",
  height: "80vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const lottieStyle = style({
  width: "90%",
  maxWidth: "500px",
});

export const textContainer = style({
  textAlign: "center",
  color: "#333",
});

export const h1Style = style({
  fontSize: "2.5em",
  marginBottom: "10px",
  fontWeight: "bold",
  color: "#0c5460" /* 어두운 청록색으로 */,
});

export const p1Style = style({
  fontSize: "1.4em",
  color: "#0c5460" /* 텍스트도 일관성 있게 청록색 */,
  marginBottom: "30px",
});

export const backLink = style({
  fontSize: "1.2em",
  color: "white",
  backgroundColor: "#17a2b8",
  padding: "10px 20px",
  textDecoration: "none",
  borderRadius: "5px",
  transition: "background-color 0.3s ease",
  ":hover": {
    backgroundColor: "#138496",
  },
});
