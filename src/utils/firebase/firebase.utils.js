import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAUctKF5uhxvghxHF0xm_AlppFU7eQa0rw",
  authDomain: "shoppy-project-db.firebaseapp.com",
  projectId: "shoppy-project-db",
  storageBucket: "shoppy-project-db.appspot.com",
  messagingSenderId: "1046606235408",
  appId: "1:1046606235408:web:a91ea25fb439841bc0c795",
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.getCustomParameters({
  prompt: "select_account",
});

const db = getFirestore();
export const createUserdocumentFromAuth = async function (user) {
  try {
    const userdocument = doc(db, "user", user.uid);
    const userSnapshot = await getDoc(userdocument);

    if (!userSnapshot.exists()) {
      const { displayName, email } = user;
      const createDate = new Date();
      try {
        setDoc(userdocument, {
          displayName,
          email,
          createDate,
        });
      } catch (err) {
        throw new Error(err);
      }
    }

    return userdocument;
  } catch (err) {
    console.log(`don't create new data ${err.message}`);
  }
};

export const auth = getAuth();
export const signinWithGooglePopup = () => signInWithPopup(auth, provider);
