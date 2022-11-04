import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
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

  onAuthChange(onUserChanged) {
    const auth = getAuth();
    return onAuthStateChanged(auth, (user) => {
      onUserChanged(user);
    });
  }
}
export default AuthService;
