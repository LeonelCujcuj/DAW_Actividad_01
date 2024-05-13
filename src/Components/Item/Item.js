import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Item.scss';
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTask } from '../../reducers/tasksSlice';
import { removeGoal } from '../../reducers/goalsSlice';


function Item(props) {
  const dispatch = useDispatch();

 const removeItem = (e) => {
    e.preventDefault();
    console.log('Removing item...', props.selectedOption, props.id);
    if (props.selectedOption === 'tasks') {
      console.log('Removing task:', props.id);
      dispatch(removeTask(props.id)); // Elimina una tarea
    } else if (props.selectedOption === 'goals'){
      console.log('Removing goal:', props.id);
      dispatch(removeGoal(props.id)); // Elimina una meta
    }
  };

  /*  const removeItem = (e) => {
      e.preventDefault();
      dispatch(removeGoal(props.id));
    };*/

  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Text className='fw-bold'>Name</Card.Text>
        <Card.Text>{props.name}</Card.Text>
        <Card.Text className='fw-bold'>Description</Card.Text>
        <Card.Text>{props.description}</Card.Text>
        <Card.Text className='fw-bold'>Due Date</Card.Text>
        <Card.Text>{props.dueDate}</Card.Text>
        <Button variant="info" onClick={removeItem}>Remover</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;