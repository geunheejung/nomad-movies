import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import DetailPresenter from './DetailPresenter';
import { movies, tv } from '../../api';

export default class extends PureComponent {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title'),
  });

  constructor(props) {
    super(props);

    const { 
      navigation: { 
        state: { 
          params  
      } 
    }} = this.props;
    this.state = {
       ...params,
       loading: true,
    };
  }

  async componentDidMount() {  
    const { isMovie, id } = this.state;
    let error, 
        genres, 
        overview, 
        status, 
        backgroundPhoto,
        date;
    
    
    try {          
      const api = await isMovie ? movies.getMovieDetail : tv.getShowDetail;          
      ({ 
        data: { 
          genres, 
          overview, 
          status, 
          [isMovie ? 'release_date' : 'first_air_date']: date,
          backdrop_path: backgroundPhoto
        }
      } = await api(id));
    } catch (err) {
      error = err;
    } finally {      
      this.setState({
        error,
        genres,
        overview,
        status,
        backgroundPhoto,
        date,
        loading: false,
      });
    }
  }

  render() {      
    return (      
      <DetailPresenter 
        {...this.props}
        {...this.state}
      />
    );
  }
}
