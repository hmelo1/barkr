var config = {
  apiKey: "AIzaSyCkBLvbbfLEZfFz6NxtCrGxPpFdGLfsMeE",
  authDomain: "barkr-fbea4.firebaseapp.com",
  databaseURL: "https://barkr-fbea4.firebaseio.com",
  projectId: "barkr-fbea4",
  storageBucket: "barkr-fbea4.appspot.com",
  messagingSenderId: "288520692030"
};
firebase.initializeApp(config);

var app = angular.module('starter', ['ionic', 'firebase'])

.run(function($ionicPlatform) {
$ionicPlatform.ready(function() {
  // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
  // for form inputs)
  if (window.cordova && window.cordova.plugins.Keyboard) {
    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    cordova.plugins.Keyboard.disableScroll(true);

  }
  if (window.StatusBar) {
    // org.apache.cordova.statusbar required
    StatusBar.styleDefault();
  }
});
})

.config(function($stateProvider, $urlRouterProvider) {
$stateProvider

.state('app', {
  url: '/app',
  abstract: true,
  templateUrl: 'templates/menu.html'
})

.state('login', {
  url: '/login',
  templateUrl: 'templates/login.html',
  controller: 'AuthCtrl as auth'
})

.state('app.profile', {
  url: '/profile',
  views: {
    'menuContent': {
      templateUrl: 'templates/profile.html'
    }
  }
})

.state('app.home', {
  url: '/home',
  views: {
    'menuContent': {
      templateUrl: 'templates/home.html'
    }
  }
})

.state('app.settings', {
  url: '/settings',
  views: {
    'menuContent': {
      templateUrl: 'templates/settings.html'
    }
  }
});

// if none of the above states are matched, use this as the fallback
$urlRouterProvider.otherwise('/login');
});