import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Item.scss';

function Item(props) {
  return (
    /*<Card style={{ width: '18rem' }}>*/
    <Card className="mb-3">
      <Card.Body>
        <Card.Text className='fw-bold'>Name</Card.Text>
        <Card.Text>{props.name}</Card.Text>
        <Card.Text className='fw-bold'>Description</Card.Text>
        <Card.Text>{props.description}</Card.Text>
        <Card.Text className='fw-bold'>Due Date</Card.Text>
        <Card.Text>{props.DueDate}</Card.Text>
        <Button variant="info">Remover</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;