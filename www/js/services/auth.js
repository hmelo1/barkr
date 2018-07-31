'use strict';

app.factory('Auth', function($firebaseAuth, $firebaseObject, $state) {
	var auth = $firebaseAuth();

	var Auth = {
		login: function() {
			var provider = new firebase.auth.FacebookAuthProvider();
			provider.addScope('public_profile, email, user_location, user_birthday, user_photos, user_about_me');
			return auth.$signInWithPopup(provider);
		},

		logout: function() {
			return auth.$signOut();
		}		

	};

	auth.$onAuthStateChanged(function(authData) {
		if(authData) {
			console.log('Logged in!');
		} else {
			$state.go('login');
			console.log('You need to login.');
		}
	});

	return Auth;

});