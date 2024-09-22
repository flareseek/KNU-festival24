import * as styles from "./index.css.ts";

interface ImageModalProps {
  src: string;
  alt: string;
  activePlace?: "60주년기념관" | "함인섭광장" | "대운동장";
}

export default function ImageModal({ src, alt, activePlace }: ImageModalProps) {
  const placeLinks: { [key: string]: string } = {
    "60주년기념관": "https://kko.to/hKoJW3SEaa",
    함인섭광장: "https://kko.to/egxFtxQlQ0",
    대운동장: "https://kko.to/MkBZQvfuH0",
  };

  const handlePlaceButtonClick = () => {
    if (activePlace) {
      const link = placeLinks[activePlace];
      if (link) {
        window.location.href = link;
      } else {
        console.error(`Link for ${activePlace} is not defined.`);
      }
    } else {
      console.error("activePlace is not provided.");
    }
  };

  return (
    <div className={styles.container}>
      <span
        className={`material-symbols-outlined ${styles.zoomInBtn}`}
        onClick={() => window.open(src)}
      >
        zoom_in
      </span>
      {alt === "layout" && (
        <span
          className={`material-symbols-outlined ${styles.placeBtn}`}
          onClick={handlePlaceButtonClick}
        >
          map
        </span>
      )}
      <img src={src} alt={alt} className={styles.image} />
    </div>
  );
}
