import React from 'react';

const MovieReviews = (props) =>(
    <div className="review-list">
      <ul>
        {props.reviews.map((review, index) => <li key={index} className="review"><p>{review.headline}</p></li>)}
      </ul>
    </div>
);

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews
