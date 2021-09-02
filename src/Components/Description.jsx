import React, { useState } from 'react';

import { ChevronDoubleRight } from 'react-bootstrap-icons';

const Description = () => {
	return (
		<div className="description">
			<span className="readBook">Lis des livres et grandi mieux</span>
			<h1>Vous pouvez lire et telecharger des  livres ici <span>gratuitement</span> </h1>
			<p>
				Nous  favorisons le developpement intellectuel a travers les livres 
				que nous metons a disposition de nos utilisateurs gratuitement
			</p>
			<span className="register">Enregistrez vous <ChevronDoubleRight className="icon" /> </span>
		</div>
	);
}

export default Description;