import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BG_COLOR, TINT_COLOR } from '../../constatns/Color';
import Layout from '../../constatns/Layout';
import makePhotoUrl from '../../utils/makePhotoUrl';
import MoviePoster from '../../components/MoviePoster';
import MovieRating from '../../components/MovieRating';

const Container = styled.ScrollView`  
  flex: 1;  
  background-color: ${BG_COLOR};  
`;

const Header = styled.View`
  position: relative;
  justify-content: flex-end;
`;

const BgImage = styled.Image`
  width:${Layout.width};
  height:${Layout.height / 3};
  opacity: 0.3;
  position: absolute;
  top: 0;
`;

const Content = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: flex-end;  
  height: ${Layout.height / 3};
  padding-horizontal: 30px;
`;

const Column = styled.View`
  margin-left: 30px;
`;

const Title = styled.Text`
  font-weight: 600;
  font-size: 18px;
  color: ${TINT_COLOR};
  margin: 0 0 10px 0;
`;

const DetailPresenter = (props) => {  
  const {
    id,
    posterPhoto,
    title,
    voteAvg,    
    overview,
    backgroundPhoto,    
  } = props;

  return (
    <Container>
      <Header>
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
            <Title>{title.length > 15 ? `${title.substring(0, 12)}...` : title}</Title>
            <MovieRating 
              inSlide
              votes={voteAvg} 
            />
          </Column>
        </Content>
      </Header>
    </Container>
  );
}

DetailPresenter.propTypes = {
  id: PropTypes.number.isRequired,  
  title: PropTypes.string.isRequired,
  posterPhoto: PropTypes.string.isRequired,
  backgroundPhoto: PropTypes.string,
	voteAvg: PropTypes.number,	
	overview: PropTypes.string,	
};

export default DetailPresenter;
