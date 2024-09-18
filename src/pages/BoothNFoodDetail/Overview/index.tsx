import ImageModal from "../../../components/ImageModal/index.tsx";
import * as styles from "./index.css.ts";

type OverviewProps = {
  title: string;
  category: string;
  imgURL: string;
  keyword: string[];
  hours: string;
};

export default function Overview({ title, category, imgURL, keyword, hours }: OverviewProps) {
  return (
    <div className={styles.container}>
      <ImageModal src={imgURL} alt={title} />
      <div className={styles.category}>{category}</div>
      <div className={styles.bottomContainer}>
        <div>
          {keyword.map((value, index) => (
            <span key={index} className={styles.keywordLabel}>
              {value}
            </span>
          ))}
        </div>
        <div className={styles.hoursLabel}>
          <span className="material-symbols-outlined">schedule</span>
          <span>{hours}</span>
        </div>
      </div>
    </div>
  );
}
