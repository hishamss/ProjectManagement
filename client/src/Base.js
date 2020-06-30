import * as firebase from "firebase/app";
import "firebase/auth";


const app = firebase.initializeApp({
    apiKey: "AIzaSyAqo3WdF_RkKrfhRi_5GcfdIpehsTRcxrk",
    authDomain: "project3-9a5b0.firebaseapp.com",
    databaseURL: "https://project3-9a5b0.firebaseio.com",
    projectId: "project3-9a5b0",
    storageBucket: "project3-9a5b0.appspot.com",
    messagingSenderId: "828265317184",
    appId: "1:828265317184:web:623c24ba65f1528d6db0a5"
});

export default app;