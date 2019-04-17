import React from 'react';
import './box.css';
import { TicTacToeGamePlayers } from '../models/ticTacToeGamePlayers';
import { TicTacToeGameStatus } from '../models/ticTacToeGameStatus';

export class Box extends React.Component {

  getBoxState() {
    if (this.props.boxState || this.props.status !== TicTacToeGameStatus.STATUS_UNFINISHED)
      return "moving-disabled";
    return this.props.nextPlayer === TicTacToeGamePlayers.X ? "player-x" : "player-o";
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
      <div className="box"
        data-box-state={this.getBoxState()}
        onClick={() => this.handleClick()}>
        {this.renderBoxSymbol()}
      </div>
    );
  }
}