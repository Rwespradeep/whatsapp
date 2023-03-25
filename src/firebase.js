import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyDUqzRANrpb-gdtxxx_rkDXOPqV4pt6mvY",
    authDomain: "whatsapp-mern-31f18.firebaseapp.com",
    projectId: "whatsapp-mern-31f18",
    storageBucket: "whatsapp-mern-31f18.appspot.com",
    messagingSenderId: "751807943965",
    appId: "1:751807943965:web:3cdaa7fe778e3f6fb5bdf4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();


export { auth, provider, signInWithPopup, signOut };