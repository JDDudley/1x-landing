var StoreData = angular.module('1x');
StoreData.service('AdminService', function($http) {

            var url = 'https://localhost:8080/api/store'
    let as = this;
    as.addProduct = (product) => {
        $http.post(url, product)
    }
})