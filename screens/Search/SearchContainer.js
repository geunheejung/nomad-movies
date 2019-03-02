import React, { PureComponent } from 'react';
import { movies, tv } from '../../api';
import SearchPresenter from './SearchPresenter';

export default class extends PureComponent {
  state = {
    loading: false,
    movieResult: null,
    tvResults: null,
    searchTerm: '',
    error: '',
  }

  handleSearchUpdate = (text) => {
    this.setState({
      searchTerm: text,
    });
  };

  fetchApi = async() => {
    const { searchTerm } = this.state;
    let movieResults,
        tvResults,
        error;

    try {
      ({ data: { results: movieResults } } = await movies.search(searchTerm))
      ({ data: { results: tvResults } } = await tv.search(searchTerm));
    } catch (error) {
      error = "Can't Search";
    } finally {
      this.setState({
        loading: false,
        movieResults,
        tvResults,
        error
      }, () => {
        console.log(this.state);
      });
    }
  }

  submitEditing = () => {
    const { searchTerm } = this.state;

    if (searchTerm === '') return;

    this.setState({
      loading: true,
    }, this.fetchApi);
  }

  render() {
    return (
      <SearchPresenter
        {...this.state}
        onHandleSearchUpdate={this.handleSearchUpdate}
        onSubmitEditing={this.submitEditing}
      />
    )
  }
}

