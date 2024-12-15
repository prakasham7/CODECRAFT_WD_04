import React from 'react';
import { X, Circle } from 'lucide-react';

interface SquareProps {
  value: string | null;
  onClick: () => void;
  isWinning?: boolean;
}

export function Square({ value, onClick, isWinning }: SquareProps) {
  return (
    <button
      className={`w-full h-24 bg-white rounded-lg shadow-md flex items-center justify-center
        transition-all duration-200 hover:bg-gray-50 active:scale-95
        ${isWinning ? 'bg-green-100 hover:bg-green-50' : ''}`}
      onClick={onClick}
    >
      {value === 'X' && (
        <X
          className={`w-12 h-12 text-blue-600 ${
            isWinning ? 'text-green-600' : ''
          }`}
        />
      )}
      {value === 'O' && (
        <Circle
          className={`w-12 h-12 text-red-600 ${
            isWinning ? 'text-green-600' : ''
          }`}
        />
      )}
    </button>
  );
}