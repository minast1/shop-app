import { initializeApp, getApps } from "firebase/app";
import Constants from "expo-constants";
// Optionally import the services that you want to use
import { initializeAuth } from "firebase/auth";
import { getReactNativePersistence } from "firebase/auth/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";
// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBkbMTB2DM6pxyYhzFpBLFL50lgt6svJNs",
  authDomain: "asmawu-farouk.firebaseapp.com",
  projectId: "asmawu-farouk",
  storageBucket: "asmawu-farouk.appspot.com",
  messagingSenderId: "899841825871",
  appId: "1:899841825871:web:face0b6af998a8dbcf5e3a",
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
export { auth, firebaseConfig };
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
