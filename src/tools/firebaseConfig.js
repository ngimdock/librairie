// import app from 'firebase/app';
// import "firebase/auth";

// const objConfig = {
//   apiKey: "AIzaSyANJfxPgroCOGSTDUO8Ecu7c5RhIFoOM0c",
//   authDomain: "librairie-ad3f9.firebaseapp.com",
//   projectId: "librairie-ad3f9",
//   storageBucket: "librairie-ad3f9.appspot.com",
//   messagingSenderId: "880228657394",
//   appId: "1:880228657394:web:6c6cdaabd9c8356de9486b"
// };

// class FirebaseClass {
//   constructor(){
//     app.initializeApp(objConfig);
//     this.auth = app.auth();
//   }

//   // inscription
//   signupUser = (email, password) => 
//     this.auth.createUserWithEmailAndPassword(email, password);

//   // Connexion
//   loginUser = (email, password) =>
//   this.auth.signInWithEmailAndPassword(email, password);

//   // Deconnexion
//   signoutUser = () => this.auth.signOut();

//   //Recuperer le mot de passe
//   passwordReset = (email) => this.auth.sendPasswordResetEmail(email);
// }

// export default FirebaseClass;