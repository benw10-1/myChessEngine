var boardObj

function loadEls() {
    boardObj = new CB(document.getElementById("board"), {
        fen: "Q7/p1p1q1pk/3p2rp/4n3/3bP3/7b/PP3PPK/R1B2R2 b - - 0 1"
    })
}