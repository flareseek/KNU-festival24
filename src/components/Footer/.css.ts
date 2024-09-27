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

const breakpoints = {
  tablet: 768,
  desktop: 1024,
};

export const footer = style({
  color: "#fff",
  marginTop: "20px",
  marginBottom: "20px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  "@media": {
    [`screen and (min-width: ${breakpoints.tablet}px)`]: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
    },
  },
});

export const footerContent = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  alignContent: "center",
  marginBottom: "15px",
  "@media": {
    [`screen and (min-width: ${breakpoints.tablet}px)`]: {
      flexDirection: "row",

      marginBottom: 0,
    },
  },
});

export const footerLogo = style({
  width: "60vw",
  height: "auto",
  maxWidth: "200px",
  marginBottom: "15px",
  "@media": {
    [`screen and (min-width: ${breakpoints.tablet}px)`]: {
      width: "20vw",
      maxWidth: "150px",
      marginBottom: 0,
    },
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      width: "15vw",
      maxWidth: "180px",
    },
  },
});

export const inquiryLink = style({
  color: "#fff",
  textDecoration: "none",
  fontSize: "0.9rem",
  padding: "5px 10px",
  marginLeft: "8px",
  border: "1px solid #fff",
  borderRadius: "5px",
  transition: "background-color 0.3s, color 0.3s",
  ":hover": {
    backgroundColor: "#fff",
    color: "#000",
  },
});

export const footerText = style({
  fontSize: "0.7rem",
  color: "#fff",
  margin: "0",
  textAlign: "center",
  lineHeight: "1.4",
  "@media": {
    [`screen and (min-width: ${breakpoints.tablet}px)`]: {
      fontSize: "0.8rem",
      textAlign: "right",
    },
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      fontSize: "0.9rem",
    },
  },
});
