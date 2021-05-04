import React, { Component } from 'react';

import CommentList from '../Components/CommentList';
import AddComment from '../Components/AddComment';

export default class CommentArea extends Component {
  render() {
    return (
      <>
        {console.log('commentarea item', this.props.item)}
        {this.props.item && (
          <div id="comment-area" className="d-flex">
            <h5 className="my-auto">{this.props.item.title}</h5>

            <div className="d-flex p-3 ">
              <img
                className="img-fluid w-25 my-auto "
                src={this.props.item.img}
                alt=""
              />
              <div className="d-flex flex-column p-100">
                <CommentList asin={this.props.item.asin} />
                <AddComment asin={this.props.item.asin} />
              </div>
            </div>
            <button onClick={() => this.props.deselectBook()}>close</button>
          </div>
        )}
      </>
    );
  }
}
