import { auth } from "./firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

export function signIn(email: string, password: string) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("login success:", user);
    })
    .catch((e) => {
      console.error("login failed:", e);
    });
}
