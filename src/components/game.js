import React from 'react';
import './game.css';
import { Board } from './board';
import { ResetButton } from './resetButton'
import { PlayerInfo } from './playerInfo';
import { Punctation } from './punctation';
import { Status } from './status';
import { TicTacToeGame } from '../models/ticTacToeGame';
import { TicTacToeGameScore } from  '../models/tictTacToeGameScore';

export class Game extends React.Component {
  constructor(props) {
    super(props);
    this.game = new TicTacToeGame();
    this.score = new TicTacToeGameScore();
    this.state = this.getState();
  }

  setStateFromGameAndScore = () => this.setState(this.getState());

  getState() {
    return {
      board: this.game.board,
      nextPlayer: this.game.nextPlayer,
      status: this.game.status(),
      winningCombination: this.game.getWinningCombination(),
      updateScore: this.score.update(),
    };
  }

  handleClick(boxPosition) {
    this.game.move(boxPosition);
    this.setStateFromGameAndScore();
  }

  render() {
    return (
      <div className="container">
        <header>Tic Tac Toe</header>
        <aside className="left">
          <PlayerInfo
            nextPlayer={this.state.nextPlayer}
            status={this.state.status} />
        </aside>
        <article>
          <Board
            board={this.state.board}
            handleClick={(boxPosition) => this.handleClick(boxPosition)}
            nextPlayer={this.state.nextPlayer}
            status={this.state.status}
            winningCombination={this.state.winningCombination}
          />
          <ResetButton status={this.state.status} />
          <Status status={this.state.status} />
        </article>
        <aside className="right">
          <Punctation  updateScore = {this.state.updateScore}/>
        </aside>
      </div>
    );
  }
}