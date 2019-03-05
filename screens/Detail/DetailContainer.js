import React, { PureComponent } from 'react';
import DetailPresenter from './DetailPresenter';

export default class extends PureComponent {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title'),
  });

  constructor(props) {
    super(props);

    // {
    //   id,
    //   posterPhoto,
    //   title,
    //   voteAvg,
    //   horizontal,
    //   overview,
    //   isMovie,
    // }

    const { 
      navigation: { 
        state: { 
          params  
      } 
    }} = this.props;
    this.state = { ...params };
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
