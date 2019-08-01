import {TicTacToeGame} from './ticTacToeGame';
import {TicTacToeGamePlayers} from './ticTacToeGamePlayers';
import {TicTacToeGameStatus} from './ticTacToeGameStatus';

describe('TicTacToeGame', () => {
    let game;

    beforeEach(() => {
        game = new TicTacToeGame();
    });

    test('Given game, when game begins, then contains a board', () => {
        expect(game.board).toBeDefined();
    });

    test('Given game, when game begins, then board is of 9 empty elements', () => {
        expect(game.board).toEqual([undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]);
    });

    test('Given game, when game begins, then X player should start', () => {
        expect(game.nextPlayer).toEqual(TicTacToeGamePlayers.X);
    });

    test('Given game, when move once, then next player should be O', () => {
        const wasSuccessfull = game.move(0);
        expect(game.board).toEqual([TicTacToeGamePlayers.X, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]);
        expect(game.nextPlayer).toEqual(TicTacToeGamePlayers.O);
        expect(wasSuccessfull).toEqual(true);
    });

    test('Given game, when move twice, then next player should be X', () => {
        game.move(0); //x
        game.move(2); //o
        expect(game.board).toEqual([TicTacToeGamePlayers.X, undefined, TicTacToeGamePlayers.O, undefined, undefined, undefined, undefined, undefined, undefined]);
        expect(game.nextPlayer).toEqual(TicTacToeGamePlayers.X);
    });
    test('Given game, when player tries moving on the position that was already used, then state of the game does not change', () => {
        game.move(0); //x
        game.move(2); //o
        const wasSuccessfull = game.move(2); //x
        expect(game.board).toEqual([TicTacToeGamePlayers.X, undefined, TicTacToeGamePlayers.O, undefined, undefined, undefined, undefined, undefined, undefined]);
        expect(game.nextPlayer).toEqual(TicTacToeGamePlayers.X);
        expect(wasSuccessfull).toEqual(false);
    });
    test('Given game, when moves were made and X occurs in all cells of one line, then X wins', () => {
        game.move(0); //x
        game.move(3); //o
        game.move(1); //x
        game.move(4); //o
        game.move(2); //x
        expect(game.board).toEqual([TicTacToeGamePlayers.X, TicTacToeGamePlayers.X, TicTacToeGamePlayers.X, TicTacToeGamePlayers.O, TicTacToeGamePlayers.O, undefined, undefined, undefined, undefined]);
        expect(game.status()).toEqual(TicTacToeGameStatus.STATUS_X_WINS);
    });
    test('Given game, when moves were made and O occurs in all cells of one line, then O wins', () => {
        game.move(1); //x
        game.move(2); //o
        game.move(5); //x
        game.move(4); //o
        game.move(7); //x
        game.move(6); //o
        expect(game.board).toEqual([undefined, TicTacToeGamePlayers.X, TicTacToeGamePlayers.O, undefined, TicTacToeGamePlayers.O, TicTacToeGamePlayers.X, TicTacToeGamePlayers.O, TicTacToeGamePlayers.X, undefined]);
        expect(game.status()).toEqual(TicTacToeGameStatus.STATUS_O_WINS);
    });

    test('Given game, when moves were made and neither X nor O occupy cells in one line and empty spaces left, then game is unfinished', () => {
        game.move(0); //x
        game.move(2); //o
        game.move(1); //x
        game.move(3); //o
        game.move(5); //x
        game.move(4); //o
        game.move(6); //x
        game.move(7); //o
        expect(game.board).toEqual([TicTacToeGamePlayers.X, TicTacToeGamePlayers.X, TicTacToeGamePlayers.O, TicTacToeGamePlayers.O, TicTacToeGamePlayers.O, TicTacToeGamePlayers.X, TicTacToeGamePlayers.X, TicTacToeGamePlayers.O, undefined]);
        expect(game.status()).toEqual(TicTacToeGameStatus.STATUS_UNFINISHED);
    });

    test('Given game status, when moves makes and neither X nor O occupy cells in one line and any spaces left, then game is draw', () => {
        game.move(0); //x
        game.move(2); //o
        game.move(1); //x
        game.move(3); //o
        game.move(5); //x
        game.move(4); //o
        game.move(6); //x
        game.move(7); //o
        game.move(8); //x
        expect(game.board).toEqual([TicTacToeGamePlayers.X, TicTacToeGamePlayers.X, TicTacToeGamePlayers.O, TicTacToeGamePlayers.O, TicTacToeGamePlayers.O, TicTacToeGamePlayers.X, TicTacToeGamePlayers.X, TicTacToeGamePlayers.O, TicTacToeGamePlayers.X]);
        expect(game.status()).toEqual(TicTacToeGameStatus.STATUS_DRAW);
    });

    test('Given game, when game is reseted, then player O starts game', () => {
        game.reset();
        expect(game.nextPlayer).toEqual(TicTacToeGamePlayers.O);
    });

    test('Given game, when even number of moves were made and game is reseted, then O starts game because number of moves does not matter', () => {
        game.move(0);//x
        game.move(1);//o
        game.reset();
        expect(game.nextPlayer).toEqual(TicTacToeGamePlayers.O);
    });

    test('Given game, when odd number of moves were made and game is reseted, then O starts game because number of moves does not matter', () => {
        game.move(0);//x
        game.move(1);//o
        game.move(2);//x
        game.reset();
        expect(game.nextPlayer).toEqual(TicTacToeGamePlayers.O);
    });

    test('Given game, when game is reseted twice, then X starts next game', () => {
        game.reset();
        game.reset();
        expect(game.nextPlayer).toEqual(TicTacToeGamePlayers.X);
    });
    
    test('Given game, when no moves were done, then there is no winning combination', () => {
        expect(game.getWinningCombination()).toBeUndefined();
    });

    test('Given game, when x sets first row, then first row is a winning combination', () => {
        game.move(0); //x
        game.move(3); //o
        game.move(1); //x
        game.move(4); //o
        game.move(2); //x
        const winningCombination = game.getWinningCombination();
        expect(winningCombination.position1).toEqual(0);
        expect(winningCombination.position2).toEqual(1);
        expect(winningCombination.position3).toEqual(2);
    });

    test('Given game, when x sets first row and game is reseted, then there is no winning combination ', () => {
        game.move(0); //x
        game.move(3); //o
        game.move(1); //x
        game.move(4); //o
        game.move(2); //x
        game.reset();
        expect(game.getWinningCombination()).toBeUndefined();
    });

    test('Given game, when game status is a draw, then there is no winning combination ', () => {
        game.move(0); //x
        game.move(2); //o
        game.move(1); //x
        game.move(3); //o
        game.move(5); //x
        game.move(4); //o
        game.move(6); //x
        game.move(7); //o
        game.move(8); //x
        expect(game.getWinningCombination()).toBeUndefined();
    });
});