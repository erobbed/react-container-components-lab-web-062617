import React, { Component } from 'react';
import MovieReviews from './MovieReviews'

import 'isomorphic-fetch';

const NYT_API_KEY = '6dea82c879c8464da1a47c780be719e3';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export default class LatestMovieReviewsContainer extends React.Component{

  constructor(){
    super()

    this.state = {
      reviews: []
    }
  }

  componentWillMount(){
    fetch(`${URL}`).then(res => res.json()).then(res => this.setState({ reviews: res.results }))
  }

  render(){
    return (
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }

}
