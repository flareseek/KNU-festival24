import FooterLogo from "../../assets/footer.svg?react";
import * as styles from "./.css.ts";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Link to={"/makers"}>
        <FooterLogo className={styles.footerLogo} />
      </Link>
      <p className={styles.footerText}>
        COPRYRIGHT Ⓒ 2024 LIKELION KANGWON NATIONAL UNIV. ALL RIGHTS RESERVED.
      </p>
    </footer>
  );
}
