import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
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

const googleProvider = new GoogleAuthProvider();

googleProvider.getCustomParameters({
  prompt: "select_account",
});

// getfirestore()でfirebasedbのセットアップ
const db = getFirestore();
export const createUserdocumentFromAuth = async function (
  user,
  additonalInfo = {}
) {
  try {
    // doc(firevasedb,コレクション名、ドキュメント名)でドキュメントを作成
    const userdocument = doc(db, "user", user.uid);
    // getDocでリファレンスを取得する
    const userSnapshot = await getDoc(userdocument);

    //　existsでdatabaseにデータが存在してるか
    if (!userSnapshot.exists()) {
      const { displayName, email } = user;
      const createDate = new Date();
      try {
        // setDoc(documment,追加したい内容)
        await setDoc(userdocument, {
          displayName,
          email,
          createDate,
          ...additonalInfo,
        });
      } catch (err) {
        throw new Error(err);
      }
    }

    return userdocument;
  } catch (err) {
    console.log(`don't create new data : ${err.message}`);
  }
};

export const auth = getAuth();
export const signinWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signinWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signinUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) throw Error;
  return await signInWithEmailAndPassword(auth, email, password);
};
