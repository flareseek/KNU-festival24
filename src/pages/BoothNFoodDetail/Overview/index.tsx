import ImageModal from "../../../components/ImageModal/index.tsx";
import { BoothPlaceType } from "../../../shared/types/asset_types.ts";
import * as styles from "./index.css.ts";

type OverviewProps = {
  title: string;
  date: number[];
  imgURL: string;
  order: number;
  place: BoothPlaceType;
};

export default function Overview({ title, date, imgURL, order, place }: OverviewProps) {
  return (
    <div>
      <div className={styles.imgContainer}>
        <ImageModal src={imgURL} alt={title} />
        <span className={styles.title}>{title}</span>
        <div className={styles.bottomContainer}>
          <div></div>
          <div className={styles.hoursContainer}>
            <div className={styles.hoursLabel}>
              <span className="material-symbols-outlined">schedule</span>
              <span>
                {title === "주점"
                  ? place === "미래광장"
                    ? "18:00 ~ 00:00"
                    : "18:00 ~ 01:00"
                  : "11:00 ~ 17:00"}
              </span>
            </div>
            <div className={styles.hoursLabel}>
              <span className="material-symbols-outlined">date_range</span>
              <span>{date.join(", ")} 일</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.place}>
        {place} {order}번 부스
      </div>
    </div>
  );
}
