import { FoodTruck } from "../shared/types/booth_foodtruck";

const FOODTRUCKS: Readonly<FoodTruck[]> = [
  {
    id: 1,
    title: "올해도 돌아온 떡삼",
    category: "한식",
    imgURL: "",
    description: "떡꼬치삼겹살 판매",
    description2: "오직 강원대 대동제에서 합리적인 가격에 만나보세요",
    hours: "11:00 ~ 16:00",
    place: "대운동장",
    keyword: ["핫 닭꼬치", "주요음식2"],
    contents: [
      {
        h3: "메인요리",
        list: [
          {
            title: "음식 이름",
            price: 0,
          },
          {
            title: "음식 이름",
            price: 0,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "올해도 돌아온 떡삼",
    category: "한식",
    imgURL: "",
    description: "떡꼬치삼겹살 판매",
    description2: "오직 강원대 대동제에서 합리적인 가격에 만나보세요",
    hours: "11:00 ~ 16:00",
    place: "60주년기념관",
    keyword: ["핫 닭꼬치", "주요음식2"],
    contents: [
      {
        h3: "메인요리",
        list: [
          {
            title: "음식 이름",
            price: 0,
          },
          {
            title: "음식 이름",
            price: 0,
          },
        ],
      },
    ],
  },
];

export default FOODTRUCKS;
