'use strict';

app.controller('SettingCtrl', function(Auth, $ionicPopup) {
	var sett = this;

    sett.maxAge = window.localStorage.getItem("maxAge") || 7;
    
    sett.bigDog = JSON.parse(window.localStorage.getItem("bigDog"));
    sett.bigDog = sett.bigDog === null ? true : sett.bigDog

    sett.smallDog = JSON.parse(window.localStorage.getItem("smallDog"));
    sett.bismallDoggDog = sett.smallDog === null ? true : sett.smallDog

    sett.mediumDog = JSON.parse(window.localStorage.getItem("mediumDog"));
    sett.mediumDog = sett.mediumDog === null ? true : sett.mediumDog

    debugger;
    sett.changeMaxAge = function(){
        window.localStorage.setItem("maxAge", sett.maxAge);
    };

    sett.selectBigDog = function(){
        window.localStorage.setItem("bigDog", sett.bigDog);
    };

    sett.selectSmallDog = function(){
        window.localStorage.setItem("smallDog", sett.smallDog);
    };

    sett.selectMediumDog = function(){
        window.localStorage.setItem("mediumDog", sett.mediumDog);
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