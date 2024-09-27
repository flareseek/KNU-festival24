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

export const container = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  marginTop: 10,
  marginBottom: 10,
  "@media": {
    "(min-width: 1000px)": {
      width: "100%",
    },
  },
});
export const top = style({
  width: "90%",
  "@media": {
    "(min-width: 375px)": {
      width: "80%",
    },
    "(min-width: 1000px)": {
      width: "50%",
    },
    "(min-height: 1000px)": {
      width: "80%",
    },
  },
});
export const linkContainer = style({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
});
export const insta = style({
  width: 40,
  height: 40,
  marginRight: 10,
  "@media": {
    "(min-width: 375px)": {
      width: 30,
      height: 30,
    },
    "(min-width: 1000px)": {
      width: 60,
      height: 60,
    },
    "(min-height: 1000px)": {
      width: 50,
      height: 50,
    },
  },
});
export const website = style({
  width: 40,
  height: 40,
  marginLeft: 10,
  "@media": {
    "(min-width: 375px)": {
      width: 30,
      height: 30,
    },
    "(min-width: 1000px)": {
      width: 60,
      height: 60,
    },
    "(min-height: 1000px)": {
      width: 50,
      height: 50,
    },
  },
});

export const main = style({
  width: "80%",
  marginTop: 20,
  "@media": {
    "(min-width: 1000px)": {
      width: "40%",
    },
  },
});
