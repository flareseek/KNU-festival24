import ImageModal from "../../../components/ImageModal/index.tsx";
import * as styles from "./index.css.ts";

type OverviewProps = {
  title: string;
  imgURL: string;
};

export default function Overview({ title, imgURL }: OverviewProps) {
  return (
    <div className={styles.container}>
      <ImageModal src={imgURL} alt={title} />
      <div className={styles.bottomContainer}>
        <div>
          <span className={styles.keywordLabel}>{title}</span>
        </div>
        <div className={styles.hoursLabel}>
          <span className="material-symbols-outlined">schedule</span>
          <span>"11:00 ~ 17:00"</span>
        </div>
      </div>
    </div>
  );
}
