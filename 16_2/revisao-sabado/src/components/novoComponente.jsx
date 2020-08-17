import React from 'react';

export class NovoComponente extends React.Component {
  render() {
    return <h1>Titulo</h1>;
  }
}

export function Natalia() {
  return <h2>Aqui é a Nat</h2>;
}

export default () => <h1>Exportação</h1>
