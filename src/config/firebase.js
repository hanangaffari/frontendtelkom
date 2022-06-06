import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';



const firebaseConfig = {
    apiKey: "AIzaSyCtLYgrCfuxdrO0l_m7wjfFGHWmtPhtt64",
    authDomain: "frontendtelkom.firebaseapp.com",
    projectId: "frontendtelkom",
    storageBucket: "frontendtelkom.appspot.com",
    messagingSenderId: "373796173406",
    appId: "1:373796173406:web:dc2df3ba4e7e473a50a6cf",
    measurementId: "G-YSG15NP37V"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  export const authFirebase = app.auth();
  //export default authFirebase ;
