import React from 'react';
import './game.css';
import { Board } from '../board/board';
import { Button } from '../button/button';
import { Players } from '../players/players';

export class Game extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Tic Tac Toe</h1>
        <aside className="left">
         <div id="playerInfo">
             <h2>Who's Turn</h2>
             <Players/>
         </div>
     </aside>
        <div className="game-area">
        <Board />
        <Button/>
        </div>
      </div>
    );
  }
}