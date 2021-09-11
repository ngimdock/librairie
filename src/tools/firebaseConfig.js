import app from 'firebase/app';
import "firebase/auth";
import objConfig from './objConfig'

class FirebaseClass {
  constructor(){
    app.initializeApp(objConfig);
    this.auth = app.auth();
  }

  // inscription
  signupUser = (email, password) => 
    this.auth.createUserWithEmailAndPassword(email, password);

  // Connexion
  loginUser = (email, password) =>
  this.auth.signInWithEmailAndPassword(email, password);

  // Deconnexion
  signoutUser = () => this.auth.signOut();

  //Recuperer le mot de passe
  passwordReset = (email) => this.auth.sendPasswordResetEmail(email);
}

export default FirebaseClass;