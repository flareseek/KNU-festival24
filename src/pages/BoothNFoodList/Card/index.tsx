import { Link } from "react-router-dom";

import { booths_icon, foodtruck_icon } from "../../../shared/types/booth_foodtruck";
import * as styles from "./index.css.ts";

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
    <Link to={`/${type}/${id}`} className={styles.container}>
      <img src={imgURL} alt={`${title} 부스/푸드트럭 이미지`} className={styles.image} />
      <div className={styles.contentContainer}>
        <div className={styles.contentDiv13}>
          <h3 className={styles.title}>{title}</h3>
          <span className={`material-symbols-outlined ${styles.icon}`}>{icon_map[category]}</span>
        </div>
        <div className={styles.contentDiv2}>
          <p className={styles.category}>{category}</p>
          <p>{description}</p>
        </div>
        <div className={styles.contentDiv13}>
          <div />
          <div className={styles.detailBtn}>
            <span className={`material-symbols-outlined ${styles.detailBtnIcon}`}>info</span>
            <span>더보기</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
