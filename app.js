var app = angular.module('researchApp', ['ui.router'])

  .config(mainRouter)

  function mainRouter($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
         url: '/home'
        ,templateUrl: 'app/views/home.html'
        ,controller: 'mainCtrl'
        ,controllerAs: 'main'
      })

      $urlRouterProvider.otherwise('/home')
  }
