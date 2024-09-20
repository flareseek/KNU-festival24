import * as styles from "./index.css.ts";

export const LableBtn = ({
  children,
  handleRoute,
}: {
  children: string;
  handleRoute?: () => void;
}) => {
  return (
    <button className={styles.labelBtn} onClick={handleRoute}>
      <span className={styles.labelBtnText}>{children}</span>
    </button>
  );
};
export const MoveObj = ({
  children,
  top,
  left,
}: {
  children: JSX.Element;
  top: number;
  left: number;
}) => {
  return (
    <div className={styles.movDiv} style={{ top: `${top}px`, left: `${left}px` }}>
      {children}
    </div>
  );
};

type ObjImgProps = {
  src: string;
  handleRoute?: () => void;
  button?: string;
  top?: number;
  left?: number;
};
/**
 * 부스, 푸드트럭, 무대 등의 이미지를 렌더링하는 컴포넌트
 *
 * @param {handleRoute} handleRoute 이미지 클릭 시 실행(라우팅 함수)
 * @returns
 */
export const ObjImg = ({ src, handleRoute, button, top, left }: ObjImgProps) => {
  return (
    <MoveObj top={top ?? 0} left={left ?? 0}>
      <>
        <img
          src={src}
          onClick={handleRoute}
          className={styles.imgDrop}
          alt="이벤트에 대한 자세한 정보 보러가기"
        />
        {button && <LableBtn handleRoute={handleRoute}>{button}</LableBtn>}
      </>
    </MoveObj>
  );
};
