(function(){
    "use strict"
    angular
        .module('myApp')
        .controller("ProductsController", ProductsControllerFunc)
        .controller("RegisterController", RegisterControllerFunc)
        .controller("LoginController", LoginControllerFunc)
        .controller("LogoutController", LogoutControllerFunc)
        .controller("ProductsDetailController", ProductsDetailControllerFunc)


        ProductsControllerFunc.$inject = ['Products','$location', '$uibModal'];
        function ProductsControllerFunc(Products, $location, $uibModal) {
            var vm = this;
            // if (!sessionStorage.token) {
            //   $location.path('/login');
            // }
            vm.open = function (id) {
              $uibModal.open({
                templateUrl: 'partials/products.detail.html',
                controller: 'ProductsDetailController',
                size: '',
                resolve: {
                  productId: function () {
                    return id;
                  }
                }
              })
            }
            Products.products({}, {}).$promise.then(function(data) {
              vm.url = '//smktesting.herokuapp.com/static/';
              vm.products = data;
            }).catch(function(response) {
              console.log(response);
            });
        }

        RegisterControllerFunc.$inject = ['$location', 'Register', 'toastr'];
        function RegisterControllerFunc($location, Register, toastr){
            var vm = this;
            vm.submit = function() {
                Register.registration({}, {'username': vm.user, 'password': vm.password}).$promise.then(function(data) {
                  var success = data['success'];
                  if (success) {
                    sessionStorage.token = data['token'];
                    $location.path('/products');
                  } else {
                    console.log(data['message']);
                  }
                }).catch(function(response) {
                  console.log(response);
                });
            }
         }

        LoginControllerFunc.$inject = ['$location', 'Login', 'toastr'];
        function LoginControllerFunc($location, Login, toastr){
            var vm = this;
            vm.submit = function() {
                Login.login({}, {'username': vm.user, 'password': vm.password}).$promise.then(function(data) {
                  var success = data['success'];
                  if (success) {
                    sessionStorage.token = data['token'];
                    $location.path('/products');
                  } else {
                    console.log(data['message']);
                  }
                }).catch(function(response) {
                  console.log(response);
                });
            }
         }

        LogoutControllerFunc.$inject = ['$location'];
        function LogoutControllerFunc($location) {
            var vm = this;
            delete sessionStorage.token;
            $location.path('/products');
        }

        ProductsDetailControllerFunc.$inject = ['$scope', 'ProductsDetail', 'productId'];
        function ProductsDetailControllerFunc($scope, ProductsDetail, productId) {
            ProductsDetail.detail({id: productId}, {}).$promise.then(function(data) {
              $scope.comments = data;
            }).catch(function(response) {
              console.log(response);
            });
        }

})();
