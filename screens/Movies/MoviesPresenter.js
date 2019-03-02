import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from '../../components/Loader';
import { BG_COLOR } from '../../constatns/Color';
import MovieSlider from '../../components/MovieSlider';
import Section from '../../components/Section';

const Container = styled.ScrollView`
  background-color: ${BG_COLOR};
`;

const MoviePresenter = ({ 
  loading,
  popular,
  nowPlaying,
  upcomming
}) => {
  if (loading) return <Loader />;

  return (
    <Container>
      { nowPlaying ? <MovieSlider movies={nowPlaying} /> : null }
      { upcomming ? <Section movies={upcomming} title="Upcoming Movies" /> : null }
    </Container>
  );
}

export default MoviePresenter;
