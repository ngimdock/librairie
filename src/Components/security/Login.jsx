import React, { useState, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom'
import firebase from '../../ressources/js/firebaseConfig2'

import Description from '../other/Description';



const Login = () => {

	const resetLoginData = {
		email: "",
		password: ""
	}


	// state variable
	const [loginData, setLoginData] = useState(resetLoginData)
	const [isSignedIn, setSignedIn] = useState(false)
	const [error, setError] = useState(null)
	const [goHome, setGoHome] = useState(false)


	// handle functions
	const handleChange =(event) => {
		setLoginData({
			...loginData,
			[event.target.id] : event.target.value
		})
		setError(null)
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		const { email, password } = loginData

		//login user rfrom firebase
		firebase.auth().signInWithEmailAndPassword(email, password)
		.then(user => {
			setLoginData(resetLoginData)
			setGoHome(true)
			setSignedIn(true)
		})
		.catch(error => {
			setError(error)
		})
	}

	const { email, password } = loginData

	const disabled = email === "" || password.length < 6

	return (
		<div className="enterSite">
			<div className="login">
				<Description /> 

				<div className="right">
					<form className="formControl" onSubmit={ handleSubmit }>
						<h2 className="signupOrLoginTitle">Connexion</h2>

						<div className="top">
								<input type="email" placeholder="email" id="email" required className="connectInput" onChange={handleChange}/>
								<input type="password" placeholder="Mot de passe" id="password" required  className="connectInput" onChange={handleChange}/>
							<button className="btnLogin" disabled={ disabled }>Se connecter</button>
							<p className="errorMessage">{ error ? error.message : null }</p>
						</div>
						<div>
							
						</div>
						<Link to="/resetpassword" className="linkText">mot de passe oublie? changez</Link>
						<Link to="/signup" className="linkText">Pas de compte? c'est par ici!</Link>
					</form>
				</div>
			</div>
			{ goHome ? <Redirect to="/home" /> : null }
		</div>
	);
}

export default Login;