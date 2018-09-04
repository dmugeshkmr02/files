app.controller('formController', ['$scope','$http', 'calc_service', function($scope,$http, calc_service){

    $scope.calC = function()
    {
        calc_service.addValue(5,6);
    };

    $scope.loginSubmit = function(){
        var loginDetails = {
            username: $scope.username,
            password: $scope.password
        };
        alert(loginDetails['username']);

        $http({
            method :'post',
            url : "db/data",
            headers :'', 
            data : loginDetails
        }).then(function(response){
            alert("Login sucessfuly!!!");
        },function(error){
            alert("Login failed!!");
        })


        $http.get('../project.json')
             .then(function(response){
                 $scope.welcome = "Welcome";
             });
        
    };
   
   
}]);