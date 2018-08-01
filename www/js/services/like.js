'use strict';

app.factory("Like", function(FURL, $firebaseArray){

    var ref = new Firebase(FURL);

    var Like = {

    };

    return Like;

})