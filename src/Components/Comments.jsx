import { ListGroup } from 'react-bootstrap';

const Comments = (props) => (
  // props.dish is the whole object
  <div className={`mt-${props.marginTop}`}>
    <h2>Comments for {props.elementId}</h2>
    <ListGroup>
      {props.map((c) => (
        <ListGroup.Item key={c.id}>
          "{c.comment}" from {c.author}
        </ListGroup.Item>
      ))}
    </ListGroup>
  </div>
);

export default Comments;
