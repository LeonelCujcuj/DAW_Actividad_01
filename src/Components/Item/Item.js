import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Item.scss';

function BasicExample() {
  return (
    /*<Card style={{ width: '18rem' }}>*/
    <Card className="mb-3">
      <Card.Body>
        <Card.Text className='fw-bold'>Name</Card.Text>
        <Card.Text>Realizar Proyecto</Card.Text>
        <Card.Text className='fw-bold'>Description</Card.Text>
        <Card.Text>Eleborar un proyecto de desarrollo de web</Card.Text>
        <Card.Text className='fw-bold'>Due Date</Card.Text>
        <Card.Text>dd/mm/aaaa</Card.Text>
        <Button variant="info">Remover</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;