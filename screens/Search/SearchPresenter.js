import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import _isEmpty from 'lodash/isEmpty';
import Loader from '../../components/Loader';
import { BG_COLOR, GREY_COLOR, TINT_COLOR } from '../../constatns/Color';
import Layout from '../../constatns/Layout';
import NotFoundSection from '../../components/NotFoundSection';
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

const AllNotFoundContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: red;
  height: ${Layout.height / 1.7};
`;

const AllNotFound = styled.Text`
  font-size: 40px;
  font-weight: bold;
  color: ${TINT_COLOR};
`;

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
          movieResults && _isEmpty(movieResults) &&
          tvResults&& _isEmpty(tvResults) ? (
            <AllNotFoundContainer>
              <AllNotFound>
                Not Found...🙅‍♂️
              </AllNotFound>
            </AllNotFoundContainer>
          ) : (
            <>
              <NotFoundSection
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
              <NotFoundSection
                results={tvResults}
                title="📺TV Results"
                renderResults={results => (
                  results
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
                )}
              />
            </>
          )
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
