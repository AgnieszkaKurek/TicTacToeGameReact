import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Box extends React.Component {
  render() {
    return (
      <button className="box">
      <canvas width="180" height="180" />
        {/* TODO */}
      </button>
    );
  }
  }

  class Board extends React.Component {
    rendererBox(i) {
      return <Box />;
    }
  
    render() {
      
      return (
        <div className="gameBoard">
          <div className="board-row">
            {this.rendererBox(0)}
            {this.rendererBox(1)}
            {this.rendererBox(2)}
            </div>
            <div className="board-row">
            {this.rendererBox(3)}
            {this.rendererBox(4)}
            {this.rendererBox(5)}
            </div>
            <div className="board-row">
            {this.rendererBox(6)}
            {this.rendererBox(7)}
            {this.rendererBox(8)}
          </div>
        </div>
      );
    }
  }

  class Game extends React.Component {
    render() {
      return (
        <div className="container">
        <header class="header">
            <h1>Tic Tac Toe</h1>
        </header>
          <div >
            <Board />
          </div>
        </div>
      );
    }
  }

  // ========================================

  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );

