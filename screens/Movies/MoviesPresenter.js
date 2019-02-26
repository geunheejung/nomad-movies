import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import Loader from '../../components/Loader';

const MoviePresenter = ({
  loading
}) => (
  <>
    {loading ? <Loader /> : <Text>Movies</Text>}
  </>
);

MoviePresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  upcoming: PropTypes.array,
  popular: PropTypes.array,
  nowPlaying: PropTypes.array,
}

export default MoviePresenter;