import firebase from 'firebase/app'
//import 'firebase/auth'
//import 'firebase/database'
//import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyDUasJOTvERyy2EZkuKN-V9YdgxNIOeX74",
    authDomain: "love2dance-89110.firebaseapp.com",
    databaseURL: "https://love2dance-89110.firebaseio.com",
    projectId: "love2dance-89110",
    storageBucket: "love2dance-89110.appspot.com",
    messagingSenderId: "6304993797",
    appId: "1:6304993797:web:94367daab48b3dcefa026c"
  };

 firebase.initializeApp(firebaseConfig);
 var firestore = firebase.firestore();

  export default firebaseConfig