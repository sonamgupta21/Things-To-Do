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
  apiKey: "AIzaSyC2qkz01hZEiag2-7zcXv5y1irLg2rOZak",
  authDomain: "todo-list-app-f2ccf.firebaseapp.com",
  projectId: "todo-list-app-f2ccf",
  storageBucket: "todo-list-app-f2ccf.appspot.com",
  messagingSenderId: "82223966708",
  appId: "1:82223966708:web:18dfd76601a680ba4ff1a1",
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
