import { calculateWinner } from './calculator'

/**
 * @param {('X' | 'O')[]} newBoard
 * @param {'X' | 'O'} player
 * @param {'X' | 'O'} humanPlayer
 *
 * @returns
 */
export const minimax = (newBoard, player, humanPlayer) => {
  const availableSpots = emptySpots(newBoard)
  const currentWinningState = calculateWinner(newBoard)
  // the game hasn't ended yet
  if (currentWinningState) {
    if (currentWinningState === humanPlayer) {
      return { score: -100 }
    } else {
      return { score: 100 }
    }
  } else if (availableSpots.length === 0) {
    // if it is a tie
    return { score: 0 }
  }

  let moves = []
  for (let i = 0; i < availableSpots.length; i++) {
    let move = {}
    const nextIndex = availableSpots[i]
    move.index = newBoard[nextIndex]
    newBoard[nextIndex] = player
    const nextPlayer = player === 'X' ? 'O' : 'X'
    let result = minimax(newBoard, nextPlayer, humanPlayer)
    move.score = result.score
    newBoard[nextIndex] = move.index
    moves.push(move)
  }

  // pick the best move
  let bestMove
  if (player === humanPlayer) {
    // keep the lowest score (assume human would choose the best move=> not good for ai)
    let minScore = 10000
    for (let i = 0; i < moves.length; i++) {
      if (moves[i].score < minScore) {
        minScore = moves[i].score
        bestMove = i
      }
    }
  } else {
    // keep the highest score for ai
    let maxScore = -10000
    for (let i = 0; i < moves.length; i++) {
      if (moves[i].score > maxScore) {
        maxScore = moves[i].score
        bestMove = i
      }
    }
  }

  return moves[bestMove]
}

const emptySpots = board => {
  const filteredBoard = board.filter(s => !s)
  return board.filter(s => {
    if (s !== 'X' && s !== 'O') {
      return true
    }
  })
}
