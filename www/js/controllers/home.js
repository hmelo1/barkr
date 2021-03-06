'use strict';

app.controller('HomeCtrl', function(Auth, $ionicLoading, $ionicModal, $scope, Like, Match, uid){
    var home = this;
    home.currentIndex = null;


    var maxAge = null;
    var smallDog = null;
    var mediumDog = null;
    var bigDog = null;

    var currentUid = uid;

	$scope.show = function() {
		$ionicLoading.show({
			template: '<ion-spinner icon="bubbles"></ion-spinner>'
		});
	};

	$scope.hide = function() {
		$ionicLoading.hide();
	}

    function init(){

        $scope.show()

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

                if((item.gender == 'smallDog' && smallDog) || (item.gender == 'mediumDog' && mediumDog) || (item.gender == 'bigDog' && bigDog)){
                    if(item.$id != currentUid){
                        home.profiles.push(item);
                    }
                }
            }

            Like.allLikesByUser(currentUid).$loaded().then(function(likesList) {
				home.profiles = _.filter(home.profiles, function(obj) {
					return _.isEmpty(_.where(likesList, {$id: obj.$id}));
				});
			});

            if(home.profiles.length > 0 ){
                home.currentIndex = home.profiles.length - 1;
                home.currentCardUid = home.profiles[home.currentIndex].$id;
            }

            $scope.hide();
        });
    }

    $scope.$on('$ionicView.enter', function(e){
        init();
    })

    home.nope = function(index){
        home.cardRemoved(index);
        console.log('Nope!');
    };
    
    home.like = function(index, like_uid){
        Like.addLike(currentUid, like_uid);
        Match.checkMatch(currentUid, like_uid);

        home.cardRemoved(index);
        console.log('Like!');
    };

    home.cardRemoved = function(index){
        home.profiles.splice(index, 1);

        if(home.profiles.length > 0 ){
            home.currentIndex = home.profiles.length - 1;
            home.currentCardUid = home.profiles[home.currentIndex].$id;
        }
    };

    $ionicModal.fromTemplateUrl('templates/info.html', {
        scope: $scope
    })
    .then(function(modal){
        $scope.modal = modal;
    });

    home.openModal = function(){
        home.info = Auth.getProfile(home.currentCardUid);
        $scope.modal.show();
    }

    home.closeModal = function(){
        $scope.modal.hide();
    }
})