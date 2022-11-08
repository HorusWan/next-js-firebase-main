import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    // apiKey: process.env.NEXT_PUBLIC_apiKey,
    // authDomain: process.env.NEXT_PUBLIC_authDomain,
    // projectId: process.env.NEXT_PUBLIC_projectId,
    // storageBucket: process.env.NEXT_PUBLIC_storageBucket,
    // messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId,
    // appId: process.env.NEXT_PUBLIC_appId
    apiKey: "AIzaSyCxKDnWoa7OlhYFL1tcwVsHbNKCSvcERMc",
    authDomain: "fir-f4139.firebaseapp.com",
    projectId: "fir-f4139",
    storageBucket: "fir-f4139.appspot.com",
    messagingSenderId: "9539849672",
    appId: "1:9539849672:web:646b7b0124a65c0c39c4fd"
}; 

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);