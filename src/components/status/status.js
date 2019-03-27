import React from 'react';
import './status.css';

export class Status extends React.Component {
  render() {
    return (
        <div>
        <span className="winnerStatus">Winer is X</span>
        <span className="winnerStatus">Winer is O</span>
        <span className="winnerStatus">Draw</span>
    </div>
    );
  }
}