
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAmvCOK8KNQGF67EKNrCAROPQqJQlvUL3s",
  authDomain: "tech-timu.firebaseapp.com",
  projectId: "tech-timu",
  storageBucket: "tech-timu.appspot.com",
  messagingSenderId: "296794712361",
  appId: "1:296794712361:web:f598141dd5e5b8bebeaf38"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;