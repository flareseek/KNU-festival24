import { BoothFoodtuck } from "../shared/type/booth_foodtruck";

interface FoodTruck extends BoothFoodtuck {
    category: keyof typeof icon_map;
}

export const icon_map = {
    한식: "food_bank",
    일식: "food_bank",
    아시안: "food_bank",
    분식: "food_bank",
    디저트: "food_bank",
}

const FOODTRUCKS: FoodTruck[] = [
    {
        id: 1,
        title: "올해도 돌아온 떡삼",
        category: "한식",
        imgURL: "",
        description: "떡꼬치삼겹살 판매",
        description2: "오직 강원대 대동제에서 합리적인 가격에 만나보세요",
        place: "대운동장"
    },
    {
        id: 2,
        title: "올해도 돌아온 떡삼",
        category: "한식",
        imgURL: "",
        description: "떡꼬치삼겹살 판매",
        description2: "오직 강원대 대동제에서 합리적인 가격에 만나보세요",
        place: "60주년기념관"
    }
]

export default FOODTRUCKS;