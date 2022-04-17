var boardObj

function loadEls() {
    boardObj = new CB(document.getElementById("board"), {
        fen: "2Rk3r/3nbpp1/p2p3p/8/8/2Q1P3/1P3PPP/1NB1KBNR b K - 0 1"
    })
}