import React, { useState, useEffect, useRef } from 'react'
import Board from './Board'
import { calculateWinner } from './calculator'
import { minimax } from './ai'
import styles from './game.module.css'

const Symbol = {
  X: 'X',
  O: 'O',
}

const Game = props => {
  const squares = [0, 1, 2, 3, 4, 5, 6, 7, 8]
  const initialHistory = [{ squares: squares }]
  const [history, setHistory] = useState(initialHistory)
  // toggle between X and O
  const { humanSymbol, aiSymbol } = props
  const [isHumanTurn, setIsHumanTurn] = useState(humanSymbol === Symbol.X)

  // is this a good way of writing code?
  // const [isHumanTurn, setIsHumanTurn] = useState(Symbol.X)
  // if (humanSymbol === Symbol.O) {
  //   setIsHumanTurn(Symbol.X)
  // }

  // set the number of steps
  const [stepNumber, setStepNumber] = useState(0)
  const [isLookingHistory, setIsLookingHistory] = useState(false)

  useEffect(() => {
    const callAI = () => {
      const slicedHistory = history.slice(0, stepNumber + 1)
      const finalStepInSlicedHistory = slicedHistory[slicedHistory.length - 1]
      const newSquares = [...finalStepInSlicedHistory.squares]
      const result = minimax(newSquares, aiSymbol, humanSymbol)

      newSquares[result.index] = aiSymbol
      const newStep = { squares: newSquares }
      const newHistory = [...slicedHistory, newStep]
      setHistory(newHistory)
      setIsHumanTurn(true)
      setStepNumber(slicedHistory.length)
    }
    if (!isHumanTurn && !isLookingHistory) {
      callAI()
    }
  }, [isHumanTurn])

  // useEffect(() => {
  //   function callAI() {
  //     const slicedHistory = history.slice(0, stepNumber + 1)
  //     const finalStepInSlicedHistory = slicedHistory[slicedHistory.length - 1]
  //     const newSquares = [...finalStepInSlicedHistory.squares]

  //     const turn = xIsNext ? 'X' : 'O'
  //     const result = minimax(newSquares, turn, 'X')

  //     newSquares[result.index] = xIsNext ? 'X' : 'O'
  //     const newStep = { squares: newSquares }
  //     const newHistory = [...slicedHistory, newStep]

  //     setHistory(newHistory)
  //     setXIsNext(!xIsNext)
  //     setStepNumber(slicedHistory.length)
  //   }
  //   if (!xIsNext && !isLookingHistory) {
  //     callAI()
  //   }
  // }, [xIsNext])

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

    newSquares[i] = humanSymbol
    const newStep = { squares: newSquares }
    const newHistory = [...slicedHistory, newStep]
    setHistory(newHistory)
    setIsHumanTurn(false)
    setStepNumber(slicedHistory.length)
    setIsLookingHistory(false)
  }

  // const handleClick = i => {
  //   const slicedHistory = history.slice(0, stepNumber + 1)
  //   const finalStepInSlicedHistory = slicedHistory[slicedHistory.length - 1]
  //   const newSquares = [...finalStepInSlicedHistory.squares]

  //   const winnerDeclared = Boolean(calculateWinner(newSquares))
  //   let squareAlreadyFilled = false
  //   if (newSquares[i] === 'O' || newSquares[i] === 'X') {
  //     squareAlreadyFilled = true
  //   }
  //   if (winnerDeclared || squareAlreadyFilled) return

  //   newSquares[i] = xIsNext ? 'X' : 'O'
  //   const newStep = { squares: newSquares }
  //   const newHistory = [...slicedHistory, newStep]
  //   setHistory(newHistory)
  //   setXIsNext(!xIsNext)
  //   setStepNumber(slicedHistory.length)
  //   setIsLookingHistory(false)
  // }

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

    const isHumanSymbolX = humanSymbol === Symbol.X
    const isEvenStepNumber = step % 2 === 0
    if (isHumanSymbolX) {
      setIsHumanTurn(isEvenStepNumber)
    } else {
      setIsHumanTurn(!isEvenStepNumber)
    }
  }

  // const jumpTo = step => {
  //   setIsLookingHistory(true)
  //   setStepNumber(step)
  //   const isEvenStepNumber = step % 2 === 0
  //   setXIsNext(isEvenStepNumber)
  // }

  const currentStep = history[stepNumber]
  const winner = calculateWinner(currentStep.squares)

  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${isHumanTurn ? humanSymbol : aiSymbol}`

  const disableClick = isLookingHistory && !isHumanTurn
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
