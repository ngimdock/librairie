import React, { useState, useContext } from 'react';
import FirebaseContext from '../tools/context'
import { Link, Redirect } from 'react-router-dom'

import Description from './Description';



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

	//context variable
	const firebase = useContext(FirebaseContext)

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
		firebase.loginUser(email, password)
		.then(user => {
			setLoginData(resetLoginData)
			setGoHome(true)
			setSignedIn(true)
			console.log(isSignedIn)
			console.log("login.... reussi")
		})
		.catch(error => {
			setError(error)
		})
	}

	const { email, password } = loginData

	const disabled = email === "" || password.length < 6

	return (
		<div className="enterSite">
			<div className="signup">
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
						<div className="or"><span>ou</span></div>
						<Link to="/signup" className="linkText">deja inscript? connectez vous</Link>
					</form>
				</div>
			</div>
			{ goHome ? <Redirect to="/home" /> : null }
		</div>
	);
}

export default Login;