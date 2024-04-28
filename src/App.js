import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Item from './Components/Item/Item';
import Formulario from './Components/Form/Formulario';
import Menu from './Components/Menu/Menu';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  const tareas = [{
    name: 'Dia el trabajo',
    description: 'Celebra el dia del trabajo con tus compañeros de trabajo',
    DueDate: '2024-05-01'
  },
  {
    name: 'Dia de la madre',
    description: 'Compra un regalo para mama y celebra con ella su dia',
    DueDate: '2024-05-10'
  },
  {
    name: 'Cumpleaños de Keyla',
    description: 'Lleva un pastel y una tarjeta de cumpleaños a la fiesta de Keyla',
    DueDate: '2024-05-13'
  },
  {
    name: 'Tarea de la universidad',
    description: 'Hacer la tarea de la universidad para el dia lunes',
    DueDate: '2024-04-29'
  }]
  return (
    <div className="App">
      <Menu></Menu>
      <Container>
      <Row>
        <Col>
          <Formulario></Formulario>
        </Col>
        <Col>
          { tareas.map((tarea, index) => {
            return <Item name={tarea.name} description={tarea.description} DueDate={tarea.DueDate} />
          }) }
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;
