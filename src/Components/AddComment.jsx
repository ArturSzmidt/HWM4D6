import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

export default class AddComment extends Component {
  state = { comment: '', rate: 5 };
  handleSubmit = async (e) => {
    e.preventDefault();
    console.log('handle submit', this.state.comment);
    const body = JSON.stringify({
      ...this.state,
      elementId: this.props.asin,
    });

    const response = await fetch(
      'https://striveschool-api.herokuapp.com/api/comments/',

      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgwMTIzMWIxZjBmYjAwMTVkOTE3M2QiLCJpYXQiOjE2MTk3MDQ0ODgsImV4cCI6MTYyMDkxNDA4OH0.2cGjKXNsmef7bB-JDIq-7AgQt0dPaOjim9jaj0aLR_Q',
        },
        body,
      }
    );
    if (response.ok) {
      alert('Comment posted!');
    } else {
      alert('error');
    }
  };
  render() {
    const { item, deselectBook } = this.props;
    return (
      <Form className="mt-auto w-100" onSubmit={this.handleSubmit}>
        <Form.Control
          value={this.state.comment}
          onChange={(e) => this.setState({ comment: e.target.value })}
        ></Form.Control>
        <select
          value={this.state.rate}
          onChange={(e) => this.setState({ rate: e.target.value })}
          id=""
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </Form>
    );
  }
}
