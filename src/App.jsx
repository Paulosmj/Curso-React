/* eslint-disable */
import React from 'react';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import NumeroAleatorio from './components/basicos/NumeroAleatorio';

export default () => (
  <div id="app">
    <h1>Fundamentos React</h1>
    <NumeroAleatorio min={1} max={60} />
    <Fragmento />

    <ComParametro titulo="Situação do aluno" aluno="Pedro Silva" nota={9.3} />
    <Primeiro />
  </div>
);
