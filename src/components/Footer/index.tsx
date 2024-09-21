import FooterLogo from "../../assets/footer.svg?react";
import * as styles from "./.css.ts";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <Link to={"/makers"}>
          <FooterLogo className={styles.footerLogo} />
        </Link>
        <a
          href="https://docs.google.com/forms/d/1faPr7Csw59XleXz56_oYiU4raGi44BV-2aT7OLhrVJw/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.inquiryLink}
        >
          사이트 문의
        </a>
      </div>
      <p className={styles.footerText}>
        COPYRIGHT Ⓒ 2024 LIKELION KANGWON NATIONAL UNIV. ALL RIGHTS RESERVED.
      </p>
    </footer>
  );
}
