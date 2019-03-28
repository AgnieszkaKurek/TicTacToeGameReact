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

  handleMoveFromGame(boxPosition) {
    console.log(`handle move from game with positon: ${boxPosition}`);
    const isEmpty = this.game.isPositionEmpty(boxPosition);
    console.log(isEmpty);
  }

  handleClick(boxPosition) {
    this.game.move(boxPosition);
    console.log(`box from position ${boxPosition} clicked`);
  }

  render() {
    return (
      <div className="container">
        <header>Tic Tac Toe</header>
        <aside className="left">
          <PlayerInfo />
        </aside>
        <article>
          <Board
            handleMoveFromBoard={(boxPosition) => this.handleMoveFromGame(boxPosition)}
            handleClick={(boxPosition) => this.handleClick(boxPosition)} />
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