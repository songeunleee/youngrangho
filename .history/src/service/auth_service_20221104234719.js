import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
class AuthService {
  constructor() {
    this.auth = getAuth();
    this.provider = new GoogleAuthProvider();
  }
  login() {
    return signInWithPopup(this.auth, this.provider);
  }
}
export default AuthService;
