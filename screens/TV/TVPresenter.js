import React from 'react';
import { Text } from 'react-native';
import Loader from '../../components/Loader';

const TvPresenter = ({
  loading
}) => (
  <>
    {loading ? <Loader /> : <Text>TV</Text>}
  </>
);

TvPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  airingToday: PropTypes.array,
  popular: PropTypes.array,
  topRated: PropTypes.array,
};

export default TvPresenter;