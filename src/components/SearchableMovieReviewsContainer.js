import React, { Component } from 'react';
import MovieReviews from './MovieReviews'

import 'isomorphic-fetch';
const NYT_API_KEY = '6dea82c879c8464da1a47c780be719e3';

export default class SearchableReviewsContainer extends React.Component{

  constructor(){
    super()

    this.state = {
      reviews: [],
      searchTerm: ""
    }
  }

  componentWillMount(){
    const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.searchTerm}&api-key=${NYT_API_KEY}`
    fetch(`${URL}`).then(res => res.json()).then(res => this.setState({ reviews: res.results }))
  }

  render(){
    return (
      <div className="searchable-movie-reviews">
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }

}
