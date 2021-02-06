import Menu from './components/Menu/index'
import Rotas from './rotas';
import 'bootstrap/dist/css/bootstrap.min.css';


import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { Container, container } from 'react-bootstrap';
import  './App.css'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Menu />
        </header>
      <main>
        <Container fluid>
          <Rotas />
        </Container>
      </main>
        </div>
    </BrowserRouter>
  );
}

export default App;
