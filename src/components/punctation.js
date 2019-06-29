import React from 'react';

export class Punctation extends React.Component {

  render() {
    return (
      <div>
        <h2>Punctation</h2>
        <div>
          Score PlayerX <span>{this.props.scorePlayerX}</span>
        </div>
        <div>
          Score PlayerO <span>{this.props.scorePlayerO} </span>
        </div>
        <div>
          Number of draw <span>{this.props.numberOfDraws}</span>
        </div>
      </div>
    );
  }
}