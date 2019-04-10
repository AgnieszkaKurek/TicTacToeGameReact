import React from 'react';
import './board.css';
import { Box } from './box';
import { TicTacToeGamePlayers } from '../models/ticTacToeGamePlayers';

export class Board extends React.Component {

  getBoardNextPlayerStatus = () => this.props.nextPlayer === TicTacToeGamePlayers.X ? "player-x" : "player-o";

  renderBox(boxPosition) {
    return <Box
      boxState={this.props.board[boxPosition]}
      boxPosition={boxPosition}
      handleClick={(boxPosition) => this.props.handleClick(boxPosition)}
    />
  }


  render() {
    return (
      <div className="game-board" data-board-players-state={this.getBoardNextPlayerStatus()}>
        <div>
          {this.renderBox(0)}
          {this.renderBox(1)}
          {this.renderBox(2)}
        </div>
        <div>
          {this.renderBox(3)}
          {this.renderBox(4)}
          {this.renderBox(5)}
        </div>
        <div>
          {this.renderBox(6)}
          {this.renderBox(7)}
          {this.renderBox(8)}
        </div>
      </div>
    );
  }
}