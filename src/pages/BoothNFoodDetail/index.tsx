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

import { useParams } from "react-router-dom";

import {
  BOOTH_MEMORIAL60_LIST,
  BOOTH_MIRAE_LIST,
  BOOTH_PLAYGROUND_MIDDLE_YELLOW_LINE_LIST,
  BOOTH_PLAYGROUND_BOTTOM_PINK_LINE_LIST,
  BOOTH_PLAYGROUND_TOP_GREEN_LINE_LIST,
  BOOTH_HAMINSEOP_LIST,
} from "../../resources/booth_list.ts";

import sparkles from "../../assets/sparkles.svg";

// import Content from "./Content";
import Overview from "./Overview";
import * as styles from "./index.css.ts";
import Content from "./Content/index.tsx";

/**
 * type: 'booth'
 * @returns 부스, 푸드트럭 상세 페이지
 */
export default function BoothNFoodDetail() {
  const { id } = useParams<{ id: string }>();

  // 모든 부스 리스트를 하나의 배열로 합침
  const allBooths = [
    ...BOOTH_MEMORIAL60_LIST,
    ...BOOTH_MIRAE_LIST,
    ...BOOTH_PLAYGROUND_MIDDLE_YELLOW_LINE_LIST,
    ...BOOTH_PLAYGROUND_BOTTOM_PINK_LINE_LIST,
    ...BOOTH_PLAYGROUND_TOP_GREEN_LINE_LIST,
    ...BOOTH_HAMINSEOP_LIST,
  ];

  // 모든 리스트를 순회하여 id가 일치하는 객체 찾기
  const content = allBooths.find((value) => value.id === id);

  if (!content) {
    // TODO: 404 페이지로 리다이렉트
    return <div>존재하지 않는 페이지입니다.</div>;
  }

  return (
    <div className={styles.layout}>
      <div>
        <section>
          <Overview
            title={content.name}
            date={content.date}
            imgURL={content.image ?? ""}
            order={content.order}
            place={content.place}
          />
        </section>
        <section className={styles.descriptionContainer}>
          <div className={styles.description}>{content.description}</div>
          <img className={`${styles.sparkles} ${styles.sparkles1}`} src={sparkles} alt="spakles" />
          <img className={`${styles.sparkles} ${styles.sparkles2}`} src={sparkles} alt="spakles" />
        </section>
      </div>
      {content.saleItems.length ? <Content content={content.saleItems} /> : null}
    </div>
  );
}
