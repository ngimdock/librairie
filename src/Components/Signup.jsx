// import module
import React, { useState, useContext, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom'
// import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import FirebaseContext from '../tools/context'
import firebase from 'firebase'
import firebaseui from 'firebaseui'

import Description from './Description';


import 'firebaseui/dist/firebaseui.css'

const Signup = () => {

	const resetSignupData = {
		pseudo: "",
		email: "",
		password: ""
	}

	//Variables d'etats
	const [signupData, setSignupData] = useState(resetSignupData)
	const [isSignedIn, setSignedIn] = useState(false)
	const [error, setError] = useState(null)
	const [goHome, setGoHome] = useState(false)

	//variables context
	const firebaseobj  = useContext(FirebaseContext)

	//handler
	const handleChange = (event) => {
		setSignupData({
			...signupData,
			[event.target.id] : event.target.value
		})
		setError(null)
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		const { email, password } = signupData

		//create new user from firebase
		firebaseobj.signupUser(email, password)
		.then(user => {
			setSignupData(resetSignupData)
			setGoHome(true)
			setSignedIn(true)
			console.log(isSignedIn)
			console.log("connexion reussi")
		})
		.catch(err => {
			setError(err)
		})
	}

	// const uiConfig = {
	//     signInFlow: "popup",
	//     signInOptions: [
	//       firebase.auth.GoogleAuthProvider.PROVIDER_ID,
	//       firebase.auth.FacebookAuthProvider.PROVIDER_ID,
	//       firebase.auth.EmailAuthProvider.PROVIDER_ID,
	//     ],
	//     callbacks: {
	//       signInSuccess: () => false,
	//     },
	// };

	// useEffect(() => {
	// 	firebase.auth().onAuthStateChanged(user => {
	// 		 setGoHome(!!user)
	// 		 console.log(user)
	// 	})
	// }, [])


	const {pseudo, email, password} = signupData



	const disabled = pseudo === "" || email === "" || password.length < 6

	return (
		<div className="enterSite">
			<div className="signup">
				<Description />

				<div className="right">
					<form className="formControl" onSubmit={ handleSubmit }>
						<h2 className="signupOrLoginTitle">Inscription</h2>

						<div className="top">
								<input type="text" placeholder="pseudo" id="pseudo" required className="connectInput" value={pseudo} onChange= {handleChange} />
								<input type="email" placeholder="email" id="email" required className="connectInput" value={email} onChange= {handleChange}  />
								<input type="text" placeholder="mot de passe" id="password" required className="connectInput" value={password} onChange= {handleChange}  />
								<button className="btnSignup" disabled={disabled}>S'inscrire</button>
								<p className="errorMessage">{ error ? error.message : null }</p>
						</div>

						<div className="or"> <span>ou</span></div>

						<div className="bottom" id="firebaseui-auth-container">
							je met les autres modes de connexion ici
						</div>
						<Link to="/login" className="linkText">deja inscript? connectez vous</Link>
					</form>
				</div>
			</div>
			{ goHome ? <Redirect to="/home" /> : null }
		</div>
	);
}

export default Signup;