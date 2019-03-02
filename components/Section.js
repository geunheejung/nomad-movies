import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TINT_COLOR } from '../constatns/Color';
import MovieItem from './MovieItem';

const Container = styled.View`
	margin-vertical: 20px;
`;

const ScrollView = styled.ScrollView`

`;

const Title = styled.Text`
	margin-bottom: 10px;
	padding-left: 20px;
	color: #fff;
	font-weight: 600;		
`;

const Section = ({ movies, title }) => (
	<Container>
		<Title>{title}</Title>
		<ScrollView
			horizontal
		>{
			movies.filter(movie => movie.poster_path !== null).map(movie => (
				<MovieItem
					key={movie.id}
					id={movie.id}
					posterPhoto={movie.poster_path}
					voteAvg={movie.vote_average}
					title={movie.title}
				/>
			))
		}</ScrollView>
	</Container>
);

Section.propTypes = {
	movies: PropTypes.array.isRequired,
	title: PropTypes.string.isRequired,
}

export default Section;
