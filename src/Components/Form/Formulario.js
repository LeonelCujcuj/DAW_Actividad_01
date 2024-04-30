import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Formulario.scss';
import { useDispatch } from 'react-redux';
import { addGoal } from '../../reducers/goalsSlice';
import { useRef } from 'react';

function Formulario() {
  const inputRefName = useRef();
  const inputRefDescription = useRef();
  const inputRefDueDate = useRef();

  const dispatch = useDispatch();

  const addItem = (e)=>{
    e.preventDefault();
    dispatch(addGoal({'name': inputRefName.current.value, 'description': inputRefDescription.current.value, 'dueDate': inputRefDueDate.current.value}));
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formTaskName">
        <Form.Label className='taskLabel'>Name</Form.Label>
        <Form.Control className='taskInput' type="text" ref={inputRefName}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formTaskDescription">
        <Form.Label className='taskLabel'>Description</Form.Label>
        <Form.Control className='taskInput' as="textarea" ref={inputRefDescription}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formTaskDate">
        <Form.Label className='taskLabel'>Due Date</Form.Label>
        <Form.Control className='taskInput' type="date" ref={inputRefDueDate}/>
      </Form.Group>      

      <Button variant="primary" type="submit" id='AddGoal' onClick={addItem}>
        Add Goal
      </Button>
    </Form>
  );
}

export default Formulario;