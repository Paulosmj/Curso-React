/* eslint-disable */
import './App.css';
import React from 'react';

import Card from './components/basicos/layout/Card';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import NumeroAleatorio from './components/basicos/NumeroAleatorio';

export default () => (
  <div className="App">
    <h1>Fundamentos React</h1>

    <div className="Cards">
      <Card titulo="#04 Desafio Aleatório">
        <NumeroAleatorio min={1} max={60} />
      </Card>

      <Card titulo="#03 Fragmento">
        <Fragmento />
      </Card>

      <Card titulo="#02 Com Parâmetro">
        <ComParametro
          titulo="Situação do aluno"
          aluno="Pedro Silva"
          nota={9.3}
        />
      </Card>

      <Card titulo="#01 Primeiro Componente">
        <Primeiro />
      </Card>
    </div>
  </div>
);
