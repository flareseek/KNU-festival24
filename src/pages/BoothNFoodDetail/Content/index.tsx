import { SaleItems } from "../../../shared/types/asset_types";
import * as styles from "./index.css";

type ContentProps = {
  content: SaleItems[];
};
// export interface SaleItems {
//   item: string;
//   price: { min: number | null; max: number | null } | null;
// }

export default function Content({ content }: ContentProps) {
  const getPriceString = (price: SaleItems["price"]) => {
    if (!price) return "-";
    if (price.min && price.min === price.max) return `${price.min}`;
    return `${price.min ?? ""} ~ ${price.max ?? ""}`;
  };
  return (
    <div className={styles.container}>
      <h3 className={styles.h3}>판매 상품</h3>
      <div className={styles.cards}>
        {content.map((value, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardInfo}>
              <div className={styles.cardHeader}>{value.item}</div>
              <div>{getPriceString(value.price)} 원</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
