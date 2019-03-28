import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, withRouter, redirect } from 'react-router-dom'
import './GameReview.css'


class GameReview extends Component {

    render() {

        return (
            <div className="review">
                <div className="review-name">
                    <strong>{this.props.review.username}</strong>
                </div>
                <div className="rating">
                    {this.props.review.rating}
                </div>
                <p className="review-content">{this.props.review.content}</p>

            </div>

        );
    }
}

export default GameReview;
