

var app = angular.module('angularjsNodejsTutorial',[]);

app.controller('myController', function($scope, $http) {
        $scope.message="";


        $scope.Submit = function() {
        
        var request = $http.get('/showall');
        console.log("=========test controler=========")
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


        $scope.Empty = function() {

        var request1 = $http.get('/Empty');
        request1.success(function(data) {

            $scope.data = data;
        });
        request1.error(function(data){
            console.log('err');
        });
        }; 

        $scope.Search = function() {
        var request = $http.get('/data/'+$scope.animation);
        console.log("test/........")
        request.success(function(data) {
            $scope.data = data;
        });
        request.error(function(data){
            console.log('err');
        });
        }; 


});


app.controller('genreController', function($scope, $http) {
        $scope.message="";

        $scope.Submit = function() {
    
        var request = $http.get('/genreshowall');
        
        request.success(function(data) {
            
            $scope.data = data;
            // console.log('test controller');
        });
        request.error(function(data){
            console.log('err');
        });
        };


        $scope.Top5 = function() {

        var request1 = $http.get('/genreTop5');
        request1.success(function(data) {
            
            $scope.data = data;
        });
        request1.error(function(data){
            console.log('err');
        });
    }; 

        $scope.Top20 = function() {

        var request1 = $http.get('/genreTop20');
        request1.success(function(data) {

            $scope.data = data;
        });
        request1.error(function(data){
            console.log('err');
        });
        }; 


        $scope.Empty = function() {

        var request1 = $http.get('/Empty');
        request1.success(function(data) {

            $scope.data = data;
        });
        request1.error(function(data){
            console.log('err');
        });
        }; 

});

app.controller('character_controller', function($scope, $http){

        $scope.allcharacters = function() {

        var request1 = $http.get('/allchars');
        request1.success(function(data) {

            $scope.data = data;
        });
        request1.error(function(data){
            console.log('err');
        });
        };

        $scope.action_characters = function(){

            var request1 = $http.get('/actionchars');
            request1.success(function(data) {

                $scope.data = data;
            });
            request1.error(function(data){
                console.log('err');
            });



        };

        $scope.adventure_characters = function(){

            var request1 = $http.get('/advchars');
            request1.success(function(data) {

                $scope.data = data;
            });
            request1.error(function(data){
                console.log('err');
            });



        };

        $scope.drama_characters = function(){

            var request1 = $http.get('/dramachars');
            request1.success(function(data) {

                $scope.data = data;
            });
            request1.error(function(data){
                console.log('err');
            });



        };

        $scope.romance_characters = function(){

            var request1 = $http.get('/romancechars');
            request1.success(function(data) {

                $scope.data = data;
            });
            request1.error(function(data){
                console.log('err');
            });



        };

        $scope.comedy_characters = function(){

            var request1 = $http.get('/comedychars');
            request1.success(function(data) {

                $scope.data = data;

            });
            request1.error(function(data){
                console.log('err');
            });



        };

        $scope.Search_char_Anime = function(){
            var request = $http.get('/character/'+$scope.anime);
            request.success(function(data){
                $scope.data = data;
            });
            request.error(function(data){
                console.log('err');
            });

        };

        $scope.Search_char_GandS = function(){
            console.log("get to the controller");
            var request = $http.get('/character/another/'+$scope.genrescore);
            request.success(function(data){
                $scope.data = data;
            });
            request.error(function(data){
                console.log('err');
            });

        };

        $scope.Search_char_name = function(){
            console.log("get to the controller");
            var request = $http.get('/character/another_query/'+$scope.charname);
            request.success(function(data){
                $scope.data = data;
            });
            request.error(function(data){
                console.log('err');
            });

        };


         

});  





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