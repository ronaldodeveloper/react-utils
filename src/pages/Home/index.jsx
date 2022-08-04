import React from 'react';
import styles from './Home.module.scss';
import { Button } from '../../components';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container">
      <h1 className="mt-5">Páginas</h1>
      <nav className="d-flex flex-column">
        {/* <Link to="/">Home</Link> */}
        <Link to="/buscar-cep">Buscar CEP</Link>
      </nav>
    </div>
  )
}

export default Home;
