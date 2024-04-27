import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Formulario.scss';

function Formulario() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formTaskName">
        <Form.Label className='taskLabel'>Name</Form.Label>
        <Form.Control className='taskInput' type="name"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formTaskDescription">
        <Form.Label className='taskLabel'>Description</Form.Label>
        <Form.Control className='taskInput' as="textarea"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formTaskDate">
        <Form.Label className='taskLabel'>Due Date</Form.Label>
        <Form.Control className='taskInput' type="date"/>
      </Form.Group>      

      <Button variant="primary" type="submit" id='AddGoal'>
        Add Goal
      </Button>
    </Form>
  );
}

export default Formulario;