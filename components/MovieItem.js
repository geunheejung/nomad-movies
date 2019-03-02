import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MoviePoster from './MoviePoster';
import MovieRating from './MovieRating';

const Container = styled.View`
	margin-right: 20px;
	align-items: center;
`;

const Title = styled.Text`
	margin-vertical: 5px;
	color: #fff;
	font-size: 12px;
`;

const MovieItem = ({ id, posterPhoto, title, voteAvg }) => (
	<Container>
		<MoviePoster path={posterPhoto} />
		<Title>{title.length > 15 ? `${title.substring(0, 12)}...` : title}</Title>
		<MovieRating votes={voteAvg} />
	</Container>
);

MovieItem.propTypes = {
	id: PropTypes.number.isRequired,
	posterPhoto: PropTypes.string,
	title: PropTypes.string.isRequired,
	voteAvg: PropTypes.number.isRequired,
}

MovieItem.defaultProps = {
	posterPhoto: ''
}

export default MovieItem;
