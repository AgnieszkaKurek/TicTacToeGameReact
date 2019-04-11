import React from 'react';
import './box.css';
import { TicTacToeGamePlayers } from '../models/ticTacToeGamePlayers';

export class Box extends React.Component {

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
        onClick={() => this.props.handleClick(this.props.boxPosition)}>
        {this.renderBoxSymbol()}
      </div>
    );
  }
}