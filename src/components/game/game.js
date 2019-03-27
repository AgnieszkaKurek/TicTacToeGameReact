import React from 'react';
import './game.css';
import { Board } from '../board/board';

export class Game extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Tic Tac Toe</h1>
        <Board />
      </div>
    );
  }
}