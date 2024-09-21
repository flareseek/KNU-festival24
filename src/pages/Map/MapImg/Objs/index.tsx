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
        handleRoute={() => navigator(URLS.booth_foodtruck("60주년기념관", "booth"))}
        top={-60}
        left={-75}
      />
      <ObjImg
        src={foodtruck_obj}
        handleRoute={() => navigator(URLS.booth_foodtruck("60주년기념관", "foodtruck"))}
        button="푸트 트럭"
        top={-70}
        left={-150}
      />
      <ObjImg
        src={table_obj}
        handleRoute={() => navigator(URLS.booth_foodtruck("60주년기념관", "booth"))}
        top={-10}
        left={-70}
      />
      <ObjImg
        src={table_obj}
        handleRoute={() => navigator(URLS.booth_foodtruck("60주년기념관", "booth"))}
        button="주점"
        top={30}
        left={-10}
      />
      <MoveObj top={-28} left={-18}>
        <LableBtn handleRoute={() => navigator(URLS.booth_foodtruck("60주년기념관", "booth"))}>
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
        handleRoute={() => navigator(URLS.booth_foodtruck("함인섭광장", "foodtruck"))}
        top={-143}
        left={34}
      />
      <ObjImg
        src={foodtruck_obj}
        handleRoute={() => navigator(URLS.booth_foodtruck("함인섭광장", "foodtruck"))}
        button="푸트 트럭"
        top={-113}
        left={85}
      />
      <ObjImg
        src={booth_obj}
        handleRoute={() => navigator(URLS.booth_foodtruck("함인섭광장", "booth"))}
        top={-62}
        left={-164}
      />
      <ObjImg
        src={booth_obj}
        handleRoute={() => navigator(URLS.booth_foodtruck("함인섭광장", "booth"))}
        button="부스"
        top={-40}
        left={-127}
      />
      <ObjImg
        src={booth_obj}
        handleRoute={() => navigator(URLS.booth_foodtruck("함인섭광장", "booth"))}
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
        handleRoute={() => navigator(URLS.booth_foodtruck("대운동장", "booth"))}
        top={-66}
        left={-122}
      />
      <ObjImg
        src={booth_obj}
        handleRoute={() => navigator(URLS.booth_foodtruck("대운동장", "booth"))}
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
        handleRoute={() => navigator(URLS.booth_foodtruck("미래광장", "foodtruck"))}
        top={-124}
        left={42}
      />
      <ObjImg
        src={foodtruck_obj}
        handleRoute={() => navigator(URLS.booth_foodtruck("미래광장", "foodtruck"))}
        top={-96}
        left={87}
        button="푸트 트럭"
      />
      <ObjImg
        src={table_obj}
        handleRoute={() => navigator(URLS.booth_foodtruck("미래광장", "booth"))}
        top={-86}
        left={-89}
      />
      <ObjImg
        src={table_obj}
        handleRoute={() => navigator(URLS.booth_foodtruck("미래광장", "booth"))}
        button="주점"
        top={-42}
        left={-87}
      />
      <ObjImg
        src={table_obj}
        handleRoute={() => navigator(URLS.booth_foodtruck("미래광장", "booth"))}
        top={-12}
        left={-19}
      />
      <ObjImg
        src={table_obj}
        handleRoute={() => navigator(URLS.booth_foodtruck("미래광장", "booth"))}
        top={-24}
        left={34}
      />
      <ObjImg src={tree_gomduri} top={17} left={-65} />
    </div>
  );
};
