import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from '../../components/Loader';
import { BG_COLOR } from '../../constatns/Color';
import MovieSlider from '../../components/MovieSlider';
import Section from '../../components/Section';
import MovieItem from '../../components/MovieItem';

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
      { upcomming
        ? (
          <Section title="Upcoming Movies">
            {
              upcomming.filter(movie => movie.poster_path !== null).map(movie => (
                <MovieItem
                  key={movie.id}
                  id={movie.id}
                  posterPhoto={movie.poster_path}
                  voteAvg={movie.vote_average}
                  title={movie.title}
                />
              ))
            }
          </Section>
        )
        : null }
    </Container>
  );
}

export default MoviePresenter;
