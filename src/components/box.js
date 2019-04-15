import React from 'react';
import './box.css';
import { TicTacToeGamePlayers } from '../models/ticTacToeGamePlayers';

export class Box extends React.Component {

  getBoardNextPlayerStatus = () => this.props.boxState !== undefined ? "movingDisabled" : this.props.nextPlayer === TicTacToeGamePlayers.X ? "player-x" : "player-o";

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
        data-box-state={this.getBoardNextPlayerStatus()}
        onClick={() => this.props.handleClick(this.props.boxPosition)}>
        {this.renderBoxSymbol()}
      </div>
    );
  }
}