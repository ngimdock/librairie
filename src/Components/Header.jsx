import React from 'react'
import * as Icon from 'react-bootstrap-icons';

const Header = () => {
	return (
		<header className="siteHeader">
			<div className="top">
			     <div className="logoThemeContainer">
					<p className="logo">LOGO</p>
					<div className="in-on theme">theme</div>
			     </div>

			     <div>
			     	<span className="userName">Danilix</span>
			     	<div className="in-on logout">deconnexion</div>
			     </div>
			</div>

			<div className="center">
				<h1 className="slogan">Des centaines de livres a votre disposition, profitez-en !</h1>
				<form className="filterContainer">
					<select name="" id="" className="selectType">
						<option value="date">Date</option>
						<option value="categories">Categories</option>
						<option value="popularite">Popularite</option>
					</select>

					<div className="searchContainer">
						<input type="text" placeholder="chercher un livre" />
						<button>chercher</button>
					</div>
				</form>
			</div>

			<nav className="bottom">
				<ul className="navContainer">
					<li>Accueil</li>
					<li>Préférés</li>
					<li>A propos</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header