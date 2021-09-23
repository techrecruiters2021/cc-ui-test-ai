import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_P_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MSG_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

// Singleton
export class Firebase {
  constructor() {
      if (!!Firebase.instance) {
          return Firebase.instance;
      }

      Firebase.instance = this;
      if(!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
      }
      this.firebase = firebase;

      return this;
  }
}