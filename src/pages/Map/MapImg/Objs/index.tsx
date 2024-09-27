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

import { LableBtn, MoveObj, ObjImg } from "./ui";
import booth_obj from "../../../../assets/booth_obj.png";
import foodtruck_obj from "../../../../assets/foodtruck_obj.png";
import stage_obj from "../../../../assets/stage_obj.png";
import guitar_gomduri from "../../../../assets/guitar_gomduri.png";
import ye_gomduri from "../../../../assets/ye_gomduri.png";
import tree_gomduri from "../../../../assets/tree_gomduri.png";
import table_obj from "../../../../assets/table_obj.png";

// 지도 위에 올라가는 이미지들 모음

const URLS = {
  booth_foodtruck: (place: string, type: string) =>
    `/booth_foodtruck_list?place=${place}&type=${type}`,
  timetable: "/timetable",
} as const;

export const MemorialObjs = () => {
  const navigator = useNavigate();

  return (
    <div className={styles.movDiv}>
      <ObjImg
        src={table_obj}
        handleRoute={() => navigator(URLS.booth_foodtruck("60주년기념관", "부스"))}
        top={-60}
        left={-75}
      />
      <ObjImg
        src={foodtruck_obj}
        handleRoute={() => navigator(URLS.booth_foodtruck("60주년기념관", "푸드트럭"))}
        button="푸드 트럭"
        top={-70}
        left={-150}
      />
      <ObjImg
        src={table_obj}
        handleRoute={() => navigator(URLS.booth_foodtruck("60주년기념관", "부스"))}
        top={-10}
        left={-70}
      />
      <ObjImg
        src={table_obj}
        handleRoute={() => navigator(URLS.booth_foodtruck("60주년기념관", "부스"))}
        button="주점"
        top={30}
        left={-10}
      />
      <MoveObj top={-28} left={-18}>
        <LableBtn handleRoute={() => navigator(URLS.booth_foodtruck("60주년기념관", "부스"))}>
          총학 부스
        </LableBtn>
      </MoveObj>
    </div>
  );
};
export const HamSquareObjs = () => {
  const navigator = useNavigate();

  return (
    <div className={styles.movDiv}>
      <ObjImg
        src={foodtruck_obj}
        handleRoute={() => navigator(URLS.booth_foodtruck("함인섭광장", "푸드트럭"))}
        top={-143}
        left={34}
      />
      <ObjImg
        src={foodtruck_obj}
        handleRoute={() => navigator(URLS.booth_foodtruck("함인섭광장", "푸드트럭"))}
        button="푸드 트럭"
        top={-113}
        left={85}
      />
      <ObjImg
        src={booth_obj}
        handleRoute={() => navigator(URLS.booth_foodtruck("함인섭광장", "부스"))}
        top={-62}
        left={-164}
      />
      <ObjImg
        src={booth_obj}
        handleRoute={() => navigator(URLS.booth_foodtruck("함인섭광장", "부스"))}
        button="부스"
        top={-40}
        left={-127}
      />
      <ObjImg
        src={booth_obj}
        handleRoute={() => navigator(URLS.booth_foodtruck("함인섭광장", "부스"))}
        top={-12}
        left={-64}
      />
      <ObjImg src={ye_gomduri} top={-8} left={32} />
    </div>
  );
};
export const StadiumObjs = () => {
  const navigator = useNavigate();

  return (
    <div className={styles.movDiv}>
      <ObjImg src={guitar_gomduri} top={-6} left={90} />
      <ObjImg
        src={booth_obj}
        handleRoute={() => navigator(URLS.booth_foodtruck("대운동장", "부스(분홍)"))}
        top={-66}
        left={-122}
      />
      <ObjImg
        src={booth_obj}
        handleRoute={() => navigator(URLS.booth_foodtruck("대운동장", "부스(분홍)"))}
        button="부스"
        top={-40}
        left={-91}
      />
      <ObjImg
        src={stage_obj}
        handleRoute={() => navigator(URLS.timetable)}
        button="MAIN STAGE"
        top={-144}
        left={3}
      />
    </div>
  );
};

export const MireaSquareObjs = () => {
  const navigator = useNavigate();

  return (
    <div className={styles.movDiv}>
      <ObjImg
        src={foodtruck_obj}
        handleRoute={() => navigator(URLS.booth_foodtruck("미래광장", "푸드트럭"))}
        top={-124}
        left={42}
      />
      <ObjImg
        src={foodtruck_obj}
        handleRoute={() => navigator(URLS.booth_foodtruck("미래광장", "푸드트럭"))}
        top={-96}
        left={87}
        button="푸드 트럭"
      />
      <ObjImg
        src={table_obj}
        handleRoute={() => navigator(URLS.booth_foodtruck("미래광장", "부스"))}
        top={-86}
        left={-89}
      />
      <ObjImg
        src={table_obj}
        handleRoute={() => navigator(URLS.booth_foodtruck("미래광장", "부스"))}
        button="주점"
        top={-42}
        left={-87}
      />
      <ObjImg
        src={table_obj}
        handleRoute={() => navigator(URLS.booth_foodtruck("미래광장", "부스"))}
        top={-12}
        left={-19}
      />
      <ObjImg
        src={table_obj}
        handleRoute={() => navigator(URLS.booth_foodtruck("미래광장", "부스"))}
        top={-24}
        left={34}
      />
      <ObjImg src={tree_gomduri} top={17} left={-65} />
    </div>
  );
};
