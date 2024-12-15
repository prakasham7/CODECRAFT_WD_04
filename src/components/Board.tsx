import React from 'react';
import { Square } from './Square';
import { GameState } from '../types';

interface BoardProps {
  squares: GameState;
  onSquareClick: (index: number) => void;
  winningLine: number[] | null;
}

export function Board({ squares, onSquareClick, winningLine }: BoardProps) {
  const renderSquare = (i: number) => {
    const isWinning = winningLine?.includes(i);
    return (
      <Square
        value={squares[i]}
        onClick={() => onSquareClick(i)}
        isWinning={isWinning}
      />
    );
  };

  return (
    <div className="grid grid-cols-3 gap-2 w-72 h-72">
      {Array(9)
        .fill(null)
        .map((_, i) => (
          <div key={i}>{renderSquare(i)}</div>
        ))}
    </div>
  );
}