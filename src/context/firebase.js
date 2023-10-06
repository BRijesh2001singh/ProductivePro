import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyBZj56n0x936LiBaGwZFlrl9yUrbCDl72Y",
    authDomain: "react-auth-2f074.firebaseapp.com",
    projectId: "react-auth-2f074",
    storageBucket: "react-auth-2f074.appspot.com",
    messagingSenderId: "530496745532",
    appId: "1:530496745532:web:99eb678c9c02c916ced339",
    databaseURL: "https://react-auth-2f074-default-rtdb.firebaseio.com/"
};
export const app = initializeApp(firebaseConfig);