import { Link } from "react-router-dom";

import { booths_icon, foodtruck_icon } from "../../../shared/types/booth_foodtruck";

const icon_map = { ...booths_icon, ...foodtruck_icon };

interface Props {
  id: number;
  title: string;
  description: string;
  type: "booth" | "foodtruck";
  category: keyof typeof icon_map;
  imgURL: string;
}

export default function Card({ id, title, description, category, type, imgURL }: Props) {
  return (
    <Link to={`/booth_foodtruck_list/${type}/${id}`}>
      <img src={imgURL} alt={`${title} 부스/푸드트럭 이미지`} />
      <div>
        <div>
          <h3>{title}</h3>
          <span className="material-symbols-outlined">{icon_map[category]}</span>
        </div>
        <div>
          <p>{category}</p>
          <p>{description}</p>
        </div>
        <div>
          <div>
            <span className="material-symbols-outlined">info</span>
            <span>더보기</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
