import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BG_COLOR } from '../../constatns/Color';
import Layout from '../../constatns/Layout';
import Loader from '../../components/Loader';
import Section from '../../components/Section';
import MovieItem from '../../components/MovieItem';

const Container = styled.View`
  height: ${Layout.height};
  background-color: ${BG_COLOR};
`;

const TvPresenter = ({
  loading,
  airingToday,
  popular,
  airingThisWeek
}) => {
  if (loading) return <Loader />

  return (
    <Container>
      {
        airingToday ? (
          <Section title="Airing Today">
            {
              airingToday
                .filter(tv => tv.poster_path !== null)
                .map(tv => (
                  <MovieItem
                    isMovie={false}
                    key={tv.id}
                    id={tv.id}
                    posterPhoto={tv.backdrop_path}
                    voteAvg={tv.vote_average}
                    title={tv.name}
                  />
                ))
            }
          </Section>
        ) : null
      }
      {
        airingThisWeek ? (
          <Section title="Airing This Week">
            {
              airingThisWeek
                .filter(tv => tv.poster_path !== null)
                .map(tv => (
                  <MovieItem
                    isMovie={false}  
                    key={tv.id}
                    id={tv.id}
                    posterPhoto={tv.backdrop_path}
                    voteAvg={tv.vote_average}
                    title={tv.name}
                  />
                ))
            }
          </Section>
        ) : null
      }
      {
        popular ? (
          <Section title="Popular">
            {
              popular
                .filter(tv => tv.poster_path !== null)
                .map(tv => (
                  <MovieItem
                    isMovie={false} 
                    key={tv.id}
                    id={tv.id}
                    posterPhoto={tv.backdrop_path}
                    voteAvg={tv.vote_average}
                    title={tv.name}
                  />
                ))
            }
          </Section>
        ) : null
      }
    </Container>
  )
}

TvPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  airingToday: PropTypes.array,
  popular: PropTypes.array,
  topRated: PropTypes.array,
};

export default TvPresenter;
