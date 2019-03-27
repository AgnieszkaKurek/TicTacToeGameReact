import React from 'react';

export class Players extends React.Component {
  render() {
    return (
    <div className="player">
        <span className="invisible" id="playerX">PlayerX</span>
        <span className="invisible" id="playerO">PlayerO</span>
    </div>
    );
  }
}