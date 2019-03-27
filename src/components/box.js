import React from 'react';
import './box.css';

export class Box extends React.Component {

  render() {
    return (
      <button className="box" onMouseEnter={() => this.props.handleMove(this.props.boxPosition)}>
        <canvas width="180" height="180" />
      </button>
    );
  }
}