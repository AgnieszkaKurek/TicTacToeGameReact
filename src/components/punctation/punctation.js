import React from 'react';

export class Punctation extends React.Component {
  render() {
    return (
        <div class="player">
        <div>Score PlayerX:
            <span id="scorePlayerX"></span>
        </div>
        <div>Score PlayerO:
            <span id="scorePlayerO"></span>
        </div>
        <div>Number of draw:
            <span id="numberOfDraws"></span>
        </div>
    </div>
    );
  }
}