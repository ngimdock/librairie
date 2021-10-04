import React,  { useState, useEffect } from 'react';
import Header from './Header'
import Footer from './Footer'

import { Redirect } from 'react-router-dom'
import { LoadingModal } from '../tools/customModal';

import firebase from '../../ressources/js/firebaseConfig2';

const Home = () => {

	//state variable
	const [userSession, setUserSession] = useState(null)
	const [backWelcome, setBackWelcome] = useState(false)

	useEffect(() => {
		let listener = firebase.auth().onAuthStateChanged(user => {
			console.log(user)
			if(user){
				setUserSession(user)
			}else{
				setBackWelcome(true)
			}
		})

		return () => {
			listener()
		}

	}, [])

	// when i verify if the user is connected, i display a loading modal
	if(userSession === null){
		return (
			<>
				<LoadingModal show={true} />
				{ backWelcome && <Redirect to="/" />  }
			</>
		)
		 
	}else{
		return (
			<>
				<Header />
				
				<Footer />
			</>
		)
	}
}

export default Home;