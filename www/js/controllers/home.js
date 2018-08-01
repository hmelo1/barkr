'use strict';

app.controller('HomeCtrl', function(Auth, $scope){
    var home = this;

    var maxAge = null;
    var smallDog = null;
    var mediumDog = null;
    var bigDog = null;

    function init(){
        home.profiles = [];

        maxAge = JSON.parse(window.localStorage.getItem('maxAge')) || 7;
    
        smallDog = JSON.parse(window.localStorage.getItem('smallDog'));
        smallDog = smallDog === null? true : smallDog;
    
        mediumDog = JSON.parse(window.localStorage.getItem('mediumDog'));
        mediumDog = mediumDog === null? true : mediumDog;
    
        bigDog = JSON.parse(window.localStorage.getItem('bigDog'));
        bigDog = bigDog === null? true : bigDog;
        
        
        Auth.getProfilesByAge(maxAge).$loaded().then(function(data){
            for (var i = 0; i < data.length; i++){
                var item = data[i];
                debugger;
                if((item.gender == 'smallDog' && smallDog) || (item.gender == 'mediumDog' && mediumDog) || (item.gender == 'bigDog' && bigDog)){
                    home.profiles.push(item);
                }
            }
        });
    }

    $scope.$on('$ionicView.enter', function(e){
        init();
    })

    home.nope = function(index){
        home.cardRemoved(index);
        console.log('Nope!');
    };
    
    home.like = function(index){
        home.cardRemoved(index);
        console.log('Like!');
    };

    home.cardRemoved = function(index){
        home.profiles.splice(index, 1);
    };

})