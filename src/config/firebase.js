// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
//   authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN,
//   projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
//   storageBucket: import.meta.env.VITE_FIREBASE_STORAGEBUCKET,
//   messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGINGSENDERID,
//   appId: import.meta.env.VITE_FIREBASE_APPID,
// };



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTSMVDyChpsH_KvgDFMBagIyKeBXsoD3w",
  authDomain: "react-buhoartesanal.firebaseapp.com",
  projectId: "react-buhoartesanal",
  storageBucket: "react-buhoartesanal.appspot.com",
  messagingSenderId: "698729098494",
  appId: "1:698729098494:web:390425a2e8a078c20309af"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
// Initialize Firebase
console.log("se conecta")

// productos.forEach((prod) => {
//   addDoc(collection(db, "productos"), prod)
//     .then((el) => {
//       console.log(`se agregó el producto ${el.id}`);
//     })
//     .catch((error) => console.log(error));
// });

// Initialize Firebase

