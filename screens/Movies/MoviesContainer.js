import React, { PureComponent } from 'react';
import { movies } from '../../api';
import MoviesPresenter from './MoviesPresenter';

export default class extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      upcomming: null,
      popular: null,
      nowPlaying: null,
      error: null,
    };
  }

  async componentDidMount() {
    let upcomming,
        popular,
        nowPlaying,
        error;
    try {
      // 선언 없이 객체 리터럴(object literal) 비구조화 할당을 사용할 때 () 로 감싸줘야함.
      // {a, b} = {a: 1, b: 2} 는 유효한 독립 구문이 아니다. 좌변의 {a, b} 객체 리터럴이 아닌 블록으로 간주된다.
      // 인터프리터에게 평가식이라고 알려주는듯하다. 
      ({ 
        data: { 
          results: upcomming 
        } 
      } = await movies.getUpcoming());  
      ({ 
        data: { 
          results: popular 
        } 
      } = await movies.getPopular());
      ({ 
        data: { 
          results: nowPlaying
        } 
      } = await movies.getNowPlaying());
    } catch (err) {
      error = `Can't get Movies.`;
    } finally {
      this.setState({
        loading: false,
        popular,
        nowPlaying,
        upcomming,
        error,
      });
    }
  }

  render() {
    return (
      <MoviesPresenter 
        {...this.state} 
      />
    );
  }
}