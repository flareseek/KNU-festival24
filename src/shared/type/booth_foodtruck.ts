export const PLACE = ['60주년기념관', '미래광장', '대운동장', '함인섭광장'] as const;

export interface BoothFoodtuck {
    id: number;
    title: string;
    place: typeof PLACE[number];
    imgURL: string;
    description: string;
    description2: string;
}