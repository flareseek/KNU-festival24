import Lottie from "lottie-light-react";
import maintenanceAnimation from "../../assets/maintain.json";
import { wrapContainer, lottieStyle, textStyle } from "./.css.ts";

function ErrorPage() {
  return (
    <div className={wrapContainer}>
      <Lottie animationData={maintenanceAnimation} className={lottieStyle} />
      <div className={textStyle}>
        <br />
        <p>404 NOT FOUND!</p>
        <p>주소를 찾을 수 없습니다.</p>
      </div>
    </div>
  );
}

export default ErrorPage;
