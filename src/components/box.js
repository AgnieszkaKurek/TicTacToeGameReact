import React from 'react';
import './box.css';

export class Box extends React.Component {

  handleMoveFromBox() {
    console.log(`handle move from box with position ${this.props.boxPosition}`)
    this.props.handleMoveFromBox(this.props.boxPosition);
  }

  render() {
    return (
      <button className="box"
        onMouseEnter={() => this.handleMoveFromBox()}
        onClick={() => this.props.handleClick(this.props.boxPosition)}>
        <canvas width="180" height="180" />
      </button>
    );
  }
}