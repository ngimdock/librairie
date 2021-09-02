import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import Description from './Description';

const Login = () => {
	return (
		<div className="enterSite">
			<div className="signup">
				<Description /> 

				<div className="right">
					<form className="formControl">
						<h2 className="signupOrLoginTitle">Connexion</h2>

						<div className="top">
								<input type="email" placeholder="email" id="emailId" required className="connectInput" />
								<input type="text" placeholder="pseudo" id="pseudoId" required  className="connectInput"/>
							<button className="btn btnLogin">Se connecter</button>
						</div>
						<div className="or"><span>ou</span></div>
						<Link to="/signup" className="linkText">deja inscript? connectez vous</Link>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Login;