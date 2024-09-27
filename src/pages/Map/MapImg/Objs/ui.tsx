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
