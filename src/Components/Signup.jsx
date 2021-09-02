import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import Description from './Description';

const Signup = () => {
	return (
		<div className="enterSite">
			<div className="signup">
				<Description />

				<div className="right">
					<form className="formControl">
						<h2 className="signupOrLoginTitle">Inscription</h2>

						<div className="top">
								<input type="text" placeholder="pseudo" id="pseudoId" required className="connectInput" />
								<input type="email" placeholder="email" id="emailId" required className="connectInput" />
								<input type="text" placeholder="mot de passe" id="pseudoId" required className="connectInput" />
							<button className="btn btnSignup">S'inscrire</button>
						</div>

						<span>Ou</span>

						<div className="bottom">
							Ici il faut mettre les autres modes de connexion 
						</div>
						<Link to="/login" className="linkText">deja inscript? connectez vous</Link>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Signup;