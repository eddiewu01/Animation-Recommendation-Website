

var app = angular.module('angularjsNodejsTutorial',[]);


//for registering users
app.controller('loginctrl', function($scope, $http, UserService){
    var vm = this;
    vm.login = login;

    function login(user){
        UserService.login(user, function(response){
            console.log(response);
        });
    }


});




app.controller('registerctrl', function($scope, $http) {
      $scope.register = function() {
        var request = $http.get('/register/'+$scope.email+'&'+$scope.username+'&'+$scope.password+'&'+$scope.favanime+'&'+$scope.favgenre);

        request.success(function(data) {
            $scope.message = "Insertion successful!";
            // console.log("insert success");
        });
        request.error(function(data){
            console.log('err');
        });
    };



    $scope.showregister = function(){
        $scope.$emit('LOAD');
        var request1 = $http.get('/showregister');
        // console.log("test.......");
        request1.success(function(data) {

            $scope.data = data;
            $scope.$emit('UNLOAD');
        });
        request1.error(function(data){
            console.log('err');
        });
    };

});    
// ending registration

app.controller('myController', function($scope, $http) {


        $scope.Submit = function() {
             $scope.$emit('LOAD');
        var request = $http.get('/showall');
        // console.log("=========test controler=========")
        request.success(function(data) {
            
            $scope.data = data;
            $scope.$emit('UNLOAD');
            // console.log('test controller');
        });
        request.error(function(data){
            console.log('err');
        });
        };


        $scope.Top10 = function() {
            $scope.$emit('LOAD');
        var request1 = $http.get('/Top10');
        request1.success(function(data) {
            
            $scope.data = data;
            $scope.$emit('UNLOAD');
        });
        request1.error(function(data){
            console.log('err');
        });
    }; 

        $scope.members = function() {
            $scope.$emit('LOAD');
        var request1 = $http.get('/members');
        request1.success(function(data) {

            $scope.data = data;
            $scope.$emit('UNLOAD');
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
            $scope.$emit('LOAD');
        var request = $http.get('/data/'+$scope.animation);
        // console.log("test/........")
        request.success(function(data) {
            $scope.data = data;
            $scope.$emit('UNLOAD');
        });
        request.error(function(data){
            console.log('err');
        });
        }; 

      $scope.Insert = function() {
        $scope.$emit('LOAD');
        var request = $http.get('/insert/'+$scope.uname + '&' + $scope.name+'&'+$scope.score + '&' + $scope.review);

        request.success(function(data) {
            $scope.message = "Insertion successful!";

        });
        request.error(function(data){
            console.log('err');
        });
        };       


        $scope.showreview = function() {
            $scope.$emit('LOAD');
        var request1 = $http.get('/showreview');
        // console.log("test.......");
        request1.success(function(data) {

            $scope.data = data;
            $scope.$emit('UNLOAD');
        });
        request1.error(function(data){
            console.log('err');
        });
        }; 


        $scope.premrecommend = function(){
            $scope.$emit('LOAD');
        var request1 = $http.get('/prem_recommend');
        // console.log("test.......");
        request1.success(function(data) {

            $scope.data = data;
            $scope.$emit('UNLOAD');
        });
        request1.error(function(data){
            console.log('err');
        });
        };

});


app.controller('loadController', function($scope, $http){
    $scope.$on('LOAD',function(){$scope.loading=true});
    $scope.$on('UNLOAD',function(){$scope.loading=false});
});


app.controller('genreController', function($scope, $http) {

        $scope.submitvote = function(){
            $scope.$emit('LOAD');
        var request = $http.get('/data2/'+$scope.uname + '&' + $scope.genre1 + '&' + $scope.comment);
        // console.log("test/........")
        request.success(function(data) {
            // $scope.$emit('UNLOAD');
        });
        request.error(function(data){
            console.log('err');
        });
        };


        $scope.showvotes = function(){
            $scope.$emit('LOAD');
        var request1 = $http.get('/showvotes');
        // console.log("test.......");
        request1.success(function(data) {
            $scope.data = data;
            $scope.$emit('UNLOAD');
        });
        request1.error(function(data){
            console.log('err');
        });
        }; 



        $scope.Search = function() {
            console.log('enter');
            $scope.$emit('LOAD');
        var request = $http.get('/data1/'+$scope.genre);
        // console.log("test/........")
        request.success(function(data) {
            $scope.data = data;
            $scope.$emit('UNLOAD');
        });
        request.error(function(data){
            console.log('err');
        });
        }; 


        $scope.Submit = function() {
            $scope.$emit('LOAD');
        var request = $http.get('/genreshowall');
        
        request.success(function(data) {
            
            $scope.data = data;
            $scope.$emit('UNLOAD');
            // console.log('test controller');
        });
        request.error(function(data){
            console.log('err');
        });
        };


        $scope.Top5 = function() {
        $scope.$emit('LOAD');
        var request1 = $http.get('/genreTop5');
        request1.success(function(data) {

            
            $scope.data = data;
            $scope.$emit('UNLOAD');
        });
        request1.error(function(data){
            console.log('err');
        });
    }; 

        $scope.Animationgenre = function() {
            $scope.$emit('LOAD');
        var request1 = $http.get('/animation_per_genre');
        request1.success(function(data) {

            $scope.data = data;
            $scope.$emit('UNLOAD');
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



// character page queries are not that complex, so loading not yet added for them!!! 
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

        $scope.num_chars_per_anime = function(){
            var request = $http.get('/numcharsperanime');
            request.success(function(data){
                $scope.data = data;
            });
            request.error(function(data){
                console.log('err');
            });
        };



        $scope.naruto = function() {

        var request11 = $http.get('/naruto1');
        console.log("naruto app js test")
        request11.success(function(data) {

            $scope.data = data;
        });
        request11.error(function(data){
            console.log('err');
        });
        };

        $scope.sakura = function() {

        var request11 = $http.get('/sakura');
        console.log("naruto app js test")
        request11.success(function(data) {

            $scope.data = data;
        });
        request11.error(function(data){
            console.log('err');
        });
        };

        $scope.sasuke = function() {

        var request11 = $http.get('/sasuke');
        console.log("naruto app js test")
        request11.success(function(data) {

            $scope.data = data;
        });
        request11.error(function(data){
            console.log('err');
        });
        };


        $scope.Goku = function() {

        var request11 = $http.get('/Goku');
        console.log("naruto app js test")
        request11.success(function(data) {

            $scope.data = data;
        });
        request11.error(function(data){
            console.log('err');
        });
        };

        $scope.Piccolo = function() {

        var request11 = $http.get('/Piccolo');
        console.log("naruto app js test")
        request11.success(function(data) {

            $scope.data = data;
        });
        request11.error(function(data){
            console.log('err');
        });
        };

        $scope.Krillin = function() {

        var request11 = $http.get('/Krillin');
        console.log("naruto app js test")
        request11.success(function(data) {

            $scope.data = data;
        });
        request11.error(function(data){
            console.log('err');
        });
        };


        $scope.Monkey = function() {

        var request11 = $http.get('/Monkey');
        console.log("naruto app js test")
        request11.success(function(data) {

            $scope.data = data;
        });
        request11.error(function(data){
            console.log('err');
        });
        };

        $scope.Roronoa = function() {

        var request11 = $http.get('/Roronoa');
        console.log("naruto app js test")
        request11.success(function(data) {

            $scope.data = data;
        });
        request11.error(function(data){
            console.log('err');
        });
        };

        $scope.Sabo = function() {

        var request11 = $http.get('/Sabo');
        console.log("naruto app js test")
        request11.success(function(data) {

            $scope.data = data;
        });
        request11.error(function(data){
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



// app.controller('narutoController', function($scope, $http) {
//      $scope.naruto = function() {
//         var request = $http.get('/naruto');
//         console.log("========naruto test=========");
//         request.success(function(data) {
//             $scope.message = "Insertion successful!";
//         });
//         request.error(function(data){
//             console.log('err');
//         });
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