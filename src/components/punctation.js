import React from 'react';
import './punctation.css';
import { TicTacToeGameStatus } from '../models/ticTacToeGameStatus';

export class Punctation extends React.Component {


  getScoreClasses() {
    const highlightClass = this.props.status !== TicTacToeGameStatus.STATUS_UNFINISHED
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
          <span className={this.getScoreClasses()}>
            {this.props.scorePlayerX}
          </span>
        </div>
        <div>
          Score PlayerO
          <span className={this.getScoreClasses()}>
            {this.props.scorePlayerO}
          </span>
        </div>
        <div>
          Number of draw
          <span className={this.getScoreClasses()}>
            {this.props.numberOfDraws}
          </span>
        </div>
      </div>
    );
  }
}
