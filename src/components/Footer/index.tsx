/*
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 *
 * All contributors who participated in development before September 26, 2024, retain full copyright over their contributions.
 * These contributors are granted the right, under a Contributor License Agreement (CLA), to use, modify, and distribute their contributions
 * under additional or alternative licensing terms of their choosing, while the project as a whole remains licensed under the MPL 2.0.
 *
 * Any contributions made after September 26, 2024, are subject to the terms of the MPL 2.0 and are licensed accordingly.
 */

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
