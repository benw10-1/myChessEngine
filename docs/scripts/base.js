var boardObj

function loadEls() {
    boardObj = new CB(document.getElementById("board"), {
        fen: '6k1/2p3p1/p1p4p/8/8/8/1K6/3r4 w - - 10 45'
    })
}