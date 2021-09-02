import { initializeApp } from "firebase/app";
import App from 'firebase/app';


const firebaseConfig = {
  apiKey: "AIzaSyANJfxPgroCOGSTDUO8Ecu7c5RhIFoOM0c",
  authDomain: "librairie-ad3f9.firebaseapp.com",
  projectId: "librairie-ad3f9",
  storageBucket: "librairie-ad3f9.appspot.com",
  messagingSenderId: "880228657394",
  appId: "1:880228657394:web:6c6cdaabd9c8356de9486b"
};



class Firebase{
	constructor(){
		app.initializeApp(firebaseConfig)
	}
}

export default Firebase;