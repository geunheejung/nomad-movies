import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { LinearGradient } from 'expo';
import { BG_COLOR, TINT_COLOR } from '../../constatns/Color';
import Layout from '../../constatns/Layout';
import makePhotoUrl from '../../utils/makePhotoUrl';
import MoviePoster from '../../components/MoviePoster';
import MovieRating from '../../components/MovieRating';
import Loader from '../../components/Loader';
import { Platform } from 'react-native';

const Container = styled.ScrollView`      
  background-color: ${BG_COLOR};  
`;

const Header = styled.View`
  position: relative;
  justify-content: flex-end;
`;

const BgImage = styled.Image`
  width:${Layout.width};
  height:${Layout.height / 3.5};
  position: absolute;
  top: 0;
`;

const Content = styled.View`  
  width: 80%;
  flex-direction: row;
  align-items: flex-end;  
  height: ${Layout.height / 3.5};
  padding-horizontal: 20px;
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

const MainContent = styled.View`
  width: 80%;
  padding-horizontal: 20px;
  margin: 25px 0 0 0;
`;

const ContentTitle = styled.Text`
  margin: 0 0 10px 0;
  color: ${TINT_COLOR};
  font-weight: 600;
`;

const ContentValue = styled.Text`
  margin: 0 0 10px 0;
  color: ${TINT_COLOR};
  font-size: 12px;
`;

const DataContainer = styled.View`
  font-size: 12px;
  margin-bottom: 10px;
`;

const Genres = styled.Text`
  color: ${TINT_COLOR};
`;

const DetailPresenter =  (props) => {  
  const {
    isMovie,    
    title,
    voteAvg,    
    overview,
    backgroundPhoto, 
    genres,
    loading,   
    date,
    status
  } = props;

  return (
    <Container>
      <Header>
        <BgImage 
          widht={200}
          height={Layout.height / 3} 
          source={{ uri: makePhotoUrl(backgroundPhoto) }}
        />
        <LinearGradient
          colors={[ 'transparent', 'black' ]}
          start={Platform.select({
            ios: [0, 0]
          })}
          end={Platform.select({
            ios: [0, 0.5],
            android: [0, 0.9]
          })}
        >            
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
              {
                genres ? (
                  <Genres>
                    {
                      genres.map((row, index) => 
                        genres.length - 1 === index ? row.name : `${row.name} / `)  
                    }
                  </Genres>                  
                ) : null
              }
            </Column>
          </Content>
        </LinearGradient>
      </Header>
      <MainContent>  
        {loading ? <Loader /> : null}                          
        {overview ? (
          <DataContainer>
            <ContentTitle>Overview</ContentTitle>
            <ContentValue>{overview}</ContentValue>
          </DataContainer>
        ) : null}
        {status ? (
          <DataContainer>          
            <ContentTitle>Status</ContentTitle>
            <ContentValue>{status}</ContentValue>
          </DataContainer>
        ) : null}
        {date ? (
          <DataContainer>          
            <ContentTitle>{isMovie ? 'Realease Data' : 'First Episode'}</ContentTitle>
            <ContentValue>{date}</ContentValue>
          </DataContainer>
        ) : null}
        
      </MainContent>       
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
