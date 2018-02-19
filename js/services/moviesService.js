angular.module('pelimoviesApp')
  .factory('apiMoviesService', function ($http) {
    var api_key = '201cdf0b3213bde3307da905afb0f471'

    function _getMovies (query) {
      var urlSearchMovie = 'https://api.themoviedb.org/3/search/movie?api_key=' + api_key + '&query=' + query
      return $http.get(urlSearchMovie)
    }

    function _getPopularMovies () {
      var urlPopularMovies = 'https://api.themoviedb.org/3/discover/movie?api_key=' + api_key + '&sort_by=popularity.desc'
      return $http.get(urlPopularMovies)
    }

    function _getInComingMovies () {
      var urlInComingMovies = 'https://api.themoviedb.org/3/movie/upcoming?api_key=' +  api_key + '&language=en-US&page=1'
      return $http.get(urlInComingMovies)
    }

    function _getMovieById (idMovie) {
      var urlMovieById = 'https://api.themoviedb.org/3/movie/' + idMovie + '?api_key=' + api_key + '&language=en-US'
      return $http.get(urlMovieById)
    }
    function _getTopRatedMovies () {
      var urlTopRatedMovies = 'https://api.themoviedb.org/3/movie/top_rated?api_key=' + api_key + '&language=en-US&page=1'
      return $http.get(urlTopRatedMovies)
    }

    function _getNowPlayingMovies () {
      var urlNowPlayingMovies = 'https://api.themoviedb.org/3/movie/now_playing?api_key=' + api_key + '&language=en-US&page=1'
      return $http.get(urlNowPlayingMovies)
    }

    return {
      getMovies: _getMovies,
      getPopularMovies: _getPopularMovies,
      getInComingMovies: _getInComingMovies,
      getMovieById: _getMovieById,
      getTopRatedMovies: _getTopRatedMovies,
      getNowPlayingMovies: _getNowPlayingMovies
    }
  })
