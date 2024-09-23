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
