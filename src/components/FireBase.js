import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

initializeApp({
    apiKey: "AIzaSyDJL9BHOcxkk_7HZsxpdvTSbUBG3A13TUg",
    authDomain: "puerto-sirena.firebaseapp.com",
    projectId: "puerto-sirena",
    storageBucket: "puerto-sirena.appspot.com",
    messagingSenderId: "82819720670",
    appId: "1:82819720670:web:371c18bb4b6758b980a94f"
});

export const db = getFirestore();




  