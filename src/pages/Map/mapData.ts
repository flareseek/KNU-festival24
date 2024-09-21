export const PLACE = ["60주년기념관", "함인섭광장", "대운동장", "미래광장"] as const;
export type Place = (typeof PLACE)[number];

export const PLACE_INFO = {
  "60주년기념관":
    "60주년 기념관에는 주점과 10개의 푸드트럭이 위치해 있습니다.\n테이블 위치는 1, 2, 3 구역입니다.\n입장은 선착순으로 이루어 집니다. 신분증을 꼭 지참해주세요.\n주점 운영시간 16:00 ~ 1:00",
  함인섭광장: "-",
  대운동장: "-",
  미래광장: "-",
};
