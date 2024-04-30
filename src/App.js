import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Item from './Components/Item/Item';
import Formulario from './Components/Form/Formulario';
import Menu from './Components/Menu/Menu';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingAddBtn from './Components/FloatingAddBtn/FloatingAddBtn';
import ModalForm from './Components/ModalForm/ModalForm';
import { useSelector } from 'react-redux';

function App() {

  const goals = useSelector((state) => state.goals.goals);
  return (
    <div className="App">
      <Menu></Menu>
      <Container>
      <Row>
        <Col xs={0} md={0} className='d-none d-sm-block d-sm-none d-md-block'>
          <Formulario></Formulario>
        </Col>
        <Col xs={0} md={0}>
          <Row className='d-md-none'>
            <Col className='overlapping-div'>
              <ModalForm></ModalForm>
            </Col>
          </Row>
          <Row>
          { goals.map((tarea, index) => {
            return <Item key={index} name={tarea.name} description={tarea.description} DueDate={tarea.DueDate} />
          }) }
          </Row>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;
