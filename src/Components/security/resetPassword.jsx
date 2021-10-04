import React, { useState } from 'react'
import firebase from '../../ressources/js/firebaseConfig2'

import { ConfirmResetPasswordModal } from '../tools/customModal'

import {
	Link
} from 'react-router-dom'

import Description from '../other/Description';


const ResetPassword = () => {

	//state variables
	const [textValue, setTextValue] = useState("")
	const [successReset, setSuccessReset] = useState("")
	const [error, setError] = useState(null)
	const [show, setShow] = useState(false)

	//handler
	const handleChange = (event) => {
		setError(null)
		setSuccessReset("")
		setTextValue(event.target.value)
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		setTextValue("")
		firebase.auth().sendPasswordResetEmail(textValue)
		.then(user => {
			setShow(true)
			setError(null)
		})
		.catch(err => {
			setError(err)
			setSuccessReset("")
		})

	}

	const disabled = textValue ? false : true
	let errorMsg = error && <span>{ error.message }</span>
	const successResetMsg = successReset && <span></span>

	return (
		<div className="enterSite">
			<div className="login">
				<Description />

				<div className="right">
					<form className="formControl" onSubmit={ handleSubmit }>
						<h2 className="signupOrLoginTitle">Changer mot de passe</h2>

						<div className="top">
							<input type="email" placeholder="email" id="email" required className="connectInput" value={textValue} onChange={handleChange} />
							<button className="btnLogin" disabled={disabled}>changer</button>
							<p className="errorMessage"></p>
							{ error && <span className="errorMessage">{ error.message }</span> }
							{ successReset && <span className="sucessResetText">{ successReset }</span> }
						</div>
						<div>
							
						</div>
						<Link to="/login" className="linkText">connectez vous</Link>
					</form>
				</div>
			</div>

			<ConfirmResetPasswordModal 
				show={show}
				onHide={() => setShow(false)}
			/>
		</div>
	)
}

export default ResetPassword