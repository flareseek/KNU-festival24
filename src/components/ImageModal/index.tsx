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

interface ImageModalProps {
  src: string;
  alt: string;
  activePlace?: "60주년기념관" | "함인섭광장" | "대운동장";
}

export default function ImageModal({ src, alt, activePlace }: ImageModalProps) {
  const placeLinks: { [key: string]: string } = {
    "60주년기념관": "https://kko.to/hKoJW3SEaa",
    함인섭광장: "https://kko.to/KvvTprkn8T",
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
