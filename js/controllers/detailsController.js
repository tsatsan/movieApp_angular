angular.module('pelimoviesApp')
  .controller('detailsController', function ($scope, $routeParams, apiMoviesService) {
    $scope.title = 'Details of the movie'
    var idMovie = $routeParams.id

    apiMoviesService.getMovieById(idMovie)
      .then(function (response) {
        $scope.detailMovie = response.data
  
        console.log($scope.detailMovie)
      })
  })
