import React from 'react'
import Game from './Game'

const Symbol = {
  X: 'X',
  O: 'O',
}

const TicTacToe = () => {
  return (
    <div>
      <button></button>
      <Game humanSymbol={Symbol.O} aiSymbol={Symbol.X} />
    </div>
  )
}

export default TicTacToe
