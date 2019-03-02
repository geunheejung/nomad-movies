import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import makePhotoUrl from '../utils/makePhotoUrl';
import Layout from '../constatns/Layout';
import MoviePoster from './MoviePoster';

const Container = styled.View`
  position: relative;
  flex: 1;
`;

const Content = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;  
  padding-horizontal: 30px;
`;

const BgImage = styled.Image`
  width:${Layout.width};
  height:${Layout.height / 3};
  opacity: 0.5;
  position: absolute;

`;

const MovieSlide = ({
  backgroundPhoto,
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

export default MovieSlide;