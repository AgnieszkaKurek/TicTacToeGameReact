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
    this.state = this.getStateFromGame();
  }

  setStateFromGame() {
    this.setState(this.getStateFromGame());
  }

  getStateFromGame() {
    return {
      board: this.game.board,
      nextPlayer: this.game.nextPlayer,
      status: this.game.status(),
    };
  }
  
  handleClick(boxPosition) {
    this.game.move(boxPosition);
    this.setStateFromGame();
    
  }

  render() {
    return (
      <div className="container">
        <header>Tic Tac Toe</header>
        <aside className="left">
          <PlayerInfo nextPlayer={this.state.nextPlayer} />
        </aside>
        <article>
          <Board
            board={this.state.board}
            handleClick={(boxPosition) => this.handleClick(boxPosition)}
            nextPlayer={this.state.nextPlayer}
            />
          <ResetButton />
          <Status 
          status={this.state.status}
          />
        </article>
        <aside className="right">
          <Punctation />
        </aside>
      </div>
    );
  }
}