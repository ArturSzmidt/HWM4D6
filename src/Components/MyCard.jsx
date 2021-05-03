import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import fantasy from '../data/fantasy.json';
import CommentArea from '../Components/CommentArea';

class MyCard extends React.Component {
  state = {
    selectedBook: null,
  };
  render() {
    console.log(this.state);
    return (
      <Container>
        <Row>
          {fantasy.map((item) => (
            <Col xs={12} md={3} lg={3}>
              <Card
                key={item.asin + item.title}
                onClick={() => this.setState({ selectedBook: item })}
                className="book-cover"
                style={{ width: '' }}
              >
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.category}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
          {console.log('selectedbook', this.state.selectedBook)}

          <CommentArea
            item={this.state.selectedBook}
            deselectBook={() => this.setState({ selectedBook: null })}
          />
        </Row>
      </Container>
    );
  }
}

export default MyCard;
