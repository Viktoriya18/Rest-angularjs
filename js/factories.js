(function(){
    "use strict"
    angular
        .module('myApp')
        .factory('Register', factoryRegister)
        .factory('Login', factoryLogin)
        .factory('Products', factoryProducts)
        .factory('ProductsDetail', factoryProductsDetail);

            factoryRegister.$inject = ['$resource'];
            function factoryRegister($resource) {
                var Register = $resource('//smktesting.herokuapp.com/api/register/ ', {}, {
                    'registration': {method:'POST'}
                });
                return Register;
            };

            factoryLogin.$inject = ['$resource'];
            function factoryLogin($resource) {
                var Login = $resource('//smktesting.herokuapp.com/api/login/ ', {}, {
                    'login': {method:'POST'}
                });
                return Login;
            };

            factoryProducts.$inject = ['$resource'];
            function factoryProducts($resource) {
                var Products = $resource('//smktesting.herokuapp.com/api/products/ ', {}, {
                    'products': {method:'GET', isArray: true}
                });
                return Products;
            };

            factoryProductsDetail.$inject = ['$resource'];
            function factoryProductsDetail($resource) {
                var ProductsDetail = $resource('//smktesting.herokuapp.com/api/reviews/:id', {id: '@id'}, {
                    'save': {method:'POST'},
                    'detail': {method:'GET', isArray: true}
                });
                return ProductsDetail;
            };

})();
