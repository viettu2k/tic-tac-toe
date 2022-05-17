import React from 'react'
import { OIcon } from './OIcon'
import { XIcon } from './XIcon'

interface PlayerProp {
  handlePlayerX(): void;
  handlePlayerO(): void;
  handleNewGame(): void;
}

export const ChoosePlayer = ({
  handlePlayerX,
  handleNewGame,
  handlePlayerO,
}: PlayerProp) => {
  return (
    <div className="justofy-center mx-auto mt-20 flex w-[500px] flex-col items-center md:mt-16">
      <div className="flex items-center justify-center space-x-4 rounded-xl px-6 py-2">
        <XIcon />
        <OIcon />
      </div>
      <div className="mt-6 flex h-64 w-[400px] flex-col items-center space-y-6 rounded-2xl bg-[#1f3540] py-8 md:h-72 md:w-[500px] md:space-y-8">
        <p className="text-md font-semibold uppercase text-gray-300  md:text-xl ">
          Please Select
          {'  '}
          <span className="text-xl font-bold text-[#30c4bd] ">X</span>
          {'  '}
          or
          {'  '}
          <span className="text-xl font-bold text-[#f3b236]">O</span>
        </p>
        <div className="flex h-24  w-3/4 items-center justify-evenly rounded-2xl bg-gray-800 p-6 ">
          <button
            onClick={handlePlayerX}
            className="trasnsition flex items-center justify-center rounded-xl px-6 py-2 duration-300 ease-in hover:bg-[#bcfefb] focus:bg-gray-300 "
          >
            <XIcon />
          </button>
          <button
            onClick={handlePlayerO}
            className="trasnsition flex items-center justify-center rounded-xl px-6 py-2 duration-300 ease-in hover:bg-[#ffe1a9] focus:bg-gray-300 "
          >
            <OIcon />
          </button>
        </div>
        <p className="text-md font-semibold uppercase text-gray-500  md:text-xl ">
          {' '}
          Remember: X goes first
        </p>
      </div>
      <button
        onClick={handleNewGame}
        className="button mt-8 rounded-xl bg-[#f3b236] px-6 py-3 hover:bg-[#30c4bd] hover:ring-4 hover:ring-cyan-300"
      >
        Start Game
      </button>
    </div>
  )
}
