import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  GithubAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const signInWithGoogle = () =>
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      const user = result.user;
      console.log(user);
      console.log("Login");
    })
    .catch((error) => {
      console.log(error.message);
    });
const signInWithGithub = () =>
  signInWithPopup(auth, githubProvider)
    .then((result) => {
      const user = result.user;
      console.log(user);
      console.log("Login");
    })
    .catch((error) => {
      console.log(error.message);
    });
const signInWithFacebook = () =>
  signInWithPopup(auth, facebookProvider)
    .then((result) => {
      const user = result.user;
      console.log(user);
      console.log("Login");
    })
    .catch((error) => {
      console.log(error.message);
    });

// const signIn = () =>
//   signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {

//       const user = userCredential.user;
//       console.log(user);

//     })
//     .catch((error) => {
//       const errorMessage = error.message;
//     });

const logout = () =>
  signOut(auth)
    .then(() => {
      console.log("signout");
    })
    .catch((error) => {
      console.log(error.message);
    });

export { logout, signInWithGoogle, signInWithGithub, signInWithFacebook, auth };
