
import './app.scss';
import { Button, Form } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Buscador de CEP</h1>
      <Form>
       <Form.Group className="mb-3 row" controlId="cep">
         <Form.Label>Informe o CEP</Form.Label>
         <div className="col-lg-4">
         <Form.Control type="text" placeholder="Digite um CEP" />
         </div>
       </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>  
      </div>
    </div>
  );
}

export default App;
