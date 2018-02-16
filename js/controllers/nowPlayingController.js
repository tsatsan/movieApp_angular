angular.module('pelimoviesApp')
  .controller('nowPlayingController', function ($scope, apiMoviesService) {
    $scope.nowPlayingMovies = function () {
      apiMoviesService.getNowPlayingMovies()
        .then(function (response) {
          $scope.nowPlayingMovies = response.data.results
          console.log($scope.owPlayingMovies)
        })
    }
  })