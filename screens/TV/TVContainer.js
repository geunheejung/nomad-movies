import React, { PureComponent } from 'react';
import TVPresenter from './TVPresenter';

export default class extends PureComponent {
  state = {
    loading: true,
    upcomming: null,
    popular: null,
    nowPlaying: null,
  };

  render() {
    const { loading } = this.state;
    return (      
      <TVPresenter loading={loading} />
    );
  }
}