function createCheckmateBoard() {

    var cellSize = 75
    var borderSize = 4
    var outBorderSize = 65
    var boardSize = 8 * cellSize
    var outBoardSize = boardSize + 2 * borderSize
    var darkColor = "#634640"
    var lightColor = "#bb9992"

    var outboard = document.getElementById("outboard")
    outboard.style.border = outBorderSize + "px solid" + darkColor
    outboard.style.height = outBoardSize + "px"
    outboard.style.width = outBoardSize + "px"

    var board = document.getElementById("board")
    board.style.border = borderSize + "px solid" + lightColor
    board.style.height = boardSize + "px"
    board.style.width = boardSize + "px"
    board.style.display = "flex"
    board.style.flexWrap = "wrap"

    for (var i = 1; i <= 8; i++) {
        for (var j = 1; j <= 8; j++) {
            var cell = document.createElement("div")
            cell.className = "cell"
            cell.style.display = "flex"
            cell.style.justifyContent = "center"
            cell.style.alignItems = "center"
            cell.style.width = cellSize + "px"
            cell.style.height = cellSize + "px"
            cell.style.backgroundColor = (((i + j) % 2 == 0) ? lightColor : darkColor)
            board.append(cell)
        }
    }

    var letters = "ABCDEFGH"

    var letterSize = "35px"

    function addLetter(cell, top, left, symbol, rotate = false) {
        cell.style.position = "relative"
        var letter = document.createElement("p")
        letter.style.position = "absolute"
        letter.style.top = top
        letter.style.left = left
        letter.style.margin = "0"
        if (rotate) letter.style.transform = "rotate(0.5turn)"
        letter.style.fontSize = letterSize
        letter.innerText = symbol
        cell.append(letter)
    }

    var cells = document.querySelectorAll(".cell")

    for (var i = 0; i <= 7; i++) { //Заполняем верхнюю сторону символами
        addLetter(cells[i], "-50px", "25px", letters[i], true)
    }
    for (var i = 0, j = 8; i <= 56; i += 8) { //Заполняем левую сторону цифрами
        addLetter(cells[i], "15px", "-40px", j--)
    }
    for (var i = 7, j = 8; i <= 63; i += 8) { //Заполняем правую сторону цифрами
        addLetter(cells[i], "15px", "100px", j--, true)
    }
    for (var i = 56; i <= 63; i++) { //Заполняем нижнюю сторону цифрами
        addLetter(cells[i], "90px", "25px", letters[i-56])
    }
}

function addFigure(cell, color, unicode, size, clName) {
    var figure = document.createElement("h2")
    figure.style.fontSize = size
    figure.style.color = color
    figure.className = clName
    figure.innerHTML = unicode
    cell.append(figure)
}

function fillBoardWithFigures() {
    var cells = document.querySelectorAll(".cell")
    var player1Color = "#fffff1"
    var player2Color = "#1d1615"
    var size = "66px"

    for (var i = 0; i <= 15; i++) { // Заполняем фигуры игрока 2
        if (i == 0 || i == 7) {
            addFigure(cells[i], player2Color, "&#9820;", size, "player2Rook")
        } else if (i == 1 || i == 6) {
            addFigure(cells[i], player2Color, "&#9822;", size, "player2Knight")
        } else if (i == 2 || i == 5) {
            addFigure(cells[i], player2Color, "&#9821;", size, "player2Bishop")
        } else if (i == 3) {
            addFigure(cells[i], player2Color, "&#9819;", size, "player2Qween")
        } else if (i == 4) {
            addFigure(cells[i], player2Color, "&#9818;", size, "player2King")
        } else {
            addFigure(cells[i], player2Color, "&#9823;", size, "player2Pawn")
        }
    }

    for (var i = 48; i <= 63; i++) { // Заполняем фигуры игрока 1
        if (i == 56 || i == 63) {
            addFigure(cells[i], player1Color, "&#9820;", size, "player1Rook")
        } else if (i == 57 || i == 62) {
            addFigure(cells[i], player1Color, "&#9822;", size, "player1Knight")
        } else if (i == 58 || i == 61) {
            addFigure(cells[i], player1Color, "&#9821;", size, "player1Bishop")
        } else if (i == 59) {
            addFigure(cells[i], player1Color, "&#9819;", size, "player1Qween")
        } else if (i == 60) {
            addFigure(cells[i], player1Color, "&#9818;", size, "player1King")
        } else {
            addFigure(cells[i], player1Color, "&#9823;", size, "player1Pawn")
        }
    }

}

createCheckmateBoard()
fillBoardWithFigures()
