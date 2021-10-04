import React from 'react'
import * as Icon from 'react-bootstrap-icons'

const Footer = () => {

	return (
		<footer className="footer">
			<div className="left">
				<span className="logo">LOGO</span>
				<ul>
					<li>Accueil</li>
					<li id="footerPreferences">Preferes</li>
					<li>A props</li>
				</ul>
				<span>CopyRight dan73 {new Date().getFullYear()}</span>
			</div>

			<div className="center">
				<ul>
					<li><Icon.GeoAltFill className="icon" /> Cameroun, Bonas</li>
					<li> <a href="tel:655951494"><Icon.Telephone className="icon" /> 6 55 95 14 94</a>  </li>
					<li><a href="mailto:ngimdockzemfack@gmail.com"><Icon.Envelope className="icon" /> ngimdockzemfack@gmail.com</a></li>
				</ul>
			</div>

			<div className="right">
				<span className="readBook">Lis des livres et grandi mieux</span>
				<p>
					Nous  favorisons le developpement intellectuel a travers les livres 
					que nous metons a disposition de nos utilisateurs gratuitement
				</p>
			</div>
		</footer>
	)
}

export default Footer