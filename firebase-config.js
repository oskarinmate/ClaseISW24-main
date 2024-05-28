// Import the functions you need from the SDKs you need
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from "firebase/app";
import {initializeAuth,getReactNativePersistence} from 'firebase/auth';
import {getDatabase} from 'firebase/database';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdvoyC9AyHDiZvUoPcRFRGomuEEPxaOoM",
  authDomain: "test-proyect-firebase.firebaseapp.com",
  projectId: "test-proyect-firebase",
  storageBucket: "test-proyect-firebase.appspot.com",
  messagingSenderId: "1028408711127",
  appId: "1:1028408711127:web:fd976e08179c5945b99d92",
  measurementId: "G-Q3RPR15MFH"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app,{
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export const database= getDatabase(app);
export const db = getFirestore(app);