import firebase from "firebase";

const config = {
    apiKey: "AIzaSyB5Gl2YP5Nw4PlEbtoRIbLrAN91nbjyi8Y",
    authDomain: "react-firebase-eed45.firebaseapp.com",
    databaseURL: "https://react-firebase-eed45.firebaseio.com",
    projectId: "react-firebase-eed45",
    storageBucket: "react-firebase-eed45.appspot.com",
    messagingSenderId: "347935215377",
    appId: "1:347935215377:web:42dd1b0c4ee34b500f06b0"
}

firebase.initializeApp(config)
export default firebase