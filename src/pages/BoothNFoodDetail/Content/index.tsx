/*
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 *
 * All contributors who participated in development before September 26, 2024, retain full copyright over their contributions.
 * These contributors are granted the right, under a Contributor License Agreement (CLA), to use, modify, and distribute their contributions
 * under additional or alternative licensing terms of their choosing, while the project as a whole remains licensed under the MPL 2.0.
 *
 * Any contributions made after September 26, 2024, are subject to the terms of the MPL 2.0 and are licensed accordingly.
 */

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
