import React, { PureComponent } from 'react';
import { tv } from '../../api';
import TVPresenter from './TVPresenter';

export default class extends PureComponent {
  state = {
    loading: true,
    topRated: null,
    popular: null,
    airingToday: null,
    error: null,
  };

  async componentDidMount() {
    let topRated,
        popular,
        airingToday,
        error;
    try {
      ({ 
        data: { 
          results: topRated 
        } 
      } = await tv.getTopRated());  
      ({ 
        data: { 
          results: popular 
        } 
      } = await tv.getPopular());
      ({ 
        data: { 
          results: airingToday
        } 
      } = await tv.getAiringToday());
    } catch (e) {
      error = `Can't get Movies.`;
    } finally {
      this.setState({
        loading: false,
        error,
        topRated,
        popular,
        airingToday,
      });
    }
  }

  render() {  
    return (      
      <TVPresenter 
        {...this.state}
      />
    );
  }
}
