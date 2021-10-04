import { logDOM } from '@testing-library/react';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';


import Description from './other/Description'

const Welcome = (props) => {

	useEffect(() => {
		console.log("store");
		console.log(props.store)
	})
	return (
		<div className="enterSite">
			<div className="welcome">
				<Description />

				<div className="right">
					<div className="btn-box">
						<Link to="/signup" className="btn">Inscription</Link>
						<Link to="/login" className="btn">Connexion</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Welcome;