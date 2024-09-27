/**
 * @license
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 * 
 * All contributors who participated in development before September 26, 2024, retain full copyright over their contributions.
 * These contributors are granted the right, under a Contributor License Agreement (CLA), to use, modify, and distribute their contributions 
 * under additional or alternative licensing terms of their choosing, while the project as a whole remains licensed under the MPL 2.0.
 * 
 * Any contributions made after September 26, 2024, are subject to the terms of the MPL 2.0 and are licensed accordingly.
 */

import { useNavigate } from "react-router-dom";
import * as styles from "./index.css.ts";

interface Props {
  id: string;
  order: number;
  name: string;
  description: string;
  color: string;
  imgURL?: string;
  hasDetail: boolean;
}

export default function Card({ id, name, color, description, order, imgURL, hasDetail }: Props) {
  const navigate = useNavigate();

  /**
   * 카드 클릭 시 상세 페이지로 이동
   */
  const handleClick = () => {
    if (hasDetail) {
      navigate(`/booth_foodtruck_list/booth/${id}`);
    }
  };

  return (
    <div className={styles.container} onClick={handleClick} role={hasDetail ? "button" : undefined}>
      {/*부스 이미지 항목*/}
      {imgURL && <img src={imgURL} alt={`${name} 부스/푸드트럭 이미지`} className={styles.image} />}
      {/*부스 이름, 설명 항목*/}
      <div className={styles.contentContainer}>
        <div className={styles.textContainer}>
          {/*부스 이름*/}
          <h3 className={styles.title} title={name}>
            {name}
          </h3>

          {/*부스 설명*/}
          <p className={styles.description} title={description}>
            {description}
          </p>
        </div>
      </div>

      {/*부스 순서, 상세보기 버튼 항목*/}
      <div className={styles.rightContainer}>
        {/*부스 번호*/}
        <span className={styles.order} style={{ background: color }}>
          No. {order}
        </span>

        {/*상세보기 버튼*/}
        {hasDetail && (
          <div className={styles.detailBtn}>
            <span className={`material-symbols-outlined ${styles.detailBtnIcon}`}>info</span>
          </div>
        )}
      </div>
    </div>
  );
}
