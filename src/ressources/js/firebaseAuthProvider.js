import React, { useEffect } from 'react'

import firebase from './firebaseConfig2'
const firebaseui = require('firebaseui');

const FirebaseAuthProvider = ({goHome, setGoHome}) => {

	const uiConfig = {
	  callbacks: {
	    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
	    	console.clear()
	    	console.log("connected")
	      // User successfully signed in.
	      // Return type determines whether we continue the redirect automatically
	      // or whether we leave that to developer to handle.
	      return true;
	    },
	    uiShown: function() {
	      // The widget is rendered.
	      // Hide the loader.
	      document.getElementById('loader').style.display = 'none';
	    }
	  },
	  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
	  signInFlow: 'popup',
	  signInSuccessUrl: '/home',
	  signInOptions: [
	    // Leave the lines as is for the providers you want to offer your users.
	    {
	      provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
	      recaptchaParameters: {
	        type: 'image', // 'audio'
	        size: 'normal', // 'invisible' or 'compact'
	        badge: 'bottomleft' //' bottomright' or 'inline' applies to invisible.
	      },
	      defaultCountry: 'CM'
	    },
	    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    	firebase.auth.FacebookAuthProvider.PROVIDER_ID,

	  ],
	  // Terms of service url.
	  tosUrl: '/termsofservice',
	  // Privacy policy url.
	  privacyPolicyUrl: '/privacypolicy'
	};


	const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(firebase.auth())

	useEffect(() => {
		ui.start('#firebaseui-auth-container', uiConfig);
	}, [])



	return (
		<>
			<div id="loader">Loading...</div>
			<div className="bottom" id="firebaseui-auth-container">
				
			</div>
		</>
		)
}



export default FirebaseAuthProvider
