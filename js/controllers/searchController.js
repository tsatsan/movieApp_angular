angular.module('pelimoviesApp')
  .controller('searchController', function ($scope, apiMoviesService) {
    $scope.searchMovie = function () {
      apiMoviesService.getMovies($scope.movieQuery)
        .then(function (response) {
          $scope.movies = response.data.results
          console.log($scope.movies)
        })
    }
    $scope.movieSelection = function () {
      var idMovie = $scope.movieSelected
      console.log(idMovie)
    }
  })
