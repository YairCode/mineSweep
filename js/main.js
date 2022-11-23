'use strict'

//בעזרת השם נעשה ונצליח

const MINE = '💣'
const FLAG = '🚩'
const NORMAL = '😟'
const LOSE = '🤯'
const WIN = '😎'

//model

var mineCount = 0
var gLevel
var gBoard
var clickPos
var timer
var negCount

// function initGame(){

gBoard = buildBoard()

console.log('gBoard', gBoard)
sendMinesCount(gBoard)
renderBoard(gBoard, '.board-container')







// negsMineInsert()







// function negsMineInsert() {
//     for (var i = 0; i < gBoard.length; i++) {
//         for (var j = 0; j < gBoard[0].length; j++)

//          gBoard[i][j].minesAroundCount = countMines(i, j, gBoard)
// }

//     }

// function setMinesNegsCount(board) {}


function buildBoard() {
    const board = []
    const rowCount = 4
    const colCount = 4
    
    for (var i = 0; i < rowCount; i++) {
        board[i] = []
        for (var j = 0; j < colCount; j++) {
            board[i][j] = {
                minesAroundCount: 0,
                isShown: false, isMine: false, isMarked: false
            }
        }
    }

    board[0][0].isMine = MINE
    board[1][1].isMine = MINE
    return board
}


function minesAroundCount(board) {
    var cellI = board[i]
    var cellJ = board[j]
    var minesCount = 0
    for (var i = cellI - 1; i <= cellI + 1; i++) {
        if (i < 0 || i >= board.length) continue
        for (var j = cellJ - 1; j <= cellJ + 1; j++) {
            if (i === cellI && j === cellJ) continue
            if (j < 0 || j >= board[i].length) continue
            if (board[i][j].isMine === MINE) minesCount++
        }

    }
    
    return minesCount
}

function sendMinesCount(board){
    var minesCount = 0
    board[0][0].minesAroundCount = minesCount


}



function renderBoard(mat, selector) {

    
    
    var strHTML = '<table border="0"><tbody>'
    for (var i = 0; i < mat.length; i++) {

        strHTML += '<tr>'
        for (var j = 0; j < mat[0].length; j++) {

            const cell = mat[i][j]
            const className = `cell cell-${i}-${j}`
               
            strHTML += `<td onclick='this' class="${className}${gBoard[i][j].isMine}
            ${gBoard[i][j].minesAroundCount}">Place</td>`

            


            
            

        }
        strHTML += '</tr>'
    }
    strHTML += '</tbody></table>'

    const elContainer = document.querySelector(selector)
    elContainer.innerHTML = strHTML
}




// create neg loop that counts arround clickable area and gives number in cell


//on click turn tile (like numbers game)




