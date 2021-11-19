import { initializeApp, } from "firebase/app";
import {getAuth, signInWithEmailAndPassword, UserCredential, OAuthCredential} from "firebase/auth"

import firebaseConfig from "../../firebase-config";

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

const signIn = (email: string, password: string): Promise<UserCredential> => {
    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth, email, password).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err);
        })
    });
}

export default signIn