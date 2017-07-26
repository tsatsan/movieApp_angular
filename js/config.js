angular.module('pelimoviesApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'templates/search.html',
        controller: 'searchController'
      })
      .when('/movie/:id', {
        templateUrl: 'templates/details.html',
        controller: 'detailsController'
      })
      .when('/popular', {
        templateUrl: 'templates/popular.html',
        controller: 'popularController'
      })
      .when('/inComing', {
        templateUrl: 'templates/inComing.html',
        controller: 'inComingController'
      })
  })
