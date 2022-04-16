// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKAPLMo8XCH-JwOOgPhCNl_YiUffzyQo8",
  authDomain: "softwarengineeringproject.firebaseapp.com",
  projectId: "softwarengineeringproject",
  storageBucket: "softwarengineeringproject.appspot.com",
  messagingSenderId: "412770922781",
  appId: "1:412770922781:web:78dd1ae67cb781c69531f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app)

export default storage