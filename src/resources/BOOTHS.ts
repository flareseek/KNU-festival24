interface Booth {
    id: number;
    title: string;
    category: keyof typeof icon_map;
    imgURL: string;
    description: string;
    description2: string;
}

export const icon_map = {
  식음료: "food_bank",
  놀거리: "local_activity",
  쇼핑: "shopping_bag"
}

const BOOTHS: Booth[] = [
    {
        "id": 1,
        "title": "올해도 돌아온 떡삼",
        "category": "식음료",
        "imgURL": "",
        "description": "떡꼬치삼겹살 판매",
        "description2": "오직 강원대 대동제에서 합리적인 가격에 만나보세요"
    },
    {
        "id": 2,
        "title": "올해도 돌아온 떡삼",
        "category": "식음료",
        "imgURL": "",
        "description": "떡꼬치삼겹살 판매",
        "description2": "오직 강원대 대동제에서 합리적인 가격에 만나보세요"
    }
]

export default BOOTHS;