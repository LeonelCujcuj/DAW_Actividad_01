import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';

import { useDispatch, useSelector } from 'react-redux'; // importamos las funciones de redux
import { changeOption } from '../../reducers/optionSlice'; // importamos la funcion changeOption del slice optionSlice

import './Menu.scss';

function Menu() {
// constantes
  const option = useSelector((state) => state.option.value);
  const dispatch = useDispatch();

  const changeOptionFunction = (e, newOption) => {
    e.preventDefault();
    if (option !== newOption){
      dispatch(changeOption(newOption));
    }
    }

    return (
      <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container className='menuNavBar'>
          <Navbar.Brand>To Do List</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav defaultActiveKey={option} className="me-auto">
              <Nav.Link className={option === 'tasks' ? 'active' : ''} eventKey='tasks' onClick={(e) => changeOptionFunction(e, 'tasks')}>Tasks</Nav.Link>
              <Nav.Link className={option === 'goals' ? 'active' : ''} eventKey='goals' onClick={(e) => changeOptionFunction(e, 'goals')}>Goals</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
    );
  }

export default Menu;