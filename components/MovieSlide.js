import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withNavigation } from 'react-navigation';
import { TINT_COLOR } from '../constatns/Color'
import makePhotoUrl from '../utils/makePhotoUrl';
import Layout from '../constatns/Layout';
import MoviePoster from './MoviePoster';
import MovieRating from './MovieRating';
import Overview from './Overview';

const Container = styled.View`
  position: relative;
  flex: 1;
`;

const Content = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;  
  justify-content: space-between;
  padding-horizontal: 30px;
`;

const Column = styled.View`
  width: 60%;
  align-items: flex-start;
`;

const Title = styled.Text`
  color: ${TINT_COLOR};
  font-size: 14px;
  font-weight: 600;
`;

const OverviewContainer = styled.View`
  margin-bottom: 10px;

`;

const BgImage = styled.Image`
  width:${Layout.width};
  height:${Layout.height / 3};
  opacity: 0.3;
  position: absolute;
`;

const VoteContiner = styled.View`
  margin: 10px 0;
`;

// 터치 시 Opacity 효과
const BtnContainer = styled.TouchableOpacity`
  padding: 5px;
  border-radius: 2.5px;
  background-color: #e74c3c;
`;

const BtnText = styled.Text`
  color: ${TINT_COLOR};
  font-size: 12px;
`;

const MovieSlide = ({
  id,
  posterPhoto,
  backgroundPhoto,
  title,
  voteAvg,
  overview,
  navigation: {
    navigate
  },
}) => {
  return (
    <Container>
      <BgImage 
        widht={200}
        height={Layout.height / 3} 
        source={{ uri: makePhotoUrl(backgroundPhoto) }}
      />
      <Content>
        <MoviePoster 
          path={backgroundPhoto}
        />
        <Column>
          <Title>{title}</Title>
          {
            !!voteAvg ? (
              <VoteContiner>
                <MovieRating
                  inSlide
                  votes={voteAvg}
                />
              </VoteContiner>
            ) : null
          }
          <OverviewContainer>
            <Overview overview={overview} />
          </OverviewContainer>
          <BtnContainer 
            onPress={() => navigate({ 
              routeName: 'Detail',
              params: {                
                isMovie: true,
                id,
                posterPhoto,
                backgroundPhoto,
                title,
                voteAvg,
                overview,
              }
            })}
          >
            <BtnText>More Details</BtnText>
          </BtnContainer>
        </Column>
      </Content>
    </Container>
  )
}

MovieSlide.propTypes = {
  id: PropTypes.number.isRequired,
  posterPhoto: PropTypes.string.isRequired,
  backgroundPhoto: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  voteAvg: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
};

export default withNavigation(MovieSlide);
