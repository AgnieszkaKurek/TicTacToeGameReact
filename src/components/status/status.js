import React from 'react';
import './status.css';

export class Status extends React.Component {
  render() {
    return (
        <div>
        <span className="winnerStatus" id="winnerX">Winer is X</span>
        <span className="winnerStatus" id="winnerO">Winer is O</span>
        <span className="winnerStatus" id="draw">Draw</span>
    </div>
    );
  }
}