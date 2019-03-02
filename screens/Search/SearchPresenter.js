import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import _isEmpty from 'lodash/isEmpty';
import Loader from '../../components/Loader';
import { BG_COLOR, GREY_COLOR, TINT_COLOR } from '../../constatns/Color';
import Layout from '../../constatns/Layout';
import Section from '../../components/Section';
import MovieItem from '../../components/MovieItem';


const Container = styled.View`
  flex: 1;
  height: ${Layout.height};
  background-color: ${BG_COLOR};
`;

const InputContainer = styled.View`
  align-items: center;
  margin-vertical: 20px;
`;

const Input = styled.TextInput`
  width: ${Layout.width / 2};
  padding: 5px 10px;
  border-radius: 20px;
  background-color: ${TINT_COLOR};
  text-align: center;
`;

const SearchResults = styled.ScrollView`
  margin: 20px 0 0 0;
`;

const NotFoundContainer = styled.View`
  margin-left: 20px;
`;

const NotFound = styled.Text`  
  color: ${TINT_COLOR};
  font-weight: 600;
`;

const SearchResult = ({
  title,
  results,
  renderResults,
}) => {
  if (!results) return null;

  return (
    <Section title={title}>
      {
        _isEmpty(results) ? (
          <NotFoundContainer>
            <NotFound>
              No Results...🤯🤯
            </NotFound>
          </NotFoundContainer>
        ) : renderResults(results)
      }
    </Section>
  );
}

const SearchPresenter = ({
  loading,
  movieResults,
  tvResults,
  searchTerm,
  onHandleSearchUpdate,
  onSubmitEditing
}) => (
  <Container>
    <InputContainer>
      <Input
        value={searchTerm}
        returnKeyType="search"
        placeholder="Search movies and tv"
        placeholderTextColor={GREY_COLOR}
        onChangeText={onHandleSearchUpdate}
        onSubmitEditing={onSubmitEditing}
      />
    </InputContainer>
    <SearchResults>
      {
        loading ? <Loader /> : (
          <>
            <SearchResult
              results={movieResults}
              title="🍿Movie Results"
              renderResults={results => (
                results
                  .filter(movie => movie.poster_path !== null)
                  .map(movie => (
                    <MovieItem
                      key={movie.id}
                      id={movie.id}
                      posterPhoto={movie.poster_path}
                      voteAvg={movie.vote_average}
                      title={movie.title}
                    />
                  ))
              )}
            />
            <SearchResult
              results={tvResults}
              title="📺TV Results"
              renderResults={results => (
                results
                  .filter(tv => tv.poster_path !== null)
                  .map(tv => (
                    <MovieItem
                      key={tv.id}
                      id={tv.id}
                      posterPhoto={tv.backdrop_path}
                      voteAvg={tv.vote_average}
                      title={tv.name}
                    />
                  ))
              )}
            />
          </>
        )
      }
    </SearchResults>
  </Container>
)

SearchPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  searchTerm: PropTypes.string,
  onHandleSearchUpdate: PropTypes.func.isRequired,
  onSubmitEditing: PropTypes.func.isRequired,
}

PropTypes.defaultProps = {
  movieResult: [],
  tvResults: [],
  searchTerm: ''
}

export default SearchPresenter;
