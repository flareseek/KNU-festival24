import { Outlet } from "react-router-dom";
import "../../shared/styles/globalStyle.css";
import Header from "../Header";
import { Footer } from "../Footer";
import * as style from "./.css.ts";
import GlowStar from "../../assets/glow_star.json";

glowStarStyles = [
    style.glowStarStyle1,
    style.glowStarStyle2,
    style.glowStarStyle3,
    style.glowStarStyle4,
    style.glowStarStyle5,
    style.glowStarStyle6,
    style.glowStarStyle7,
    style.glowStarStyle8,
    style.glowStarStyle9,
]
export default function Layout() {
  return (
    <div>
        glowStarStyles.map((style, index) => (
            <Lottie
                key={index}
                className={style}
                animationData={GlowStar}
                loop
                autoplay
            />
        ))
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
