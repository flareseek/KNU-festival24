const invalidImg = new URL("../../assets/data/invalid.png", import.meta.url).href;

export type BoothPlaceType = "대운중앙노랑" | "대운상단초록" | "대운하단분홍" | "함인섭";
export type FoodtruckPlaceType = "60주년기념관" | "미래광장" | "함인섭광장";

export class Asset {
  id: string;
  order: number;
  name: string;
  date: number[] = [23, 24, 25];
  visible: boolean = true;

  constructor({
    id,
    order,
    name,
    visible,
    date = [23, 24, 25],
  }: {
    id: string;
    order: number;
    name: string;
    visible?: boolean;
    date?: number[];
  }) {
    this.id = id;
    this.order = order;
    this.name = name;
    this.visible = visible ?? true;
    this.date = date;
  }
}

export class FoodTruck extends Asset {
  menu: string[];
  place: FoodtruckPlaceType;
  constructor({
    id,
    order,
    name,
    menu,
    place,
    visible,
    date = [23, 24, 25],
  }: {
    id: string;
    order: number;
    name: string;
    menu: string[];
    place: FoodtruckPlaceType;
    visible?: boolean;
    date?: number[];
  }) {
    super({ id, order, name, visible, date });
    this.menu = menu;
    this.place = place;
  }
}

export interface SaleItems {
  item: string;
  price: { min: number | null; max: number | null } | null;
}

export class Booth extends Asset {
  description: string;
  saleItems: SaleItems[];
  place: BoothPlaceType;
  image: string;
  constructor({
    id,
    order,
    name,
    description,
    saleItems,
    place,
    imageName,
    visible,
    date = [23, 24, 25],
  }: {
    id: string;
    order: number;
    name: string;
    description: string;
    saleItems: SaleItems[];
    place: BoothPlaceType;
    imageName?: string;
    visible?: boolean;
    date?: number[];
  }) {
    super({ id, order, name, visible, date });
    this.description = description;
    this.saleItems = saleItems;
    this.place = place;
    this.image = new URL(
      `../../assets/data/booth_image/${place === "함인섭" ? "haminseop" : "playground/" + (place === "대운중앙노랑" ? "middle_yellow_line" : place === "대운상단초록" ? "top_green_line" : "bottom_pink_line")}/${imageName ?? this.id}.jpg`,
      import.meta.url,
    ).href;
    // new URL로 없는 주소 호출시 에러 감지가 안됨...
    // localhost:3000/assets/data/undefined 이런식으로 주소 변환되고
    // 심지어 fetch로 호출해도 response ok로 뜸
    // 그래서 undeifined로 끝날시 invalid 이미지로 대체 하도록 함
    if (this.image.endsWith("undefined")) this.image = invalidImg;
    // 동적 import 할 시에 초기 값이 null이 될때 화면을 뿌려버리면 값이 바뀌어도 렌더링이 안되기 때문에 계속 null 이미로 남겨있음
    // 이를 해결하기 위해 상태관리 라이브러리를 써야되는데 이대로 썼습니다.
  }
}
