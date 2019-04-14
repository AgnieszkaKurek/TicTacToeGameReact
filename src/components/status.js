import React from 'react';
import './status.css';
import { TicTacToeGameStatus } from '../models/ticTacToeGameStatus';

export class Status extends React.Component {
  render() {
    return (
      <div className="status-component">
        {(() => {
          switch (this.props.status) {
            case TicTacToeGameStatus.STATUS_X_WINS:
              return <span>Winer is X</span>;
            case TicTacToeGameStatus.STATUS_O_WINS:
              return <span>Winer is O</span>;
            case TicTacToeGameStatus.STATUS_DRAW:
              return <span>Draw</span>;
            default:
              return;
          }
        })()}
      </div>
    );
  }
}