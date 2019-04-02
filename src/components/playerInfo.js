import React from 'react';
import './playerInfo.css';
import { TicTacToeGamePlayers } from '../models/ticTacToeGamePlayers';

export class PlayerInfo extends React.Component {

  render() {
    let nextPlayer = this.props.nextPlayer;
    let currentPlayerX = "";
    let curentPlayerO = "";
    if (nextPlayer === TicTacToeGamePlayers.X) {
      curentPlayerO += "next-player-o";
    }
    else {
      currentPlayerX += "next-player-x";
    }
    return (
      <div>
        <h2>Who's Turn</h2>
        <span className={currentPlayerX}>PlayerX</span>
        <span className={curentPlayerO}>PlayerO</span>
      </div>
    );
  }
}