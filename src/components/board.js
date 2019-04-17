import React from 'react';
import './board.css';
import { Box } from './box';

export class Board extends React.Component {

  renderBox(boxPosition) {
    return <Box
      nextPlayer={this.props.nextPlayer}
      boxState={this.props.board[boxPosition]}
      boxPosition={boxPosition}
      handleClick={(boxPosition) => this.props.handleClick(boxPosition)}
      status={this.props.status}
    />
  }

  render() {
    return (
      <div className="game-board">
        <div>
          {this.renderBox(0)}
          {this.renderBox(1)}
          {this.renderBox(2)}
        </div>
        <div>
          {this.renderBox(3)}
          {this.renderBox(4)}
          {this.renderBox(5)}
        </div>
        <div>
          {this.renderBox(6)}
          {this.renderBox(7)}
          {this.renderBox(8)}
        </div>
      </div>
    );
  }
}