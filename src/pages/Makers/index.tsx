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

import { container, insta, linkContainer, main, top, website } from "./makers.css.ts";

import top_pic from "/src/assets/makers/makers_top.png";
import makers_insta from "/src/assets/makers/makers_insta.png";
import makers_website from "/src/assets/makers/makers_website.png";
import makers_main from "/src/assets/makers/makers_main.png";
export default function Makers() {
  return (
    <div className={container}>
      <img className={top} src={top_pic}></img>
      <div className={linkContainer}>
        <a href="https://www.instagram.com/likelion_kangwon/">
          <img className={insta} src={makers_insta}></img>
        </a>
        <a href="https://likelion.university/">
          <img className={website} src={makers_website}></img>
        </a>
      </div>

      <img className={main} src={makers_main}></img>
    </div>
  );
}
