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

import { createGlobalTheme, fontFace } from "@vanilla-extract/css";
import boldFont from "../../assets/fonts/subset-PyeongChangPeace-Bold.woff2";
import lightFont from "../../assets/fonts/subset-PyeongChangPeace-Light.woff2";

const pyeongChangBold = fontFace({
  src: `url('${boldFont}') format('woff2');`,
  fontWeight: 700,
  fontStyle: "nomal",
});
const pyeongChangLight = fontFace({
  src: `url('${lightFont}') format('woff2');`,
  fontWeight: 300,
  fontStyle: "nomal",
});

export const vars = createGlobalTheme("#root", {
  color: {
    blue1: "#0781CD",
    blue2: "#029FD7",
    blue3: "#C9CEE1",
    green1: "#04D1C3",
    green2: "#6AE5AE",
    green3: "#B1F492",
    white: "#FFFFFF",
  },
  font: {
    pretendardRegular: "pretendard, sans-serif", // for debug: ,Courier New", // <-독특함
    pyeongChangBold,
    pyeongChangLight,
  },
});
