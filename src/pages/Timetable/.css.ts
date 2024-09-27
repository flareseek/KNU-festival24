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

import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "../../shared/styles/vars.css.ts";

export const section = style({
  padding: "20px",
  fontFamily: vars.font.pretendardRegular,
  margin: "0 auto",
  "@media": {
    "screen and (min-width: 769px)": {
      maxWidth: "50vw",
    },
    "screen and (max-width: 768px)": {
      padding: "10px",
      maxWidth: "none",
    },
  },
});

export const dayFilter = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
});

const baseFilterButton = style({
  flexGrow: 1,
  position: "relative",
  padding: "10px 15px",
  margin: "0 5px 10px 0",
  border: "none",
  borderRadius: "20px",
  cursor: "pointer",
  transition: "all 0.3s ease",
  overflow: "hidden",

  "::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    transition: "background-color 0.3s ease",
    zIndex: -1,
  },

  "@media": {
    "screen and (max-width: 768px)": {
      padding: "8px 12px",
      margin: "0 3px 8px 0",
    },
  },
});

export const filterButton = styleVariants({
  default: [
    baseFilterButton,
    {
      color: vars.color.white,

      ":hover::before": {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
      },
    },
  ],
  active: [
    baseFilterButton,
    {
      backgroundImage: "linear-gradient(to top left, #04D1C3, #009efd, #FFFFFF)",
      fontWeight: "bold",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent",

      "::before": {
        backgroundColor: "rgba(255, 255, 255, 0.5)",
      },

      ":hover::before": {
        backgroundColor: "rgba(255, 255, 255, 0.4)",
      },
    },
  ],
});

export const timeTableItem = style({
  backgroundColor: vars.color.white,
  opacity: 0.7,
  borderColor: vars.color.blue3,
  borderRadius: "8px",
  padding: "15px",
  marginBottom: "15px",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  "@media": {
    "screen and (max-width: 768px)": {
      padding: "10px",
      marginBottom: "10px",
    },
  },
});

export const timeTableHighlight = style({
  opacity: 1,
  border: "2px solid",
  borderColor: vars.color.green3,
});

export const timeTableTitle = style({
  fontSize: "1.3rem",
  fontWeight: "bold",
  marginBottom: "10px",
  fontFamily: vars.font.pyeongChangBold,
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "1.3rem",
      marginBottom: "8px",
    },
  },
});

export const timeTableDescription = style({
  fontSize: "0.9rem",
  color: "#6c757d",
  marginBottom: "20px",
  fontFamily: vars.font.pretendardRegular,
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "0.8rem",
    },
  },
});

export const timeTableLink = style({
  color: vars.color.blue2,
  textDecoration: "none",
  marginLeft: "5px",
  fontFamily: vars.font.pretendardRegular,
});

export const timeTableTime = style({
  fontSize: "0.9rem",
  fontWeight: "bold",
  color: vars.color.blue1,
  fontFamily: vars.font.pretendardRegular,
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "1rem",
    },
  },
});

export const artistInfoContainer = style({
  marginTop: "15px",
  "@media": {
    "screen and (max-width: 768px)": {
      marginTop: "10px",
    },
  },
});

export const artistInfoTitle = style({
  fontSize: "1rem",
  fontWeight: "bold",
  marginBottom: "10px",
  fontFamily: vars.font.pyeongChangBold,
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "0.9rem",
      marginBottom: "8px",
    },
  },
});

export const artistItem = style({
  display: "flex",
  alignItems: "center",
  alignContent: "center",
  marginBottom: "10px",
  "@media": {
    "screen and (max-width: 768px)": {
      marginBottom: "8px",
    },
  },
});

export const artistImage = style({
  width: "100px",
  height: "100px",
  marginRight: "10px",
  objectFit: "cover",

  "@media": {
    "screen and (max-width: 768px)": {
      width: "150px",
      height: "150px",
    },
  },
});

export const artistName = style({
  fontSize: "1.7rem",
  fontFamily: vars.font.pyeongChangLight,
  wordBreak: "keep-all",
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "1.7rem",
    },
  },
});

export const currentIndicator = style({
  backgroundColor: vars.color.blue1,
  color: vars.color.white,
  padding: "2px 8px",
  borderRadius: "4px",
  display: "inline-block",
  marginTop: "8px",
  fontFamily: vars.font.pretendardRegular,
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "0.8rem",
    },
  },
});

export const timeSeparator = style({
  margin: "16px 0",
  border: "none",
  borderTop: "1px dashed #d9d9d9",
  "@media": {
    "screen and (max-width: 768px)": {
      margin: "12px 0",
    },
  },
});
