/**
 * Interface for BoothFoodtruck
 * @param {number} id
 * @param {string} title
 * @param {string} imgURL
 * @param {string} hours - 영업 시간 (ex. 11:00 ~ 18:00)
 * @param {string[]} keyword - 주 컨텐츠 키워드 (ex. 부스 태그, 포즈 이벤트)
 * @param {string} description - 리스트에 짧게 들어갈 설명
 * @param {string} description2 - 상세 페이지에 길게 들어갈 설명
 * @param {object} contents - 상세 페이지에 들어갈 내용들(ex. h3: 메인요리, list: 리스트)
 */
export interface BoothFoodtuck {
  id: number;
  title: string;
  imgURL: string;
  hours: string;
  keyword: string[];
  description: string;
  description2: string;
  contents: {
    h3: string;
    list: {
      title: string;
      price: number;
      imgURL?: string;
    }[];
  }[];
}

// --- BOOTH ---

export const BOOTH_PLACE = ["미래광장", "대운동장", "함인섭광장"];

export interface Booth extends BoothFoodtuck {
  place: (typeof BOOTH_PLACE)[number];
  category: keyof typeof booths_icon;
}

export const booths_icon = {
  식음료: "food_bank",
  놀거리: "local_activity",
  쇼핑: "shopping_bag",
};

// --- FOODTRUCK ---

export const FOODTRUCKS_PLACE = ["미래광장", "대운동장", "함인섭광장", "60주년기념관"];

export interface FoodTruck extends BoothFoodtuck {
  place: (typeof FOODTRUCKS_PLACE)[number];
  category: keyof typeof foodtruck_icon;
}

export const foodtruck_icon = {
  한식: "food_bank",
  일식: "food_bank",
  아시안: "food_bank",
  분식: "food_bank",
  디저트: "food_bank",
};
