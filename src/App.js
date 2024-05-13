import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Item from './Components/Item/Item';
import Formulario from './Components/Form/Formulario';
import Menu from './Components/Menu/Menu';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ModalForm from './Components/ModalForm/ModalForm';
import { useSelector, useDispatch } from 'react-redux';
import { initAddTask } from './reducers/tasksSlice';
import { initAddGoal } from './reducers/goalsSlice';
import { useEffect } from 'react';



function App() {

  const option = useSelector((state) => state.option.value);
  const goals = useSelector((state) => state.goals.goals);
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();
  
  function initFetchGoals(){
    fetch('http://localhost:3001/goals/getGoals', {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': '123456'
      },
    }).then((response) =>{
      return response.json();
    }).then((response) => {
      response.map((goal) =>{
        dispatch(initAddGoal(goal));
      })
    }).catch(err => console.log(err));
  }

  function initFetchTasks(){
    fetch('http://localhost:3001/tasks/getTasks', {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': '123456'
      },
    }).then((response) =>{
      return response.json();
    }).then((response) => {
      response.map((task) =>{
        dispatch(initAddTask(task));
      })
    }).catch(err => console.log(err));
  }


  useEffect(() => {
    initFetchGoals();
    initFetchTasks();
  }, []);

  return (
    <div className="App">
      <Menu selectedOption={option}/>
      <Container>
      <Row>

        <Col xs={0} md={0} className='d-none d-sm-block d-sm-none d-md-block'>
          <Formulario selectedOption={option}/>
        </Col>

        <Col xs={0} md={0}>

          <Row className='d-md-none'>
            <Col className='overlapping-div'>
              <ModalForm></ModalForm>
            </Col>
          </Row>
          
          <Row>
            <Col xs={0} md={0}>
              {option === 'tasks' && (
                <>
                  {tasks.map((task, index) => (
                    <Item selectedOption={option}  key={index} id={task.id} name={task.name} description={task.description} dueDate={task.dueDate}/>
                  ))}
                </>
              )}
              {option === 'goals' && (
                <>
                  {goals.map((goal, index) => (
                    <Item selectedOption={option}  key={index} id={goal.id} name={goal.name} description={goal.description} dueDate={goal.dueDate}/>
                  ))}
                </>
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;
