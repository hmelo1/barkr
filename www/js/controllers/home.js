'use strict';;

app.controller('HomeCtrl', function(Auth){
    var home = this;

    var maxAge = null;
    var smallDog = null;
    var mediumDog = null;
    var bigDog = null;

    home.profiles = [];

    maxAge = JSON.parse(window.localStorage.getItem('maxAge')) || 25;

    smallDog = JSON.parse(window.localStorage.getItem('smallDog'));
    smallDog = smallDog === null ? true : smallDog;

    mediumDog = JSON.parse(window.localStorage.getItem('mediumDog'));
    mediumDog = mediumDog === null ? true : mediumDog;

    bigDog = JSON.parse(window.localStorage.getItem('bigDog'));
    bigDog = bigDog === null ? true : bigDog;
    
    Auth.getProfileByAge(maxAge).$loaded().then(function(data){
        for (var i = 0; i < data.length; i++){
            var item = data[i];

            if((item.gender === 'smallDog' && smallDog) || (item.gender === 'mediumDog' && mediumDog) || (item.gender === 'bigDog' && bigDog)){
                home.profiles.push(item);
            }
        }
    })
})