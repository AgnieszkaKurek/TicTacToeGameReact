import React from 'react';
import './box.css';

export class Box extends React.Component {
  render() {
    return (
      <button className="box" data-position={this.props.boxPosition}>
        <canvas width="180" height="180" />
      </button>
    );
  }
}