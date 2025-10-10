
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB4QrZujJ6Ds_2bVdXZWoSUFbwz7aPQcQU",
  authDomain: "course-recommender-48953.firebaseapp.com",
  projectId: "course-recommender-48953",
  storageBucket: "course-recommender-48953.firebasestorage.app",
  messagingSenderId: "960226004583",
  appId: "1:960226004583:web:354271ee94c07f46a80ec2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
