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

import * as styles from "./index.css";

import TabBtns from "./TabBtns";
import Card from "./Card";
import { useBoothNFoodtruckTabs } from "./TabBtns/hook";
import { dataMappping } from "./dataMapping";

import haminseop_layout from "../../assets/data/layout/haminseop_layout.png";
import playground_layout from "../../assets/data/layout/playground_layout.png";
import sixty_anniv_layout from "../../assets/data/layout/sixty_anniv_layout.png";
import ImageModal from "../../components/ImageModal";

export default function BoothNFoodList() {
  const { activePlace, activeType, changeTab } = useBoothNFoodtruckTabs();
  let prevName = "";
  const { data, color } = dataMappping(activePlace, activeType);

  return (
    <div>
      <section className={styles.tabContainer}>
        <TabBtns
          color={color}
          activePlace={activePlace}
          activeType={activeType}
          changeTab={changeTab}
        />
      </section>
      <section className={styles.imgContainer}>
        <div className={styles.imgContainer2}>
          {activePlace !== "미래광장" && (
            <ImageModal
              src={
                activePlace === "함인섭광장"
                  ? haminseop_layout
                  : activePlace === "대운동장"
                    ? playground_layout
                    : sixty_anniv_layout
              }
              alt="layout"
              activePlace={activePlace}
            />
          )}
        </div>
      </section>
      <section className={styles.cardContainer}>
        {data.map((item) => {
          if (prevName === item.name) return null;
          prevName = item.name;
          return (
            <Card
              key={item.id}
              id={item.id}
              description={item.description}
              imgURL={"image" in item ? item.image : undefined}
              color={color}
              order={item.order}
              name={item.name}
              hasDetail={
                // 판매중인 상품이 있거나 설명이 10자 이상인 경우에만 상세 페이지 존재
                ("saleItems" in item ? item.saleItems.length > 0 : undefined) ||
                item.description.length > 10
              }
            />
          );
        })}
      </section>
    </div>
  );
}
