import React, { useState } from 'react';
import { Board } from './components/Board';
import { calculateWinner, isBoardFull } from './utils/gameLogic';
import { GameState } from './types';
import { RotateCcw } from 'lucide-react';

function App() {
  const [squares, setSquares] = useState<GameState>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winningLine = calculateWinner(squares);
  const winner = winningLine ? squares[winningLine[0]] : null;
  const isDraw = !winner && isBoardFull(squares);

  const handleClick = (i: number) => {
    if (squares[i] || calculateWinner(squares)) return;

    const newSquares = squares.slice();
    newSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  const getStatus = () => {
    if (winner) {
      return `Winner: ${winner}`;
    }
    if (isDraw) {
      return "It's a draw!";
    }
    return `Next player: ${xIsNext ? 'X' : 'O'}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Tic Tac Toe
        </h1>
        
        <div className="flex flex-col items-center gap-6">
          <div className="text-xl font-semibold text-gray-700">
            {getStatus()}
          </div>

          <Board
            squares={squares}
            onSquareClick={handleClick}
            winningLine={winningLine}
          />

          <button
            onClick={resetGame}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg
              hover:bg-blue-700 transition-colors duration-200"
          >
            <RotateCcw className="w-5 h-5" />
            Reset Game
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;