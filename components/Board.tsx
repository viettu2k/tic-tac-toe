import React from 'react'
import { OIcon } from './OIcon'
import { XIcon } from './XIcon'

interface PlayerProp {
  winner: string
  playerX: boolean
  squares: Array<any>
  handlePlayer(i: number): void
  handleRestartGame(): void
}

interface SquareProp {
  value: JSX.Element | string | null
  onClick(): void
}

export const Board = ({
  winner,
  playerX,
  handlePlayer,
  handleRestartGame,
  squares,
}: PlayerProp) => {
  // Square Button and RenderSquare function
  function Square({ value, onClick }: SquareProp) {
    return (
      <button
        className="square"
        onClick={onClick}
        disabled={winner ? true : false}
      >
        {value}
      </button>
    )
  }

  function value(i: number) {
    let value
    if (squares[i] === 'X') {
      value = <XIcon />
    } else if (squares[i] === 'O') {
      value = <OIcon />
    } else {
      value = null
    }

    return value
  }

  const renderSquare = (i: number) => {
    return <Square value={value(i)} onClick={() => handlePlayer(i)} />
  }

  return (
    <div>
      <div className="board">
        <div className=" md:[w-400px] flex w-[300px] items-center justify-center space-x-10 rounded-lg">
          <div>
            {playerX ? (
              <div className="w-28 rounded-lg bg-gray-700 px-4 py-1 text-xl font-medium uppercase text-white">
                <span className="text-2xl font-bold text-[#30c4bd]">X</span>{' '}
                Turn
              </div>
            ) : (
              <div className="w-28 rounded-lg bg-gray-700 px-4 py-1 text-xl font-medium uppercase  text-white">
                <span className=" text-2xl font-bold  text-[#f3b236]">O</span>{' '}
                Turn
              </div>
            )}
          </div>
          <button
            onClick={handleRestartGame}
            className="button group rounded-md bg-[#f3b236] px-2 py-1 hover:bg-[#30c4bd] hover:ring-4 hover:ring-cyan-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="eas-in h-8 w-8 transition duration-300 group-hover:rotate-180  "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </button>
        </div>
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>

        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>

        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
    </div>
  )
}
