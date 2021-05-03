import React, { Component } from 'react';
import Comment from '../Components/Comment';
import Comments from './Comments';
export default class CommentList extends Component {
  state = {
    comments: null,
  };
  componentDidMount() {
    this.getComments();
  }
  componentDidUpdate = (prevProps) => {
    prevProps.asin !== this.props.asin && this.getComments();
  };
  getComments = async () => {
    const response = await fetch(
      'https://striveschool-api.herokuapp.com/api/comments/' + this.props.asin,

      {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgwMTIzMWIxZjBmYjAwMTVkOTE3M2QiLCJpYXQiOjE2MTk3MDQ0ODgsImV4cCI6MTYyMDkxNDA4OH0.2cGjKXNsmef7bB-JDIq-7AgQt0dPaOjim9jaj0aLR_Q',
        },
      }
    );
    const comments = await response.json();
    {
      console.log('kurwa chuj', comments);
    }
    this.setState({ comments });
  };

  render() {
    return (
      <div>
        {console.log('kometarz w div', this.state.comments)}
        {this.state.comments &&
          this.state.comments.map((comment) => <Comment comment={comment} />)}
      </div>
    );
  }
}
