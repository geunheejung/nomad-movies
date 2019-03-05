import React from 'react';
import PropTypes from 'prop-types';
import { TouchableWithoutFeedback } from 'react-native';
import styled from 'styled-components';
import { withNavigation } from 'react-navigation';
import MoviePoster from './MoviePoster';
import MovieRating from './MovieRating';
import Overview from './Overview';

const Container = styled.View`
	margin-right: 20px;
	align-items: center;
`;

const Title = styled.Text`
	margin-vertical: 5px;
	color: #fff;
	font-size: ${props => props.big ? "14px" : "12px"};
`;

const HContainer = styled.View`
	flex-direction: row;
	margin-bottom: 20px;
`;

const Column = styled.View`
	width: 60%;
	margin-left: 20px;
`;

const OverviewContainer = styled.View`
	margin-vertical: 10px;
`;

// navigation props는 navigation screnn만 받을 수 있다.
const MovieItem = ({ 
	id, 
	posterPhoto, 
	title, 
	voteAvg, 
	horizontal, 
	overview,
	isMovie, 
	navigation,
}) => (
	<TouchableWithoutFeedback		
		onPress={() => navigation.navigate({
			routeName: 'Detail',
			params: {
				id,
				isMovie,
			}
		})}
	>
		{
			horizontal ? (
				<HContainer>
					<MoviePoster path={posterPhoto} />
					<Column>
						<Title big>
							{title}
						</Title>
						<MovieRating votes={voteAvg} />
						<OverviewContainer>
							<Overview
								overview={overview}
								maxLength={150}
							/>
						</OverviewContainer>
					</Column>
				</HContainer>
			) : (
				<Container>
					<MoviePoster path={posterPhoto} />
					<Title>{title.length > 15 ? `${title.substring(0, 12)}...` : title}</Title>
					<MovieRating votes={voteAvg} />
				</Container>
			)
		}
	</TouchableWithoutFeedback>
);

MovieItem.propTypes = {
	id: PropTypes.number.isRequired,
	posterPhoto: PropTypes.string,
	title: PropTypes.string.isRequired,
	voteAvg: PropTypes.number.isRequired,
	horizontal: PropTypes.bool,
	overview: PropTypes.string,
	isMovie: PropTypes.bool,
}

MovieItem.defaultProps = {
	posterPhoto: '',
	horizontal: false,
	overview: '',
	isMovie: true,
}

export default withNavigation(MovieItem);
