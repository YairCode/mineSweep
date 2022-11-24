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
var cellPos
var timer
var negCount
var gCellPos

// function initGame(){

gBoard = buildBoard()
console.log(gBoard)



// minesAroundCount(gBoard)


renderBoard(gBoard, '.board-container')



function renderBoard(mat, selector) {

    var strHTML = '<table border="0"><tbody>'
    for (var i = 0; i < mat.length; i++) {

        strHTML += '<tr>'
        for (var j = 0; j < mat[0].length; j++) {

            const cell = mat[i][j]
            const className = `cell cell-${i}-${j}`


            var innerText = `${countNeighbors(mat[i][j].i, mat[i][j].j, gBoard)}`
          
                  
            if (mat[i][j].isMine) {
                innerText = MINE
            } else {
                innerText = `${countNeighbors(mat[i][j].i, mat[i][j].j, gBoard)}`
            }

            strHTML += `<td class = "cell" onclick='{clickedCell()}'
             ${mat[i][j].isMine} id="{i:${mat[i][j].i}-j:${mat[i][j].j}\}">
            ${innerText}</td>`
        }
        strHTML += '</tr>'
    }
    strHTML += '</tbody></table>'

    const elContainer = document.querySelector(selector)
    elContainer.innerHTML = strHTML
}

var cellInnerText = document.querySelector("#\\{i\\:0-j\\:0\\}")





function buildBoard() {
    const board = []
    const rowCount = 4
    const colCount = 4

    for (var i = 0; i < rowCount; i++) {
        board[i] = []
        for (var j = 0; j < colCount; j++) {
            board[i][j] = {
                i: i, j: j, minesAroundCount: 0,
                isShown: false, isMine: false, isMarked: false
            }
        }
    }
    board[0][0].isMine = MINE
    board[3][3].isMine = MINE
    board[0][1].isMine = MINE

    return board
}
setMinesNegsCount()

function setMinesNegsCount() {

    for (var i = 0; i < gBoard.length; i++) {
        for (var j; j < gBoard[0].length; j++) {
            var cellI = gBoard[i][j].i
            var cellJ = gBoard[i][j].j


        }
    }

}

var elSelctor = document.querySelector('.board-conatainer')
console.log('td', elSelctor)

console.log('getCell', getCell.id)


var mineCount = countNeighbors(1, 0, gBoard)
console.log('mineCount', mineCount)

function countNeighbors(cellI, cellJ, board) {
    var neighborsCount = 0;
    for (var i = cellI - 1; i <= cellI + 1; i++) {
        if (i < 0 || i >= board.length) continue;
        for (var j = cellJ - 1; j <= cellJ + 1; j++) {
            if (j < 0 || j >= board[i].length) continue;
            if (i === cellI && j === cellJ) continue;
            if (board[i][j].isMine) neighborsCount++;
        }
    }
    return (neighborsCount>0?neighborsCount:'' );
}

document.querySelector("#\\{i\\:0-j\\:0\\}")



