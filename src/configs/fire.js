import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyDuAS-fSb-OWwenQQooXC9oScPVMc8Tn7c",
    authDomain: "hackfest-e8b06.firebaseapp.com",
    projectId: "hackfest-e8b06",
    storageBucket: "hackfest-e8b06.appspot.com",
    messagingSenderId: "808713354757",
    appId: "1:808713354757:web:33f4c11a7857452e97e66c"
});

const auth = getAuth();

export {
    auth, createUserWithEmailAndPassword, signInWithEmailAndPassword
}