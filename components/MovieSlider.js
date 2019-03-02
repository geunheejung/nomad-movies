import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Swiper from 'react-native-swiper';
import Layout from '../constatns/Layout';
import MovieSlide from './MovieSlide';

const SWIPER_HEIGHT = Layout.height / 3;

const View = styled.View`
  height: ${SWIPER_HEIGHT};
`;

const Text = styled.Text`

`;

const MovieSlider = ({ movies }) => {
  if (!movies) return null;
  const filteredMovie = movies.filter(({ backdrop_path }) => backdrop_path !== null);
  return (
    <Swiper 
      showsPagination={false}
      autoplay
      autoplayTimeout={3}
      style={{
        height: SWIPER_HEIGHT,
      }}
     >
      {
        filteredMovie.map(movie => {
            const {
              overview = '',
              vote_average = 0,
              title = '',
              id = 0,
              backdrop_path = '',
              poster_path = '',
            } = movie;
            return (
              <View key={id}>
                <MovieSlide
                  overview={overview}
                  voteAvg={vote_average}
                  title={title}
                  id={id}
                  backgroundPhoto={backdrop_path}
                  posterPhoto={poster_path}
                />
              </View>
            )
          }          
        )
      }
      
    </Swiper>
  );
}

MovieSlider.propTypes = {
  movies: PropTypes.array,
};

export default MovieSlider;

