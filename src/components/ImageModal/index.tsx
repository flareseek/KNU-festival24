import * as styles from "./index.css.ts";

export default function ImageModal({ src, alt }: { src: string; alt: string }) {
  return (
    <div className={styles.container}>
      <span
        className={`material-symbols-outlined ${styles.zoomInBtn}`}
        onClick={() => window.open(src)}
      >
        zoom_in
      </span>
      <img src={src} alt={alt} className={styles.image} />
    </div>
  );
}
