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
