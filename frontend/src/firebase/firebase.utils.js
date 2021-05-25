import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyBnpP93roRiEvykZNH2yZqi_ua4Ba0YNn8",
  authDomain: "dnd-marketplace.firebaseapp.com",
  databaseURL: "https://dnd-marketplace-default-rtdb.firebaseio.com",
  projectId: "dnd-marketplace",
  storageBucket: "dnd-marketplace.appspot.com",
  messagingSenderId: "693692470410",
  appId: "1:693692470410:web:07150da6f6b231688c8973",
  measurementId: "G-H3SRCF1TWF"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;