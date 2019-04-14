import React from 'react';
import './playerInfo.css';
import { TicTacToeGamePlayers } from '../models/ticTacToeGamePlayers';

export class PlayerInfo extends React.Component {

  renderPlayerInfo() {
    switch (this.props.nextPlayer) {
      case TicTacToeGamePlayers.X:
        return <span>Player X</span>;
      case TicTacToeGamePlayers.O:
        return <span>Player O</span>;
      default:
        return;
    }
  }

  render() {
    return (
      <div>
        <h2>Who's Turn</h2>
        {this.renderPlayerInfo()}
      </div>
    );
  }
}