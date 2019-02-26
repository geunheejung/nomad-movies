import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../../components/Loader';
import MovieSlider from '../../components/MovieSlider';

const TvPresenter = ({
  loading,
  movies
}) => (
  <>
    {loading ? <Loader /> : <MovieSlider movies={movies} />}
  </>
);

TvPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  airingToday: PropTypes.array,
  popular: PropTypes.array,
  topRated: PropTypes.array,
};

export default TvPresenter;