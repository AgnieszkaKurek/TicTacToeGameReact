import React from 'react';
import './playerInfo.css';
import { TicTacToeGamePlayers } from '../models/ticTacToeGamePlayers';
import { TicTacToeGameStatus } from '../models/ticTacToeGameStatus';

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

  rendererStatus() {
    switch (this.props.status) {
      case TicTacToeGameStatus.STATUS_X_WINS:
        return <span>Winner is X</span>;
      case TicTacToeGameStatus.STATUS_O_WINS:
        return <span>Winner is O</span>;
      case TicTacToeGameStatus.STATUS_DRAW:
        return <span>Draw</span>;
      default:
        return;
    }
  }

  render() {
    if (this.props.status === TicTacToeGameStatus.STATUS_UNFINISHED) {
      return (
        <div>
          <h2 className="playerInfo">Who's Turn</h2>
          {this.renderPlayerInfo()}
        </div>
      );
    }
    return (<div className="status">{this.rendererStatus()}</div>);
  }
}