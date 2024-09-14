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
      <img src={imgURL} alt={title} className={styles.coverImg} />
      <div>{category}</div>
      <div>
        <div>
          {keyword.map((value, index) => (
            <span key={index}>{value}</span>
          ))}
        </div>
        <div>
          <span className="material-symbols-outlined">schedule</span>
          <span>{hours}</span>
        </div>
      </div>
    </div>
  );
}
