import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCX9tmJzRfiAQLt9oomhv-PykT1PlBglTs",
    authDomain: "wireleibproject.firebaseapp.com",
    databaseURL: "https://wireleibproject.firebaseio.com",
    projectId: "wireleibproject",
    storageBucket: "wireleibproject.appspot.com",
    messagingSenderId: "826735866145",
    appId: "1:826735866145:web:7e01ad9a27c81561950e60"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
