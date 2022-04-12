const keys = {
    letters: ["a", "b", "c", "d", "e", "f", "g", "h"],
    nums: [8, 7, 6, 5, 4, 3, 2, 1],
    wppref: [0,   0,   0,   0,   0,   0,   0,   0,
        78,  83,  86,  73, 102,  82,  85,  90,
        7,  29,  21,  44,  40,  31,  44,   7,
        -17,  16,  -2,  15,  14,   0,  15, -13,
        -26,   3,  10,   9,   6,   1,   0, -23,
        -22,   9,   5, -11, -10,  -2,   3, -19,
        -31,   8,  -7, -37, -36, -14,   3, -31,
        0,   0,   0,   0,   0,   0,   0,   0],
    wnpref: [-66, -53, -75, -75, -10, -55, -58, -70,
        -3,  -6, 100, -36,   4,  62,  -4, -14,
        10,  67,   1,  74,  73,  27,  62,  -2,
        24,  24,  45,  37,  33,  41,  25,  17,
        -1,   5,  31,  21,  22,  35,   2,   0,
       -18,  10,  13,  22,  18,  15,  11, -14,
       -23, -15,   2,   0,   2,   0, -23, -20,
       -74, -23, -26, -24, -19, -35, -22, -69],
    wbpref: [-59, -78, -82, -76, -23,-107, -37, -50,
        -11,  20,  35, -42, -39,  31,   2, -22,
         -9,  39, -32,  41,  52, -10,  28, -14,
         25,  17,  20,  34,  26,  25,  15,  10,
         13,  10,  17,  23,  17,  16,   0,   7,
         14,  25,  24,  15,   8,  25,  20,  15,
         19,  20,  11,   6,   7,   6,  20,  16,
         -7,   2, -15, -12, -14, -15, -10, -10],
    wrpref: [35,  29,  33,   4,  37,  33,  56,  50,
        55,  29,  56,  67,  55,  62,  34,  60,
        19,  35,  28,  33,  45,  27,  25,  15,
         0,   5,  16,  13,  18,  -4,  -9,  -6,
       -28, -35, -16, -21, -13, -29, -46, -30,
       -42, -28, -42, -25, -25, -35, -26, -46,
       -53, -38, -31, -26, -29, -43, -44, -53,
       -30, -24, -18,   5,  -2, -18, -31, -32],
    wqpref: [6,   1,  -8,-104,  69,  24,  88,  26,
        14,  32,  60, -10,  20,  76,  57,  24,
        -2,  43,  32,  60,  72,  63,  43,   2,
         1, -16,  22,  17,  25,  20, -13,  -6,
       -14, -15,  -2,  -5,  -1, -10, -20, -22,
       -30,  -6, -13, -11, -16, -11, -16, -27,
       -36, -18,   0, -19, -15, -15, -21, -38,
       -39, -30, -31, -13, -31, -36, -34, -42],
    wkpref: [4,  54,  47, -99, -99,  60,  83, -62,
        -32,  10,  55,  56,  56,  55,  10,   3,
        -62,  12, -57,  44, -67,  28,  37, -31,
        -55,  50,  11,  -4, -19,  13,   0, -49,
        -55, -43, -52, -28, -51, -47,  -8, -50,
        -47, -42, -43, -79, -64, -32, -29, -32,
         -4,   3, -14, -50, -57, -18,  13,   4,
         17,  30,  -3, -14,   6,  -1,  40,  18],
    bppref: [0,   0,   0,   0,   0,   0,   0,   0,
        78,  83,  86,  73, 102,  82,  85,  90,
        7,  29,  21,  44,  40,  31,  44,   7,
        -17,  16,  -2,  15,  14,   0,  15, -13,
        -26,   3,  10,   9,   6,   1,   0, -23,
        -22,   9,   5, -11, -10,  -2,   3, -19,
        -31,   8,  -7, -37, -36, -14,   3, -31,
        0,   0,   0,   0,   0,   0,   0,   0].reverse().map(e => e === 0 ? e : -e),
    bnpref: [-66, -53, -75, -75, -10, -55, -58, -70,
        -3,  -6, 100, -36,   4,  62,  -4, -14,
        10,  67,   1,  74,  73,  27,  62,  -2,
        24,  24,  45,  37,  33,  41,  25,  17,
        -1,   5,  31,  21,  22,  35,   2,   0,
       -18,  10,  13,  22,  18,  15,  11, -14,
       -23, -15,   2,   0,   2,   0, -23, -20,
       -74, -23, -26, -24, -19, -35, -22, -69].reverse().map(e => e === 0 ? e : -e),
    bbpref: [-59, -78, -82, -76, -23,-107, -37, -50,
        -11,  20,  35, -42, -39,  31,   2, -22,
         -9,  39, -32,  41,  52, -10,  28, -14,
         25,  17,  20,  34,  26,  25,  15,  10,
         13,  10,  17,  23,  17,  16,   0,   7,
         14,  25,  24,  15,   8,  25,  20,  15,
         19,  20,  11,   6,   7,   6,  20,  16,
         -7,   2, -15, -12, -14, -15, -10, -10].reverse().map(e => e === 0 ? e : -e),
    brpref: [35,  29,  33,   4,  37,  33,  56,  50,
        55,  29,  56,  67,  55,  62,  34,  60,
        19,  35,  28,  33,  45,  27,  25,  15,
         0,   5,  16,  13,  18,  -4,  -9,  -6,
       -28, -35, -16, -21, -13, -29, -46, -30,
       -42, -28, -42, -25, -25, -35, -26, -46,
       -53, -38, -31, -26, -29, -43, -44, -53,
       -30, -24, -18,   5,  -2, -18, -31, -32].reverse().map(e => e === 0 ? e : -e),
    bqpref: [6,   1,  -8,-104,  69,  24,  88,  26,
        14,  32,  60, -10,  20,  76,  57,  24,
        -2,  43,  32,  60,  72,  63,  43,   2,
         1, -16,  22,  17,  25,  20, -13,  -6,
       -14, -15,  -2,  -5,  -1, -10, -20, -22,
       -30,  -6, -13, -11, -16, -11, -16, -27,
       -36, -18,   0, -19, -15, -15, -21, -38,
       -39, -30, -31, -13, -31, -36, -34, -42].reverse().map(e => e === 0 ? e : -e),
    bkpref: [4,  54,  47, -99, -99,  60,  83, -62,
        -32,  10,  55,  56,  56,  55,  10,   3,
        -62,  12, -57,  44, -67,  28,  37, -31,
        -55,  50,  11,  -4, -19,  13,   0, -49,
        -55, -43, -52, -28, -51, -47,  -8, -50,
        -47, -42, -43, -79, -64, -32, -29, -32,
         -4,   3, -14, -50, -57, -18,  13,   4,
         17,  30,  -3, -14,   6,  -1,  40,  18].reverse().map(e => e === 0 ? e : -e),
    indices: {
        bk: -60000,
        bq: -929,
        br: -479,
        bb: -320,
        bn: -280,
        bp: -100,
        wp: 100,
        wn: 280,
        wb: 320,
        wr: 479,
        wq: 929,
        wk: 60000
    },
    hash_indices: {
        K: 2,
        Q: 3,
        R: 4,
        B: 5,
        N: 6,
        P: 7,
        p: 8,
        n: 9,
        b: 10,
        r: 11,
        q: 12,
        k: 13
    },
    
}

async function delay(ms) {
    return new Promise(res => {setTimeout(res, ms)})
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

class Engine {
    #moveSeed
    #levelSeeds
    constructor(game, color=BLACK, openings=[], zob=undefined, transposition=undefined) {
        this.game = game
        this.color = color
        this.zob = zob ?? this.initZob()
        this.transposition = transposition ?? {}
        this.evaluated = 0
        this.openings = openings
    }
    getOpenings() {
        if (!this.openings) this.openings = []
        let hist = this.game.history()
        if (hist.length < 4) {
            let empty = 0
            this.game.board().forEach(e => {
                e.forEach(x => {
                    if (!x) empty++
                })
            })
            if (empty > 34) return
        }
        let last
        for (const move of hist) {
            if (!last) {
                last = this.openings[move]
                continue
            }
            if (last[move]) last = last[move]
            else return
        }
        if (!last || Object.keys(last).length < 1) return
        let ks = Object.keys(last)
        return ks
    }
    initZob() {
        let table = []
        for (let i=0; i < 64; i++) {
            let seed = []
            for (const key in keys.hash_indices) {
                seed[keys.hash_indices[key]] = Math.random() * 2**64
            }
            table.push(seed)
        }
        this.#moveSeed = Math.random() * (2**64 - 1)
        this.#levelSeeds = []
        return table
    }
    hash(level) {
        if (!this.zob) return 0
        let h = 0
        if (this.game.turn() === BLACK) h ^= this.#moveSeed
        if (!this.#levelSeeds[level]) this.#levelSeeds[level] = Math.random() * (2**64 - 1)
        h ^= this.#levelSeeds[level]
        let b = this.game.board()
        for (let i=0; i < 64; i++) {
            let item = b[Math.floor(i/8)][i % 8]
            if (!item) continue
            let hash_index = keys.hash_indices[item.color === BLACK ? item.type.toUpperCase() : item.type]
            h ^= this.zob[i][hash_index]
        }
        return h
    }
    eval() {
        this.evaluated += 1
        let squares = this.game.board()
        let total = 0, i = 0
        for (const row of squares) {
            for (const item of row) {
                if (!item) {
                    i++
                    continue
                }
                total += keys[item.color + item.type + "pref"][i]
                total += keys.indices[item.color + item.type]
                i++
            }
        }
        return total
    }
    async search() {
        return new Promise(async (res) => {
            let opening = this.getOpenings()
            let start = Date.now()
            this.evaluated = 0
            let maxPly = 3, bestplys = []
            if (opening) {
                opening = opening.map(e => {
                    let move = this.game.move(e)
                    this.game.undo()
                    return move
                })
            }
            let moves = opening ?? [...this.game.moves({verbose: true})]
            moves = moves
            moves.sort((v1, v2) => {
                if (v1.flags.indexOf("c") > -1) return -1
                return 1
            })
            for (let ply=0; ply < maxPly; ply++) {
                let alpha = -Infinity, beta = Infinity, picked, best = -Infinity
                for (const x of moves) {
                    this.game.move(x)
                    let result = -this.alphabeta(-beta, -alpha, ply, 0)
                    this.game.undo()
                    if (result > best) {
                        best = result
                        picked = x
                    }
                }
                bestplys.push(picked)
            }
            this.transposition = {}
            console.log(this.evaluated, (Date.now() - start) / 1000, bestplys)
            res(bestplys[bestplys.length - 1])
        })
    }
    alphabeta(alpha, beta, depth, level) {
        if (depth === 0) return this.qSearch(alpha, beta, 6)
        let val
        let h = this.hash(level)
        if (this.transposition[h]) {
            val = this.transposition[h]
            if (val >= beta) return beta
            if (val > alpha) alpha = val
        }
        let moves = this.game.moves({verbose: true})
        moves.sort((v1, v2) => {
            if (v1.flags.indexOf("c") > -1) return -1
            return 1
        })
        for (const x of moves) {
            this.game.move(x)
            val = -this.alphabeta(-beta, -alpha, depth - 1, level + 1)
            this.game.undo()
            if (val >= beta) return beta
            if (val > alpha) alpha = val
        }

        this.transposition[h] = alpha
        return alpha
    }
    qSearch(alpha, beta, depth) {
        // return this.eval()
        if (depth === 0 && this.game.in_check()) return 0
        var best = this.eval()
        if (best >= beta) return best
        if (best > alpha) alpha = best
        let moves = this.game.moves()
        for (const move of moves) {
            let mv = this.game.move(move)
            if (!this.game.in_check() || !mv.flags.indexOf("c") > -1) {
                this.game.undo()
                continue
            }
            let evalpl = -this.qSearch(-beta, -alpha, depth - 1)
            this.game.undo()
            
            if (evalpl >= beta) return beta
            if (evalpl > alpha) alpha = evalpl
        }
        return alpha
    }
}
self.importScripts("chess-js.js")
var engine

onmessage = function(e) {
    let [cmd, data] = [e.data.cmd, e.data.data]
    switch(cmd) {
        case "init":
            let game = new Chess(data.fen)
            
            engine = new Engine(game, data.color, data.openings)
            break
        case "move":
            if (!engine) return
            engine.game.move(data)
            engine.search().then(result => {
                engine.game.move(result)
                this.postMessage(result)
            })
            break
        default:
            break
    }
} 