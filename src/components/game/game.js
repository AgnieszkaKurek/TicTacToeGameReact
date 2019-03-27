import React from 'react';
import './game.css';
import { Board } from '../board/board';
import { Button } from '../button/button';
import { Players } from '../players/players';
import { Punctation } from '../punctation/punctation';
import { Status } from '../status/status';

export class Game extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Tic Tac Toe</h1>
        <aside className="left">
         <div>
             <h2>Who's Turn</h2>
             <Players/>
         </div>
     </aside>
        <div className="game-area">
        <Board />
        <Button/>
        <Status/>
        </div>
        <aside class="right">
            <h2>Punctation</h2>
          <Punctation/>
        </aside>
      </div>
    );
  }
}