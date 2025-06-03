let boardState = [];
let selectedPiece = null;
let currentPlayer = 'red';
let isInMultiJump = false;

function startGame() {
  resetGame();
  initBoard();
  initPieces();
  updateStatus(`${capitalize(currentPlayer)}'s turn`);
}

function resetGame() {
  boardState = [];
  selectedPiece = null;
  isInMultiJump = false;
  currentPlayer = 'red'; // Reset to red on new game
  const board = document.getElementById('board');
  board.innerHTML = '';
  updateStatus('');
}

function initBoard() {
  const board = document.getElementById('board');
  for (let row = 0; row < 8; row++) {
    boardState[row] = [];
    for (let col = 0; col < 8; col++) {
      const square = document.createElement('div');
      square.classList.add('square');
      square.dataset.row = row;
      square.dataset.col = col;

      const isDark = (row + col) % 2 === 1;
      square.classList.add(isDark ? 'dark-square' : 'light-square');
      if (isDark) {
        square.addEventListener('click', () => onSquareClick(row, col));
      }

      board.appendChild(square);
      boardState[row][col] = null;
    }
  }
}

function initPieces() {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 8; col++) {
      if ((row + col) % 2 === 1) addPiece(row, col, 'black');
    }
  }

  for (let row = 5; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      if ((row + col) % 2 === 1) addPiece(row, col, 'red');
    }
  }
  refreshPieceListeners();
}

function addPiece(row, col, color) {
  const piece = document.createElement('div');
  piece.classList.add('piece', color);
  piece.dataset.color = color;
  piece.dataset.king = 'false';
  piece.textContent = '';

  getSquare(row, col).appendChild(piece);
  boardState[row][col] = { color, isKing: false };
}

function refreshPieceListeners() {
  document.querySelectorAll('.piece').forEach(piece => {
    piece.onclick = (e) => {
      const square = piece.parentElement;
      const row = parseInt(square.dataset.row);
      const col = parseInt(square.dataset.col);
      onPieceClick(row, col);
      e.stopPropagation();
    };
  });
}

function onPieceClick(row, col) {
  const piece = boardState[row][col];
  if (!piece || piece.color !== currentPlayer) return;

  if (isInMultiJump && (!selectedPiece || selectedPiece.row !== row || selectedPiece.col !== col)) {
    return; // Can't select another piece during multi-jump
  }

  selectedPiece = { row, col };
  highlightSelected(row, col);
  showPossibleMoves(row, col);
}

function onSquareClick(row, col) {
  if (!selectedPiece) return;
  const { row: fromRow, col: fromCol } = selectedPiece;

  const moveType = getMoveType(fromRow, fromCol, row, col);
  if (moveType === 'invalid') return;

  if (moveType === 'jump') {
    const jumpedRow = (fromRow + row) / 2;
    const jumpedCol = (fromCol + col) / 2;
    removePiece(jumpedRow, jumpedCol);
  }

  movePiece(fromRow, fromCol, row, col);

  const canContinueJump = canJump(row, col);
  if (moveType === 'jump' && canContinueJump) {
    isInMultiJump = true;
    selectedPiece = { row, col };
    highlightSelected(row, col);
    showPossibleMoves(row, col);
  } else {
    isInMultiJump = false;
    selectedPiece = null;
    if (checkGameOver()) return; // If game ended, do not switch player
    switchPlayer();
    clearHighlights();
  }
}

function getMoveType(fromRow, fromCol, toRow, toCol) {
  const piece = boardState[fromRow][fromCol];
  if (!piece || !isInBounds(toRow, toCol) || boardState[toRow][toCol]) return 'invalid';

  const dr = toRow - fromRow;
  const dc = toCol - fromCol;

  // Normal move (1 step diagonal)
  if (Math.abs(dr) === 1 && Math.abs(dc) === 1) {
    if (piece.isKing) return 'normal';
    if (piece.color === 'red' && dr === -1) return 'normal';
    if (piece.color === 'black' && dr === 1) return 'normal';
    return 'invalid';
  }

  // Jump move (2 steps diagonal)
  if (Math.abs(dr) === 2 && Math.abs(dc) === 2) {
    const midRow = fromRow + dr / 2;
    const midCol = fromCol + dc / 2;
    const midPiece = boardState[midRow]?.[midCol];
    if (!midPiece || midPiece.color === piece.color) return 'invalid';

    if (piece.isKing) return 'jump';
    if (piece.color === 'red' && dr === -2) return 'jump';
    if (piece.color === 'black' && dr === 2) return 'jump';

    return 'invalid';
  }

  return 'invalid';
}

function movePiece(fromRow, fromCol, toRow, toCol) {
  const pieceData = boardState[fromRow][fromCol];
  const pieceElem = getSquare(fromRow, fromCol).querySelector('.piece');
  getSquare(fromRow, fromCol).innerHTML = '';

  boardState[toRow][toCol] = pieceData;
  boardState[fromRow][fromCol] = null;

  getSquare(toRow, toCol).appendChild(pieceElem);

  if (!pieceData.isKing) {
    if ((pieceData.color === 'red' && toRow === 0) ||
        (pieceData.color === 'black' && toRow === 7)) {
      kingPiece(toRow, toCol);
    }
  }

  refreshPieceListeners();
}

function kingPiece(row, col) {
  const pieceData = boardState[row][col];
  if (!pieceData) return;

  pieceData.isKing = true;

  const pieceElem = getSquare(row, col).querySelector('.piece');
  pieceElem.dataset.king = 'true';

  pieceElem.textContent = '★';
}

function removePiece(row, col) {
  getSquare(row, col).innerHTML = '';
  boardState[row][col] = null;
}

function switchPlayer() {
  currentPlayer = currentPlayer === 'red' ? 'black' : 'red';
  updateStatus(`${capitalize(currentPlayer)}'s turn`);
}

function getSquare(row, col) {
  return document.querySelector(`.square[data-row="${row}"][data-col="${col}"]`);
}

function updateStatus(msg) {
  document.getElementById('gameStatus').textContent = msg;
}

function highlightSelected(row, col) {
  clearHighlights();
  getSquare(row, col).classList.add('ring-4', 'ring-yellow-400');
}

function clearHighlights() {
  document.querySelectorAll('.square').forEach(sq =>
    sq.classList.remove('ring-4', 'ring-yellow-400', 'ring-green-500')
  );
}

function showPossibleMoves(row, col) {
  clearHighlights();
  highlightSelected(row, col);

  const jumps = getValidJumps(row, col);
  const piece = boardState[row][col];
  if (!piece) return;

  const directions = piece.isKing
    ? [[-1, -1], [-1, 1], [1, -1], [1, 1]]
    : (piece.color === 'red' ? [[-1, -1], [-1, 1]] : [[1, -1], [1, 1]]);

  if (!isInMultiJump) {
    directions.forEach(([dr, dc]) => {
      const r = row + dr, c = col + dc;
      if (isInBounds(r, c) && !boardState[r][c]) {
        getSquare(r, c).classList.add('ring-4', 'ring-green-500');
      }
    });
  }

  jumps.forEach(([r, c]) => {
    getSquare(r, c).classList.add('ring-4', 'ring-green-500');
  });
}

function getValidJumps(row, col) {
  const piece = boardState[row][col];
  if (!piece) return [];

  const jumps = [];
  const directions = piece.isKing
    ? [[-2, -2], [-2, 2], [2, -2], [2, 2]]
    : (piece.color === 'red' ? [[-2, -2], [-2, 2]] : [[2, -2], [2, 2]]);

  directions.forEach(([dr, dc]) => {
    const r = row + dr;
    const c = col + dc;
    const midRow = row + dr / 2;
    const midCol = col + dc / 2;
    const midPiece = boardState[midRow]?.[midCol];

    if (
      isInBounds(r, c) &&
      !boardState[r][c] &&
      midPiece &&
      midPiece.color !== piece.color
    ) {
      jumps.push([r, c]);
    }
  });

  return jumps;
}

function canJump(row, col) {
  return getValidJumps(row, col).length > 0;
}

function isInBounds(row, col) {
  return row >= 0 && row < 8 && col >= 0 && col < 8;
}

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function checkGameOver() {
  // Check if current opponent has any pieces or valid moves
  const opponent = currentPlayer === 'red' ? 'black' : 'red';

  // Check opponent pieces count
  const opponentPieces = [];
  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 8; c++) {
      const piece = boardState[r][c];
      if (piece && piece.color === opponent) {
        opponentPieces.push({ row: r, col: c });
      }
    }
  }

  if (opponentPieces.length === 0) {
    announceWinner(currentPlayer);
    return true;
  }

  // Check if opponent has any valid moves
  for (const pos of opponentPieces) {
    if (hasValidMove(pos.row, pos.col)) {
      return false;
    }
  }

  // Opponent cannot move - current player wins
  announceWinner(currentPlayer);
  return true;
}

function hasValidMove(row, col) {
  const piece = boardState[row][col];
  if (!piece) return false;

  const directions = piece.isKing
    ? [[-1, -1], [-1, 1], [1, -1], [1, 1]]
    : (piece.color === 'red' ? [[-1, -1], [-1, 1]] : [[1, -1], [1, 1]]);

  // Check normal moves
  for (const [dr, dc] of directions) {
    const nr = row + dr;
    const nc = col + dc;
    if (isInBounds(nr, nc) && !boardState[nr][nc]) return true;
  }

  // Check jumps
  return getValidJumps(row, col).length > 0;
}

function announceWinner(winner) {
  updateStatus(`${capitalize(winner)} wins!`);

  // Delay 3 seconds then reset game
  setTimeout(() => {
    resetGame();
    startGame();
  }, 3000);
}

// Run on page load
window.onload = () => {
  startGame();
};
