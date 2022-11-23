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

var gBallOnBoardCounter = 3
var gBallInterval
var gGlueInterval

gBoard = buildBoard()
negsMineInsert()
renderBoard(gBoard, '.board-container')

function cellClicked(elClickedNum, cell) {
    var elCount = document.querySelector('.counter')
    if (cell !== gNextNum) return
    if (cell === 1) gInterval = setInterval(timer, 1000)

    if (cell >= gLevel) {
        elCount.innerText = '😁'
        clearInterval(gInterval)
        return
    }
    gNextNum++
    elClickedNum.classList.add('locked')
    elCount.innerText = gNextNum

}



function negsMineInsert(){
for (var i = 0; i < gBoard.length; i++) {
    for (var j = 0; j < gBoard[0].length; j++) 

gBoard[i][j].minesAroundCount = countMines(i,j, gBoard)}
}
function setMinesNegsCount(board){
}


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
    board[3][2].isMine = MINE
setMinesNegsCount()
    return board
}


function countMines(cellI, cellJ, mat) {
    var minesCount = 0
    for (var i = cellI - 1; i <= cellI + 1; i++) {
        if (i < 0 || i >= mat.length) continue
        for (var j = cellJ - 1; j <= cellJ + 1; j++) {
            if (i === cellI && j === cellJ) continue
            if (j < 0 || j >= mat[i].length) continue
            if (mat[i][j].isMine === MINE) minesCount++
           
            

        }

    }
    return minesCount
}



function renderBoard(mat, selector) {

    var strHTML = '<table border="0"><tbody>'
    for (var i = 0; i < mat.length; i++) {

        strHTML += '<tr>'
        for (var j = 0; j < mat[0].length; j++) {

            const cell = mat[i][j]
            const className = `cell cell-${i}-${j}`

            strHTML += `<td class="${className}${gBoard[i][j].isMine}
            ${gBoard[i][j].minesAroundCount}"></td>`

        }
        strHTML += '</tr>'
    }
    strHTML += '</tbody></table>'

    const elContainer = document.querySelector(selector)
    elContainer.innerHTML = strHTML
}


// build 4X4 martix position two mines manually

// create neg loop that counts arround clickable area and gives number in cell


//on click turn tile (like numbers game)


