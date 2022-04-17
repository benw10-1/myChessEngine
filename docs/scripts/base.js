var boardObj

function loadEls() {
    boardObj = new CB(document.getElementById("board"), {
        fen: "1k1r1bnr/ppp2ppp/2n5/3pp1q1/1P1P2b1/2PBP1P1/P3NP1P/RNBQK2R w KQ - 0 1"
    })
}