import logo from "../../assets/logo.png";
import FirebaseTest from "../../shared/firebase/test/FirebaseTest";

export default function Main() {
  return (
    <div>
      <h1>Main</h1>
      <img src={logo} alt="logo" />
      <FirebaseTest/>
    </div>
  );
}
