import React from 'react';

export class Punctation extends React.Component {
  render() {
    return (
        <div class="player">
        <div>Score PlayerX:
            <span></span>
        </div>
        <div>Score PlayerO:
            <span></span>
        </div>
        <div>Number of draw:
            <span></span>
        </div>
    </div>
    );
  }
}