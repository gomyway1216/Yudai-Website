import { calculateWinner } from './calculator'

export const minimax = (newBoard, player, humanPlayer) => {
  //   console.log('minimax current player: ', player)
  //   console.log('minimax current player: ', humanPlayer)
  const availableSpots = emptySpots(newBoard)
  const currentWinningState = calculateWinner(newBoard)
  //   console.log('currentWinningState', currentWinningState)
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
  //   console.log('availableSpots.length', availableSpots.length)
  for (let i = 0; i < availableSpots.length; i++) {
    let move = {}
    const nextIndex = availableSpots[i]
    move.index = newBoard[nextIndex]
    // console.log('nextIndex', nextIndex)
    newBoard[nextIndex] = player
    // console.log('newBoard', newBoard)
    const nextPlayer = player === 'X' ? 'O' : 'X'
    let result = minimax(newBoard, nextPlayer, humanPlayer)
    // console.log('this line might not be called')
    move.score = result.score
    newBoard[nextIndex] = move.index
    moves.push(move)
    // console.log('move', move)
  }

  //   console.log('moves'.moves)

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
  //   console.log('before board', board)
  const filteredBoard = board.filter(s => !s)
  //   console.log('after board', filteredBoard)
  //   console.log('emptySpots length', filteredBoard.length)
  //   console.log('filteredBoard', filteredBoard)
  return board.filter(s => {
    if (s !== 'X' && s !== 'O') {
      return true
    }
  })
}
