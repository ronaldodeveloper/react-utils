import React from 'react';
import styles from './Home.module.scss';
import { Button } from '../../components';
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div>
      <h1>Hello</h1>
      <Button>Click</Button>
      <Link to="/">Home</Link>
    </div>
  )
}

export default Home;
