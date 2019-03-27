import React from 'react';
import './game.css';
import { Board } from './board';
import {ResetButton} from './resetButton'
import { PlayerInfo } from './playerInfo';
import { Punctation } from './punctation';
import { Status } from './status';

export class Game extends React.Component {
  render() {
    return (
      <div className="container">
        <header>Tic Tac Toe</header>
        <aside className="left">
          <PlayerInfo />
        </aside>
        <article>
          <Board />
          <ResetButton />
          <Status />
        </article>
        <aside class="right">
          <Punctation />
        </aside>
      </div>
    );
  }
}