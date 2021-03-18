import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyDUgCpEyW9NtV5KrTZ51f41NaNsDwSiOhE",
  authDomain: "feedtech-1.firebaseapp.com",
  databaseURL: "https://feedtech-1-default-rtdb.firebaseio.com",
  projectId: "feedtech-1",
  storageBucket: "feedtech-1.appspot.com",
  messagingSenderId: "36785180393",
  appId: "1:36785180393:web:70270140b93fabadacaa78",
  measurementId: "G-PJQWYZDHN5"
};
var fire = firebase.initializeApp(firebaseConfig);

export default fire;
