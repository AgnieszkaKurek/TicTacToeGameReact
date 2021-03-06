import React from 'react';
import './resetButton.css';
import { TicTacToeGameStatus } from '../models/ticTacToeGameStatus';

export class ResetButton extends React.Component {

  render() {
    if (this.props.status === TicTacToeGameStatus.STATUS_UNFINISHED) {
      return (<div></div>);
    }
    return (
      <button
        className="reset-game"
        onClick={() => this.props.handleReset()}>
        Reset Game
      </button>
    )
  }
}