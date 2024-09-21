import React from 'react';
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

  const handleClick = () => {
    if (hasDetail) {
      navigate(`/booth_foodtruck_list/booth/${id}`);
    }
  };

  return (
      <div className={styles.container} onClick={handleClick} role={hasDetail ? "button" : undefined}>
        {imgURL && (
            <img src={imgURL} alt={`${name} 부스/푸드트럭 이미지`} className={styles.image} />
        )}
          <div className={styles.contentContainer}>
              <div className={styles.textContainer}>
                  <h3 className={styles.title} title={name}>{name}</h3>
                  <p className={styles.description} title={description}>{description}</p>
              </div>
          </div>
        <div className={styles.rightContainer}>
        <span className={styles.order} style={{ background: color }}>
          No. {order}
        </span>
          {hasDetail && (
              <div className={styles.detailBtn}>
                <span className={`material-symbols-outlined ${styles.detailBtnIcon}`}>info</span>
                <span>더보기</span>
              </div>
          )}
        </div>
      </div>
  );
}