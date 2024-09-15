import { Booth } from "../shared/types/booth_foodtruck";

const BOOTHS: Readonly<Booth[]> = [
  {
    id: 1,
    title: "올해도 돌아온 떡삼",
    place: "미래광장",
    category: "식음료",
    imgURL:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/450px-Cat_November_2010-1a.jpg",
    description: "떡꼬치삼겹살 판매",
    description2: "오직 강원대 대동제에서 합리적인 가격에 만나보세요",
    hours: "11:00 ~ 16:00",
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
    place: "미래광장",
    category: "식음료",
    imgURL: "",
    description: "떡꼬치삼겹살 판매",
    description2: "오직 강원대 대동제에서 합리적인 가격에 만나보세요",
    hours: "11:00 ~ 16:00",
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
      {
        h3: "음료",
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
    id: 3,
    title: "올해도 돌아온 떡삼",
    place: "함인섭광장",
    category: "쇼핑",
    imgURL: "",
    description: "떡꼬치삼겹살 판매",
    description2: "오직 강원대 대동제에서 합리적인 가격에 만나보세요",
    hours: "11:00 ~ 16:00",
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

export default BOOTHS;
