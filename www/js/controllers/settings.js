'use strict';

app.controller('SettingCtrl', function(Auth, $ionicPopup) {
	var sett = this;

    sett.maxAge = window.localStorage.getItem("maxAge") || 25;
    
    sett.bigDog = JSON.parse(window.localStorage.getItem("bigDog"));
    sett.bigDog = sett.bigDog === null ? true : sett.bigDog

    sett.smallDog = JSON.parse(window.localStorage.getItem("smallDog"));
    sett.bismallDoggDog = sett.smallDog === null ? true : sett.smallDog

    sett.mediumDog = JSON.parse(window.localStorage.getItem("mediumDog"));
    sett.mediumDog = sett.mediumDog === null ? true : sett.mediumDog

    sett.changeMaxAge = function(){
        window.localStorage.setItem("maxAge", sett.maxAge);
    };

    sett.selectBigDog = function(){
        
    };

    sett.selectSmallDog = function(){
        
    };

    sett.selectMediumDog = function(){
        
    };

    sett.logout = function(){
        $ionicPopup.confirm({
            title: 'Logout',
            template: 'Do you want to logout?'
        })
        .then(function(res){
            if(res){
                Auth.logout();
            }
        })
    };
})