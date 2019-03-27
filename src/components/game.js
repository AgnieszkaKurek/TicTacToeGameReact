import React from 'react';
import './game.css';
import { Board } from './board';
import { ResetButton } from './resetButton'
import { PlayerInfo } from './playerInfo';
import { Punctation } from './punctation';
import { Status } from './status';
import { TicTacToeGame } from '../models/ticTacToeGame';

export class Game extends React.Component {
  constructor(props) {
    super(props);
    this.game = new TicTacToeGame();
  }

  handleMove(boxPosition) {
    console.log(boxPosition);
    const isEmpty = this.game.isPositionEmpty(boxPosition);
    console.log(isEmpty);
  }

  render() {
    return (
      <div className="container">
        <header>Tic Tac Toe</header>
        <aside className="left">
          <PlayerInfo />
        </aside>
        <article>
          <Board handleMove={(boxPosition) => this.handleMove(boxPosition)} />
          <ResetButton />
          <Status />
        </article>
        <aside className="right">
          <Punctation />
        </aside>
      </div>
    );
  }
}