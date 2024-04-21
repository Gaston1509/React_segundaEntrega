import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { inventario } from "../data/asyncMock";


// const firebaseConfig = {

//   apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
//   authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN,
//   projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
//   storageBucket: import.meta.env.VITE_FIREBASE_STORAGEBUCKET,
//   messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGINGSENDERID,
//   appId: import.meta.env.VITE_FIREBASE_APPID,

// };

const firebaseConfig = {
  apiKey: "AIzaSyCTSMVDyChpsH_KvgDFMBagIyKeBXsoD3w",
  authDomain: "react-buhoartesanal.firebaseapp.com",
  projectId: "react-buhoartesanal",
  storageBucket: "react-buhoartesanal.appspot.com",
  messagingSenderId: "698729098494",
  appId: "1:698729098494:web:390425a2e8a078c20309af"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

