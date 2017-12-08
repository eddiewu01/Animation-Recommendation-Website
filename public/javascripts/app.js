

var app = angular.module('angularjsNodejsTutorial',[]);

app.controller('myController', function($scope, $http) {
        $scope.message="";


        $scope.Submit = function() {
        
        var request = $http.get('/data/'+$scope.email);
        
        request.success(function(data) {
            
            $scope.data = data;
            // console.log('test controller');
        });
        request.error(function(data){
            console.log('err');
        });
};


        $scope.Top10 = function() {

        var request1 = $http.get('/Top10');
        request1.success(function(data) {
            
            $scope.data = data;
        });
        request1.error(function(data){
            console.log('err');
        });
    }; 



        $scope.Top50 = function() {

        var request1 = $http.get('/Top50');
        request1.success(function(data) {

            $scope.data = data;
        });
        request1.error(function(data){
            console.log('err');
        });
    }; 



});


// app.controller('myController2', function($scope, $http) {
//         $scope.Top10 = function() {

//         console.log('test controller')
//         var request = $http.get('/data');
//         request.success(function(data) {
            
//             $scope.data = data;
//         });
//         request.error(function(data){
//             console.log('err');
//         };
    
//     }; 
// });


// app.controller('insertController', function($scope, $http) {
//      $scope.Insert = function() {
//         var request = $http.get('/insert/'+$scope.login+'&'+$scope.name+'&'+$scope.sex+'&'+$scope.RelationshipStatus+'&'+$scope.Birthyear);
//         request.success(function(data) {
//             $scope.message = "Insertion successful!";
//         });
//         request.error(function(data){
//             console.log('err');
//         });
//     };
    
// });