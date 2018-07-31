'use strict';

app.controller('SettingCtrl', function(Auth, $ionicPopup){
    var sett = this;

    sett.maxAge = 25;
    sett.bigDog = false;
    sett.smallDog = true;
    sett.mediumDog = false;

    sett.changeMaxAge = function(){
        
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
        Auth.logout();
    };
})