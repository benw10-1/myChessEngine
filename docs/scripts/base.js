var boardObj

function loadEls() {
    boardObj = new Chessboard(document.getElementById("board"), {
        // fen: "5K2/3P4/8/8/4p3/8/8/5k2 w - - 0 1"
    })
}