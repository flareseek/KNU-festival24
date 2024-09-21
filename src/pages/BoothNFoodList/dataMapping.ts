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
export const dataMappping = (place: (typeof places)[number], type: string) => {
  switch (place) {
    case "60주년기념관":
      return type === "부스" ? BOOTH_MEMORIAL60_LIST : FOODTRUCK_60TH_ANNIV_LIST;
    case "대운동장":
      return type === "부스(분홍)"
        ? BOOTH_PLAYGROUND_BOTTOM_PINK_LINE_LIST
        : type === "부스(노랑)"
          ? BOOTH_PLAYGROUND_MIDDLE_YELLOW_LINE_LIST
          : BOOTH_PLAYGROUND_TOP_GREEN_LINE_LIST;
    case "함인섭광장":
      return type === "부스" ? BOOTH_HAMINSEOP_LIST : FOODTRUCK_HAMINSEOP_LIST;
    case "미래광장":
      return type === "부스" ? BOOTH_MIRAE_LIST : FOODTRUCK_FUTURE_LIST;
  }
};
