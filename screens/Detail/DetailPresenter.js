import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from '../../components/Loader';

const Container = styled.View`  
`;

const DetailPresenter = (props) => {  
  const {
    id,
    posterPhoto,
    title,
    voteAvg,
    horizontal,
    overview,    
  } = props;

  return null;
}

DetailPresenter.propTypes = {
  id: PropTypes.number.isRequired,
	posterPhoto: PropTypes.string,
	title: PropTypes.string.isRequired,
	voteAvg: PropTypes.number.isRequired,	
	overview: PropTypes.string,
	isMovie: PropTypes.bool,
};

export default DetailPresenter;
