import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {

        apiKey: "AIzaSyBofjpvfsjGgm0_C5MfFZW8eZgNiP9m2uk",
        authDomain: "jetsy-3718a.firebaseapp.com",
        databaseURL: "https://jetsy-3718a.firebaseio.com",
        projectId: "jetsy-3718a",
        storageBucket: "jetsy-3718a.appspot.com",
        messagingSenderId: "1092243737873",
        appId: "1:1092243737873:web:3df8b9ab879c5c929f10b0",
        measurementId: "G-T4G8S5FESN"

};


      //takes user object generated on sign in and stores it on firebase


export const createUserProfileDocument = async (userAuth, additionalData) => {       //pasing in user object, and any additional data (dictionary)

  if (!userAuth) return ;
  
  const userRef = firestore.doc(`users/${userAuth.uid}`);     //remember difference between document/colelction reference and snapshot

  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { email, displayName } = userAuth;
    const createdAt = new Date();
    // console.log(snapShot)

    //uploading to firestore
    try {
      await userRef.set({
        email,
        displayName,
        createdAt,
        ...additionalData
      })
      

    }catch (error) {
      console.log('error creating user', error.message)
    }
  }
  return userRef;

}


firebase.initializeApp(config);

export const auth = firebase.auth(); 
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;