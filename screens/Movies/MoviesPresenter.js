import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import styled from 'styled-components';
import { BG_COLOR } from '../../constatns/Color';
import Loader from '../../components/Loader';
import MovieSlider from '../../components/MovieSlider';

// react-native에서는 ScrollView라고 명시해줘야 스크롤링이 가능한 View가 생성.
const Container = styled.ScrollView`
  background-color: ${BG_COLOR}
`;

const MoviePresenter = ({
  loading,
  movies
}) => (
  loading ? (
    <Loader />
  ) : (
    <Container>
      <MovieSlider movies={movies} />
    </Container>
  )
);

MoviePresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  upcoming: PropTypes.array,
  popular: PropTypes.array,
  nowPlaying: PropTypes.array,
}

export default MoviePresenter;