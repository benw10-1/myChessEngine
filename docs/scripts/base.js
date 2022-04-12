var boardObj

function loadEls() {
    boardObj = new Chessboard(document.getElementById("board"), {
        // fen: "6k1/8/8/8/5p2/8/4P3/3K4 w - - 0 1"
    })
}