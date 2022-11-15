import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

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

export const addCollectionAndDocument = async (collectionKey, objectData) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectData.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};

export const getCategoriesAndDocuents = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
};

export const createUserdocumentFromAuth = async function (
  user,
  additonalInfo = {}
) {
  try {
    // doc(firevasedb,コレクション名、ドキュメント名)でドキュメントリファレンスを作成
    const userdocument = doc(db, "user", user.uid);
    // getDocでリファレンスを取得する
    // スナップショットは非同期で処理をする
    const userSnapshot = await getDoc(userdocument);

    //　スナップショットを元にexistsでdatabaseにデータが存在してるか
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

export const UserSignOut = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
