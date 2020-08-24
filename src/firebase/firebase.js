import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCjzGI_6WPXBqwjtPw1bu-9P7WH_UzTxOI",
    authDomain: "budget-app-56ef8.firebaseapp.com",
    databaseURL: "https://budget-app-56ef8.firebaseio.com",
    projectId: "budget-app-56ef8",
    storageBucket: "budget-app-56ef8.appspot.com",
    messagingSenderId: "124035025773",
    appId: "1:124035025773:web:8796145cfede8734bb6864",
    measurementId: "G-EN97G2T2YR"
  };

firebase.initializeApp(firebaseConfig);

firebase.database().ref().set({
    name: 'Dan'
});