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

const Title = styled.Text`
  margin-bottom: 10px;
  padding-left: 20px;
  color: #fff;
  font-weight: 600;
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
      { popular
        ? (
          <Section
            title="Popular"
            horizontal={false}
          >
            {
              upcomming.filter(movie => movie.poster_path !== null).map(movie => (
                <MovieItem
                  key={movie.id}
                  id={movie.id}
                  posterPhoto={movie.poster_path}
                  voteAvg={movie.vote_average}
                  title={movie.title}
                  overview={movie.overview}
                  horizontal
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
