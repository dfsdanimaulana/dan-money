import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBp8pVxnjuM6WXbFFLy4Y4NI7va63C1qAs",
  authDomain: "danmoney-593cf.firebaseapp.com",
  projectId: "danmoney-593cf",
  storageBucket: "danmoney-593cf.appspot.com",
  messagingSenderId: "363065686729",
  appId: "1:363065686729:web:4fbd0966a7d0c3068e2b18"
}

firebase.initializeApp(firebaseConfig)

// init firestore
const db = firebase.firestore()

// init authentication
const auth = firebase.auth()

export { db, auth }