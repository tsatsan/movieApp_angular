angular.module('pelimoviesApp')
  .controller('topRatedController', function ($scope, apiMoviesService) {
    $scope.topRatedMovies = function () {
      apiMoviesService.getTopRatedMovies()
        .then(function (response) {
          $scope.topRatedMovies = response.data.results
          console.log($scope.topRatedMovies)
        })
    }
  })
