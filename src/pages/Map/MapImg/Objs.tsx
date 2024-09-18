import booth_obj from "../../../assets/booth_obj.png";
import foodtruck_obj from "../../../assets/foodtruck_obj.png";
import stage_obj from "../../../assets/stage_obj.png";
import guitar_gomduri from "../../../assets/guitar_gomdurie.png";
import table_obj from "../../../assets/table_obj.png";
import * as styles from "./Objs.css.ts";

const LableBtn = ({ children }: { children: string }) => {
  return (
    <button className={styles.labelBtn}>
      <span className={styles.labelBtnText}>{children}</span>
    </button>
  );
};
const MoveObj = ({ children, top, left }: { children: JSX.Element; top: number; left: number }) => {
  return (
    <div className={styles.movDiv} style={{ top: `${top}px`, left: `${left}px` }}>
      {children}
    </div>
  );
};
type ObjImgProps = {
  src: string;
  button?: string;
  top?: number;
  left?: number;
};
const ObjImg = ({ src, button, top, left }: ObjImgProps) => {
  return (
    <MoveObj top={top ?? 0} left={left ?? 0}>
      <>
        <img src={src} className={styles.imgDrop} alt="이벤트에 대한 자세한 정보 보러가기" />
        {button && <LableBtn>{button}</LableBtn>}
      </>
    </MoveObj>
  );
};

export const MemorialObjs = () => {
  return (
    <div className={styles.movDiv}>
      <ObjImg src={table_obj} top={-60} left={-75} />
      <ObjImg src={foodtruck_obj} button="푸트 트럭" top={-70} left={-150} />
      <ObjImg src={table_obj} top={-10} left={-70} />
      <ObjImg src={table_obj} button="주점" top={30} left={-10} />
      <MoveObj top={-28} left={-18}>
        <LableBtn>총학 부스</LableBtn>
      </MoveObj>
    </div>
  );
};
