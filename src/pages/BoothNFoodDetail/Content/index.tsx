import { BoothFoodtuck } from "../../../shared/types/booth_foodtruck";
import * as styles from "./index.css";

type ContentProps = {
  content: BoothFoodtuck["contents"][0];
};

export default function Content({ content }: ContentProps) {
  return (
    <div className={styles.container}>
      <h3 className={styles.h3}>{content.h3}</h3>
      <div className={styles.cards}>
        {content.list.map((value, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardInfo}>
              <div className={styles.cardHeader}>{value.title}</div>
              <div>{value.price ?? "-"} 원</div>
            </div>
            <div>
              {value.imgURL ? (
                <img className={styles.cardImg} src={value.imgURL} alt={value.title} />
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
