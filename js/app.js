(function() {
	    "use strict"
	    angular
	        .module('myApp', ['ui.router', 'ngResource', 'toastr', 'ui.bootstrap'])
	        .config(
	        	function($stateProvider, $urlRouterProvider) {
	        		$urlRouterProvider.otherwise('/products');
	        		$stateProvider
	        		
	        		.state('products', {
			            url: '/products',
			            templateUrl: 'partials/products.html',
			            controller: 'ProductsController',
	                    controllerAs: 'vm'
			        })
			        .state('register', {
			            url: '/register',
			            templateUrl: 'partials/register.html',
			            controller: 'RegisterController',
	                    controllerAs: 'vm'
			        })
			        .state('login', {
			            url: '/login',
			            templateUrl: 'partials/login.html',
			            controller: 'LoginController',
	                    controllerAs: 'vm'
			        })

			        .state('logout', {
			            url: '/logout',
			            templateUrl: 'partials/logout.html',
			            controller: 'LogoutController',
	                    controllerAs: 'vm'
			        })


			    });
	}());
