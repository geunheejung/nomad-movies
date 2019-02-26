import axios from 'axios';

const api = axios.create({
  baseURL: `https://api.themoviedb.org/3/`,
  params: {
    api_key: '7b1483ab2e6d63b29bb568807f3cc8a3',
    langauge: 'ko-KR'
  }
});

export const movies = {
  getNowPlaying: () => api.get('movie/now_playing'),
  getUpcoming: () => api.get('movie/upcoming'),
  getPopular: () => api.get('movie/popular'),
  getMovieDetail: movieId => api.get(`movie/${movieId}`, {
    params: {
      append_to_response: 'vidoes'
    }
  }),
  search: term => api.get('search/movie', {
    params: {
      query: encodeURIComponent(term),
    }
  }),
}

export const tvApi = {
  topRated: () => api.get('tv/top_rated'),
  popular: () => api.get('tv/popular'),
  airingToday: () => api.get('tv/airing_today'),
  showDetail: tvId => api.get(`tv/${tvId}`, {
    params: {
      append_to_response: 'vidoes'
    }
  }),
  search: term => api.get('search/tv', {
    params: {
      query: encodeURIComponent(term),
    }
  }),
}

export default api;