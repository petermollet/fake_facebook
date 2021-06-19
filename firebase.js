import firebase from 'firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDGBTdkte2caxQX73tZGnZPONP3mKm5K0E",
    authDomain: "fake-facebook-ce2b0.firebaseapp.com",
    projectId: "fake-facebook-ce2b0",
    storageBucket: "fake-facebook-ce2b0.appspot.com",
    messagingSenderId: "298881774533",
    appId: "1:298881774533:web:73527fbc15463abcfd91ac"
};

const app = firebase.apps.length 
            ? firebase.app() 
            : firebase.initializeApp(firebaseConfig)

const db = app.firestore()
const storage = firebase.storage()

export { db, storage }