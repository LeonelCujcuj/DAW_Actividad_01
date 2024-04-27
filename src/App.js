import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Item from './Components/Item/Item';
import Formulario from './Components/Form/Formulario';
import Menu from './Components/Menu/Menu';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <Container>
      <Row>
        <Col><Formulario></Formulario></Col>
        <Col>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;
