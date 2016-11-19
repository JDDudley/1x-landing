var StoreData = angular.module('1x');
StoreData.controller('myCtrl', function ($http) {
    $http({
        method: 'GET',
        url: 'http://localhost:8080/api/store'
    }).then(function successCallback(response) {
        return 200
    }, function errorCallback(response) {
        return 404
    })
})
