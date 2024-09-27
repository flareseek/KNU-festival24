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

import {
  BOOTH_HAMINSEOP_LIST,
  BOOTH_MEMORIAL60_LIST,
  BOOTH_MIRAE_LIST,
  BOOTH_PLAYGROUND_BOTTOM_PINK_LINE_LIST,
  BOOTH_PLAYGROUND_MIDDLE_YELLOW_LINE_LIST,
  BOOTH_PLAYGROUND_TOP_GREEN_LINE_LIST,
} from "../../resources/booth_list";
import {
  FOODTRUCK_60TH_ANNIV_LIST,
  FOODTRUCK_FUTURE_LIST,
  FOODTRUCK_HAMINSEOP_LIST,
} from "../../resources/foodtruck_list";

export const places = ["60주년기념관", "대운동장", "함인섭광장", "미래광장"] as const;
export const types = {
  "60주년기념관": ["부스", "푸드트럭"],
  대운동장: ["부스(분홍)", "부스(노랑)", "부스(파랑)"],
  함인섭광장: ["부스", "푸드트럭"],
  미래광장: ["부스", "푸드트럭"],
};
const colors = ["#d196ed", "#b1f492", "#b8e5e0", "#f2ebc1"]; // pink, green, blue, yellow

export const dataMappping = (place: (typeof places)[number], type: string) => {
  switch (place) {
    case "60주년기념관":
      return type === "부스"
        ? { data: BOOTH_MEMORIAL60_LIST, color: colors[3] }
        : { data: FOODTRUCK_60TH_ANNIV_LIST, color: colors[0] };
    case "대운동장":
      return type === "부스(분홍)"
        ? { data: BOOTH_PLAYGROUND_BOTTOM_PINK_LINE_LIST, color: colors[0] }
        : type === "부스(노랑)"
          ? { data: BOOTH_PLAYGROUND_MIDDLE_YELLOW_LINE_LIST, color: colors[3] }
          : { data: BOOTH_PLAYGROUND_TOP_GREEN_LINE_LIST, color: colors[2] };
    case "함인섭광장":
      return type === "부스"
        ? { data: BOOTH_HAMINSEOP_LIST, color: colors[1] }
        : { data: FOODTRUCK_HAMINSEOP_LIST, color: colors[0] };
    case "미래광장":
      return type === "부스"
        ? { data: BOOTH_MIRAE_LIST, color: colors[1] }
        : { data: FOODTRUCK_FUTURE_LIST, color: colors[0] };
  }
};
