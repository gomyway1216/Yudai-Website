import React, { useState } from 'react'
import Game from './Game'
import { Button } from '@material-ui/core'

const Symbol = {
  X: 'X',
  O: 'O',
}

const TicTacToe = () => {
  const [humanSymbol, setHumanSymbol] = useState(Symbol.X)
  const [aiSymbol, setAiSymbol] = useState(Symbol.O)

  const toggleTurn = () => {
    setHumanSymbol(humanSymbol === Symbol.X ? Symbol.O : Symbol.X)
    setAiSymbol(aiSymbol === Symbol.X ? Symbol.O : Symbol.X)
  }

  return (
    <div>
      <Button variant="contained" color="primary" onClick={toggleTurn}>
        toggle turn
      </Button>
      <div>User turn : {humanSymbol}</div>
      <Game humanSymbol={humanSymbol} aiSymbol={aiSymbol} />
    </div>
  )
}

export default TicTacToe
