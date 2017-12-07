var app = angular.module('anime_recommendation',[]);
app.controller('myController', function($scope, $http) {
        $scope.message="";
        $scope.Submit = function() {
        var request = $http.get('/data/'+$scope.email);
        request.success(function(data) {
            $scope.data = data;
        });
        request.error(function(data){
            console.log('err');
        });
    
    }; 
});

// To implement "Insert a new record", you need to:
// - Create a new controller here
// - Create a corresponding route handler in routes/index.js

app.controller('insertController', function($scope, $http) {
        $scope.message = "";
        $scope.Insert = function() {
        var request1 = $http.get('/insert/'+$scope.login + '/' + $scope.name + '/' + $scope.sex + '/' + $scope.RelationshipStatus + '/' + $scope.Birthyear);
        //var request2 = $http.get('/insert/data/'+$scope.name);
        //var request3 = $http.get('/insert/data/'+$scope.sex);
        //var request4 = $http.get('/insert/data/'+$scope.RelationshipStatus);
        //var request5 = $http.get('/insert/data/'+$scope.Birthyear);
        request1.success(function(data) {
            $scope.data = data;
        });
        request1.error(function(data){
            console.log('err');
        });
    
    }; 
});

/*
app.controller('showfamilyController', function($scope, $http){
    $scope.message = "";

});
*/
