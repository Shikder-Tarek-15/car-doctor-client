import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA5n_kE6CmjSJLaMG06rJxt2y_1f8b_AI4",
  authDomain: "car-doctor-92943.firebaseapp.com",
  projectId: "car-doctor-92943",
  storageBucket: "car-doctor-92943.appspot.com",
  messagingSenderId: "350320541754",
  appId: "1:350320541754:web:9a78b82af6f578c2a0f503"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth