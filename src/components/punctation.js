import React from 'react';
import './punctation.css';
import { TicTacToeGameStatus } from '../models/ticTacToeGameStatus';

export class Punctation extends React.Component {


  getScoreClasses(context) {
    const highlightClass = this.props.status === context ? "score-highlight" : "";
    return `space-between-elem ${highlightClass}`;
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
