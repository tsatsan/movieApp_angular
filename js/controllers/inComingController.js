angular.module('pelimoviesApp')
  .controller('inComingController', function ($scope, apiMoviesService) {
    $scope.inComingMovies = function () {
      apiMoviesService.getInComingMovies()
        .then(function (response) {
          $scope.inComingMovies = response.data.results
          console.log($scope.inComingMovies)
        })
    }
  })
  