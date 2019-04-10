import React from 'react';
import './status.css';
import { TicTacToeGameStatus } from '../models/ticTacToeGameStatus';

export class Status extends React.Component {
  render() {
    return (
      <div >
        {(() => {
          switch (this.props.status) {
            case TicTacToeGameStatus.STATUS_X_WINS:
              return <span className="winner-status">Winer is X</span>;
            case TicTacToeGameStatus.STATUS_O_WINS:
              return <span className="winner-status">Winer is O</span>;
              case TicTacToeGameStatus.STATUS_DRAW:
              return <span className="winner-status">Draw</span>;
            default:
              return <span></span>;
          }
        })()}
      </div>
    );
  }
}