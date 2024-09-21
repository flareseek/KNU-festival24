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
  const navigator = useNavigate();

  return (
    <div
      {...(hasDetail && { onClick: () => navigator(`/booth_foodtruck_list/booth/${id}`) })}
      className={styles.container}
    >
      {imgURL && <img src={imgURL} alt={`${name} 부스/푸드트럭 이미지`} className={styles.image} />}
      <div className={styles.contentContainer}>
        <div>
          {/*내용을 담는 div*/}
          <div>
            <div className={styles.contentDiv13}>
              <h3 className={styles.title}>{name}</h3>
            </div>
            <div className={styles.contentDiv2}>
              <p className={styles.description}>{description}</p>
            </div>
          </div>

          {/*관련 정보 div*/}
          <div>
            <span className={styles.order} style={{ background: color }}>
              No. {order}
            </span>
            {hasDetail && (
              <div className={styles.contentDiv13}>
                <div />
                <div className={styles.detailBtn}>
                  <span className={`material-symbols-outlined ${styles.detailBtnIcon}`}>info</span>
                  <span>더보기</span>
                </div>
              </div>
          )}
          </div>

        </div>
      </div>
    </div>
  );
}
