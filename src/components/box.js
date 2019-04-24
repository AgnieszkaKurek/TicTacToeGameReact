import React from 'react';
import './box.css';
import { TicTacToeGamePlayers } from '../models/ticTacToeGamePlayers';
import { TicTacToeGameStatus } from '../models/ticTacToeGameStatus';

export class Box extends React.Component {
  getCursorClass() {
    if (this.props.boxState || this.props.status !== TicTacToeGameStatus.STATUS_UNFINISHED)
      return "cursor-moving-disabled";
    return this.props.nextPlayer === TicTacToeGamePlayers.X ? "cursor-player-x" : "cursor-player-o";
  }

  getBoxClasses() {
    const cursor = this.getCursorClass();
    const movingEnabled = this.props.status === TicTacToeGameStatus.STATUS_UNFINISHED ? "moving-enabled" : "moving-disabled";
    const winningBoxClass = this.props.isWinningBox ? "winning-box" : "";
    return `box ${cursor} ${movingEnabled} ${winningBoxClass}`;
  }

  handleClick() {
    if (this.props.status === TicTacToeGameStatus.STATUS_UNFINISHED) {
      this.props.handleClick(this.props.boxPosition);
    }
  }

  renderBoxSymbol() {
    switch (this.props.boxState) {
      case TicTacToeGamePlayers.X:
        return <span className="player-x">X</span>;
      case TicTacToeGamePlayers.O:
        return <span className="player-o">O</span>;
      default:
        return <span></span>;
    }
  }

  render() {
    return (
      <div
        className={this.getBoxClasses()}
        onClick={() => this.handleClick()}>
        {this.renderBoxSymbol()}
      </div>
    );
  }
}