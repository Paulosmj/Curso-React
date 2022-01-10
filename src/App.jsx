/* eslint-disable */
import './App.css';
import React from 'react';

import Familia from './components/basicos/Familia';
import Card from './components/basicos/layout/Card';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import NumeroAleatorio from './components/basicos/NumeroAleatorio';

export default () => (
  <div className="App">
    <h1>Fundamentos React</h1>

    <div className="Cards">
      <Card titulo="#05 Componente com filhos" color="#00C8F8">
        <Familia sobrenome="Ferreira" />
      </Card>

      <Card titulo="#04 Desafio Aleatório" color="#FA6900">
        <NumeroAleatorio min={1} max={60} />
      </Card>

      <Card titulo="#03 Fragmento" color="#E94C6F">
        <Fragmento />
      </Card>

      <Card titulo="#02 Com Parâmetro" color="#E8B71A">
        <ComParametro
          titulo="Situação do aluno"
          aluno="Pedro Silva"
          nota={9.3}
        />
      </Card>

      <Card titulo="#01 Primeiro Componente" color="#588C73">
        <Primeiro />
      </Card>
    </div>
  </div>
);
