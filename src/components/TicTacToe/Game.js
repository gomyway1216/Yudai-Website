import React, { useState, useEffect, useRef } from 'react'
import Board from './Board'
import { calculateWinner } from './calculator'
import { minimax } from './ai'
import styles from './game.module.css'

const Game = props => {
  const humanTurn = 'X'
  const aiTurn = 'O'
  const squares = [0, 1, 2, 3, 4, 5, 6, 7, 8]
  const initialHistory = [{ squares: squares }]
  const [history, setHistory] = useState(initialHistory)
  // toggle between X and O
  const [xIsNext, setXIsNext] = useState(true)
  // set the number of steps
  const [stepNumber, setStepNumber] = useState(0)
  const [isLookingHistory, setIsLookingHistory] = useState(false)

  useEffect(() => {
    function callAI() {
      const slicedHistory = history.slice(0, stepNumber + 1)
      const finalStepInSlicedHistory = slicedHistory[slicedHistory.length - 1]
      const newSquares = [...finalStepInSlicedHistory.squares]

      const turn = xIsNext ? 'X' : 'O'
      const result = minimax(newSquares, turn, 'X')

      newSquares[result.index] = xIsNext ? 'X' : 'O'
      const newStep = { squares: newSquares }
      const newHistory = [...slicedHistory, newStep]

      setHistory(newHistory)
      setXIsNext(!xIsNext)
      setStepNumber(slicedHistory.length)
    }
    if (!xIsNext && !isLookingHistory) {
      callAI()
    }
  }, [xIsNext])

  const handleClick = i => {
    const slicedHistory = history.slice(0, stepNumber + 1)
    const finalStepInSlicedHistory = slicedHistory[slicedHistory.length - 1]
    const newSquares = [...finalStepInSlicedHistory.squares]

    const winnerDeclared = Boolean(calculateWinner(newSquares))
    let squareAlreadyFilled = false
    if (newSquares[i] === 'O' || newSquares[i] === 'X') {
      squareAlreadyFilled = true
    }
    if (winnerDeclared || squareAlreadyFilled) return

    newSquares[i] = xIsNext ? 'X' : 'O'
    const newStep = { squares: newSquares }
    const newHistory = [...slicedHistory, newStep]
    setHistory(newHistory)
    setXIsNext(!xIsNext)
    setStepNumber(slicedHistory.length)
    setIsLookingHistory(false)
  }

  const moves = history.map((step, move) => {
    const description = Boolean(move)
      ? `Go to move #${move}`
      : `Go to game start`
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    )
  })

  const jumpTo = step => {
    setIsLookingHistory(true)
    setStepNumber(step)
    const isEvenStepNumber = step % 2 === 0
    setXIsNext(isEvenStepNumber)
  }

  const currentStep = history[stepNumber]
  const winner = calculateWinner(currentStep.squares)

  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${xIsNext ? 'X' : 'O'}`

  const disableClick = isLookingHistory && !xIsNext
  return (
    <div className={styles.game}>
      <div className={styles.gameBoard}>
        <Board
          disabled={disableClick}
          squares={currentStep.squares}
          onClick={i => {
            if (!disableClick) {
              handleClick(i)
            }
          }}
        />
      </div>
      <div className={styles.gameInfo}>
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  )
}

export default Game
