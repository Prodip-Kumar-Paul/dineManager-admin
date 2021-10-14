import { initializeApp } from 'firebase/app';
const firebaseConfig = {
  
};

const app = initializeApp(firebaseConfig);


import {getAuth, signInWithEmailAndPassword} from "firebase/auth"

const auth = getAuth();

const signIn = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password).then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err);
    })
}

export default signIn