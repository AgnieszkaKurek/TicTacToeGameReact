import React from 'react';
import './board.css';
import { Box } from './box';

export class Board extends React.Component {

  handleMoveFromBoard(boxPosition) {
    console.log(`handle move from board with positon ${boxPosition}`)
    this.props.handleMoveFromBoard(boxPosition);
  }

  renderBox(boxPosition) {
    return <Box
      boxState={this.props.board[boxPosition]}
      boxPosition={boxPosition}
      handleMoveFromBox={(boxPosition) => this.handleMoveFromBoard(boxPosition)}
      handleClick={(boxPosition) => this.props.handleClick(boxPosition)} />
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