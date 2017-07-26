angular.module('pelimoviesApp')
  .controller('popularController', function ($scope, apiMoviesService) {
    $scope.popularMovies = function () {
      apiMoviesService.getPopularMovies()
        .then(function (response) {
          $scope.popularMovies = response.data.results
          console.log($scope.popularMovies)
        })
    }
  })
