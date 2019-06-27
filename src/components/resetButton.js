import React from 'react';
import './resetButton.css';
import { TicTacToeGameStatus } from '../models/ticTacToeGameStatus';

export class ResetButton extends React.Component {

  render() {
    if (this.props.status !== TicTacToeGameStatus.STATUS_UNFINISHED) {
      return (
        <button className="reset-game">
          Reset Game
      </button>
      );
    }
    else {
      return (
        <div>

        </div>
      )
    }
  }
}