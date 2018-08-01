'use strict';

app.controller('MatchCtrl', function(Match, Auth, uid, $scope, Like, $ionicModal){
    
    var matc = this;

    function init(){
        matc.list = [];

        Match.allMatchesByUser(uid).$loaded().then(function(data){
            for (var i = 0; i < data.length; i++){
                var item = data[i];

                Auth.getProfile(item.$id).$loaded().then(function(profile){
                    matc.list.push(profile);
                })
            }
        });
    };

    $scope.$on('$ionicView.enter', function(e){
        init();
    });

    matc.unmatch = function(matchUid){
        Like.removeLike(uid, matchUid);
        Match.removeMatch(uid, matchUid);

        init();
    };

    $ionicModal.fromTemplateUrl('templates/message.html', {
        scope: $scope
    })
    .then(function(modal){
        $scope.modal = modal;
    })

    matc.openMessageModal = function(){
        $scope.modal.show();
    };

    matc.closeMessageModal = function(){
        $scope.modal.hide();
    };

})