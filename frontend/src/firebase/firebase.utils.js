import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyBnpP93roRiEvykZNH2yZqi_ua4Ba0YNn8",
  authDomain: "dnd-marketplace.firebaseapp.com",
  projectId: "dnd-marketplace",
  storageBucket: "dnd-marketplace.appspot.com",
  messagingSenderId: "693692470410",
  appId: "1:693692470410:web:07150da6f6b231688c8973",
  measurementId: "G-H3SRCF1TWF"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


export default firebase;