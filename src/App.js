
import './app.scss';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import BuscarCep from './pages/BuscarCep'

function App() {
  return (
        <div className="App">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/buscar-cep" element={<BuscarCep/>}/>
          </Routes>
        </div>
  );
}

export default App;
