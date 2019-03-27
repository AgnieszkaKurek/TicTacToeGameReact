import React from 'react';
import './game.css';
import { Board } from '../board/board';
import { Button } from '../button/button';

export class Game extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Tic Tac Toe</h1>
        <div className="game-area">
        <Board />
        <Button/>
        </div>
      </div>
    );
  }
}