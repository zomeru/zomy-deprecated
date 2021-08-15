import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA4uu1b1axrRTsgKFpLzdFj7xQCJycOOws',
  authDomain: 'zomy-47a3d.firebaseapp.com',
  projectId: 'zomy-47a3d',
  storageBucket: 'zomy-47a3d.appspot.com',
  messagingSenderId: '547889139174',
  appId: '1:547889139174:web:a7593ff7fe1b3312061a27',
  measurementId: 'G-1HGHVD698P',

  // apiKey: import.meta.env.VITE_API_KEY,
  // authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  // projectId: import.meta.env.VITE_PROJECT_ID,
  // storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  // messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  // appId: import.meta.env.VITE_APP_ID,
  // measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();

export default db;
