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

import Lottie from "lottie-light-react";
import maintenanceAnimation from "../../assets/maintain.json";
import { wrapContainer, lottieStyle, textContainer, h1Style, p1Style, backLink } from "./.css.ts";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className={wrapContainer}>
      <Lottie animationData={maintenanceAnimation} className={lottieStyle} />
      <div className={textContainer}>
        <h1 className={h1Style}>404 NOT FOUND!</h1>
        <p className={p1Style}>주소를 찾을 수 없습니다.</p>
        <Link to="/" className={backLink}>
          메인페이지로 가기
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
