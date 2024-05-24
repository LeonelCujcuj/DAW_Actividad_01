import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Formulario from '../Form/Formulario';
import './ModalForm.scss';

function ModalForm({ selectedOption, addTask, addGoal }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" id="add" type="button" onClick={handleShow}>
        {selectedOption === 'tasks' ? 'Add Task' : 'Add Goal'}
      </Button>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedOption === 'tasks' ? 'Task' : 'Goal'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formulario selectedOption={selectedOption} addTask={addTask} addGoal={addGoal} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalForm;