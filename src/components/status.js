import React from 'react';
import './status.css';

export class Status extends React.Component {
  render() {
    return (
      <div>
        <span className="winner-status">Winer is X</span>
        <span className="winner-status">Winer is O</span>
        <span className="winner-status">Draw</span>
      </div>
    );
  }
}