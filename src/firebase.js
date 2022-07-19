// import firebase from 'firebase';
// import { initializeApp } from 'firebase/app';

import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"


// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBoeX8QEznN-QctG44Efib4ccr_4Lo1kIA",
  authDomain: "db-45e87.firebaseapp.com",
  projectId: "db-45e87",
  storageBucket: "db-45e87.appspot.com",
  messagingSenderId: "240434859026",
  appId: "1:240434859026:web:aca4425263cbbb4c289ccb",
  measurementId: "G-PV0ELRZW0D"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

//const app = initializeApp(firebaseConfig);
// const firebaseApp = initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth(); 
export {db, auth };

// export default firebase;
// export {initializeApp,SDK_VERSION,_DEFAULT_ENTRY_NAME,_addComponent};

//exports: FirebaseError, SDK_VERSION, _DEFAULT_ENTRY_NAME, _addComponent, _addOrOverwriteComponent, _apps, _clearComponents, _components, _getProvider, _registerComponent, _removeServiceInstance, deleteApp, getApp, getApps, initializeApp, onLog, registerVersion, setLogLevel
