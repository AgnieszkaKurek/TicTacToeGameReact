import React from 'react';

export class PlayerInfo extends React.Component {
  render() {
    return (
      <div>
        <h2>Who's Turn</h2>
        <span>PlayerX</span>
        <span>PlayerO</span>
      </div>
    );
  }
}