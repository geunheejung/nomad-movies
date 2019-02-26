import React from 'react';
import { Text } from 'react-native';
import Loader from '../../components/Loader';

export default ({
  loading
}) => (
  <>
    {loading ? <Loader /> : <Text>TV</Text>}
  </>
);