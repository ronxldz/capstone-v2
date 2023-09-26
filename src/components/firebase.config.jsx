// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrveHz-UZzKii7_ViJOos8JnoB652QmOQ",
  authDomain: "capstone-v2-f7654.firebaseapp.com",
  projectId: "capstone-v2-f7654",
  storageBucket: "capstone-v2-f7654.appspot.com",
  messagingSenderId: "540346699357",
  appId: "1:540346699357:web:8e334cdf23d7cf5eda47b4",
  measurementId: "G-64XZHXH7ZQ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default firebaseConfig;
