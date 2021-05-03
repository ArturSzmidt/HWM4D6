import React, { Component } from 'react';

import CommentList from '../Components/CommentList';

export default class CommentArea extends Component {
  render() {
    return (
      <>
        {console.log('commentarea item', this.props.item)}
        {this.props.item && (
          <div id="comment-area" className="d-flex">
            <h5>{this.props.item.title}</h5>

            <div className="d-flex p-3 ">
              <img
                className="img-fluid w-25 my-auto"
                src={this.props.item.img}
                alt=""
              />
              <CommentList asin={this.props.item.asin} />
              {/* <AddComment/> */}
            </div>
            <button onClick={() => this.props.deselectBook()}>close</button>
          </div>
        )}
      </>
    );
  }
}
