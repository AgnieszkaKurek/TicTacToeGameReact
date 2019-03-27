import React from 'react';
import './board.css';
import { Box } from './box';

export class Board extends React.Component {
  render() {
    return (
      <div className="game-board">
        <div>
          <Box boxPosition={0} />
          <Box boxPosition={1} />
          <Box boxPosition={2} />
        </div>
        <div>
          <Box boxPosition={3} />
          <Box boxPosition={4} />
          <Box boxPosition={5} />
        </div>
        <div>
          <Box boxPosition={6} />
          <Box boxPosition={7} />
          <Box boxPosition={8} />
        </div>
      </div>
    );
  }
}