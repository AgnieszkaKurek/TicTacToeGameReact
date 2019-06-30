import React from 'react';
import './punctation.css';
import { TicTacToeGameStatus } from '../models/ticTacToeGameStatus';

export class Punctation extends React.Component {


  getScoreClasses(attribute) {
    let status = this.props.status;
    const highlightClass = status === TicTacToeGameStatus.STATUS_X_WINS &
      attribute === TicTacToeGameStatus.STATUS_X_WINS ||
      status === TicTacToeGameStatus.STATUS_O_WINS & attribute === TicTacToeGameStatus.STATUS_O_WINS ||
      status === TicTacToeGameStatus.STATUS_DRAW & attribute === TicTacToeGameStatus.STATUS_DRAW
      ? "score-highlight"
      : "";
    return `space-between-elem ${highlightClass} `;
  }

  render() {
    return (
      <div>
        <h2>Punctation</h2>
        <div>
          Score PlayerX
          <span className={this.getScoreClasses(TicTacToeGameStatus.STATUS_X_WINS)}>
            {this.props.scorePlayerX}
          </span>
        </div>
        <div>
          Score PlayerO
          <span className={this.getScoreClasses(TicTacToeGameStatus.STATUS_O_WINS)}>
            {this.props.scorePlayerO}
          </span>
        </div>
        <div>
          Number of draw
          <span className={this.getScoreClasses(TicTacToeGameStatus.STATUS_DRAW)}>
            {this.props.numberOfDraws}
          </span>
        </div>
      </div>
    );
  }
}
