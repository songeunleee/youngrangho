import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
class AuthService {
  constructor() {
    this.auth = getAuth();
    this.provider = new GoogleAuthProvider();
  }
  signin() {
    return signInWithPopup(this.auth, this.provider);
  }

  signout() {
    const auth = getAuth();
    auth.signOut();
  }
}
export default AuthService;
