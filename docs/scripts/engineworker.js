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
        bk: 2,
        bq: 3,
        br: 4,
        bb: 5,
        bn: 6,
        bp: 7,
        wp: 8,
        wn: 9,
        wb: 10,
        wr: 11,
        wq: 12,
        wk: 13
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
    constructor(game, color=BLACK, openings=[], sendMsg, zob=undefined, transposition=undefined) {
        this.game = game
        this.color = color
        this.zob = zob ?? this.initZob()
        this.transposition = transposition ?? {}
        this.evaluated = 0
        this.openings = openings
        this.sendMsg = sendMsg
        this.history = {}
        this.killers = []
        this.r = 1
        this.qtranspo = {}
    }
    getOpenings() {
        if (!this.openings) this.openings = []
        let hist = this.game.history()
        if (!hist || hist.length < 4) {
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
        if (!last) return
        let ks = Object.keys(last)
        return ks
    }
    initZob() {
        let table = []
        for (let i=0; i < 64; i++) {
            let seed = []
            for (const key in keys.hash_indices) {
                seed[keys.hash_indices[key]] = Math.random() * (2**64 - 1)
            }
            table.push(seed)
        }
        this.#moveSeed = Math.random() * (2**64 - 1)
        return table
    }
    hash() {
        if (!this.zob) return 0
        let h = 0
        if (this.game.turn() === BLACK) h ^= this.#moveSeed
        let b = this.game.board()
        for (let i=0; i < 64; i++) {
            let item = b[Math.floor(i/8)][i % 8]
            if (!item) continue
            let hash_index = keys.hash_indices[item.color + item.type]
            h ^= this.zob[i][hash_index]
        }
        return h
    }
    eval() {
        if (this.game.in_draw()) return 0
        if (this.game.in_checkmate()) return 1000000000 * ((this.game.turn() === BLACK) ? 1 : -1)
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
        return total * ((this.game.turn() === BLACK) ? -1 : 1)
    }
    timeup() {
        return Date.now() >= this.stoptime
    }
    async search() {
        return new Promise(async (res) => {
            let start = Date.now()
            this.stoptime = start + 30000

            this.evaluated = 0
            this.q = 0

            let openings = this.getOpenings()
            if (openings) {
                let temp = []
                let premoves = this.game.moves()
                premoves.forEach(e => {
                    if (openings.indexOf(e) > -1) temp.push(1)
                    else temp.push(-1)
                })
                openings = temp
            }
            let maxPly = openings ? 4 : 8, bestplys = [], lastSearch = openings ?? []
            for (let ply=0; ply < maxPly;ply++) {
                let strt = Date.now()
                let [result, last] = this.pvRoot(ply, lastSearch)
                let end = Date.now() - strt
                console.log("ply " + ply + " in " + (end/1000) + " seconds")
                if (this.timeup()) break
                bestplys.push(result)
                if (Date.now() >= (this.stoptime - end)) break
                lastSearch = last
            }
            console.log(bestplys, this.q, this.ns)
            console.log(this.history)
            this.transposition = {}
            this.qtranspo = {}
            this.history = {}
            this.game.move(bestplys[bestplys.length - 1])
            this.game.undo()
            if (openings) globalThis.postMessage(["info", "Book move! (" + ((Date.now() - start) / 1000).toFixed(2) + "s)"])
            else globalThis.postMessage(["info", this.evaluated + " positions evaluated in " + ((Date.now() - start) / 1000).toFixed(2) + " seconds."])
            res(bestplys[bestplys.length - 1])
        })
    }
    TTentry(score, depth, flag, move) {
        return {
            score,
            depth,
            flag,
            move
        }
    }
    updateHistory(move, depth) {
        if (this.history[move.color + move.piece]) {
            if (this.history[move.color + move.piece][move.to]) this.history[move.color + move.piece][move.to] += (1 << depth)
            else this.history[move.color + move.piece][move.to] = (1 << depth)
        }
        else {
            this.history[move.color + move.piece] = {}
            this.history[move.color + move.piece][move.to] = (1 << depth)
        }
    }
    getHistory(move) {
        if (this.history[move.color + move.piece]) return this.history[move.color + move.piece][move.color]
        return null
    }
    storeKiller(move, depth) {
        if (!this.killers[depth]) this.killers[depth] = []
        if (this.killers[depth][1] && this.killers[depth][1].san === move) return
        this.killers[depth][0] = this.killers[depth][1]
        this.killers[depth][1] = move.color + move.san
    }
    isKiller(move, depth) {
        if (!this.killers[depth]) return false
        return (this.killers[depth][0] === (move.color + move.san)) || (this.killers[depth][1] === (move.color + move.san))
    }
    qSearch(alpha, beta, depth) {
        this.q += 1
        this.evaluated += 1

        if (this.timeup()) return 0
        if (depth === 0) return this.eval()

        var best = this.eval()
        if (best > alpha) {
            if (best >= beta) return best
            alpha = best
        }

        let moves = this.game.moves({verbose: true, captures: true})
        moves = moves.sort((e, e1) => {
            return keys.indices["w" + e.piece] - keys.indices["w" + e.captured]
        })

        for (const move of moves) {
            this.game.move(move)
            let val = -this.qSearch(-beta, -alpha, depth - 1)
            this.game.undo()
            
            if (val > best) {
                if (val >= beta) return val
                best = val
            }
        }

        return best
    }
    pvRoot(ply, lastSearch) {
        let i = 0
        let moves = this.game.moves({verbose:true}).sort(() => {
            let ret = -(lastSearch[i] ?? -100000)
            i++
            return ret
        })
        let best = -Infinity, scores = [], chosen
        for (const x of moves) {
            this.game.move(x)
            let result = -this.pvSearch(-Infinity, Infinity, ply)
            this.game.undo()

            scores.push(result)

            if (result > best) {
                chosen = x
                best = result
            }

            if (this.timeup()) return [0, 0]
            globalThis.postMessage(["info", this.evaluated + " positions evaluated"])
        }

        return [chosen, scores]
    }
    pvSearch(alpha, beta, depth, ply) {
        if (this.timeup()) return 0
        let h = this.hash(), entry
        if (depth === 0) return this.qSearch(alpha, beta, Math.min(Math.max(1, ply - 1), 5))

        this.evaluated += 1

        if (this.transposition[h]) {
            let out = this.transposition[h]
            switch(out.flag) {
                // case "low":
                //     alpha = Math.max(alpha, out.score)
                //     break
                case "high":
                    beta = Math.min(beta, out.score)
                    break
                case "hash":
                    return out.score
                default:
                    break;
            }
            entry = out.move
        }
        let moves = this.game.moves({verbose:true})
        if (moves.length === 0) return this.qSearch(alpha, beta, 1)
        moves = moves.sort((e, e1) => {
            if (entry && entry.san === e.san) {
                return -10000000
            }
            if (e.promoted) {
                return keys.indices["w" + e.piece] - keys.indices["w" + e.promoted]
            }
            if (e.captured) {
                return keys.indices["w" + e.piece] - keys.indices["w" + e.captured]
            }
            
            let val = 100000000
            if (this.isKiller(e, depth)) return 1000000

            let hist = this.getHistory(e)
            if (hist) val -= hist
            return val
        })
        this.game.move(moves[0])
        let best = -this.pvSearch(-beta, -alpha, depth - 1, ply)
        this.game.undo()

        if (best > alpha) {
            if (best >= beta) {
                this.transposition[h] = this.TTentry(best, depth, "high", moves[0])
                if (moves[0].flags.indexOf("c") < 0) this.updateHistory(moves[0], depth)
                return best
            }
            alpha = best
        }

        let move, chosen
        for (const x of moves) {
            move = this.game.move(x)
            // try to produce a beta cutoff
            let val = -this.pvSearch(-alpha - 1, -alpha, depth - 1)
            // if null search greater than our best move AND its within our beta
            if (val > best && val < beta) {
                val = -this.pvSearch(-beta, -alpha, depth - 1)
                alpha = Math.max(val, alpha)
            }
            this.game.undo()

            if (val > best) {
                if (val >= beta) {
                    this.transposition[h] = this.TTentry(val, depth, "high", move)
                    return val
                }
                chosen = move
                best = val
            }
        }
        if (chosen) {
            this.transposition[h] = this.TTentry(best, depth, "hash", chosen)
            if (chosen.flags.indexOf("c") < 0) this.updateHistory(chosen, depth)
        }
        return best
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
            if (data) engine.game.move(data)
            engine.search().then(result => {
                engine.game.move(result)
                if (engine.game.in_checkmate()) {
                    globalThis.postMessage(["info", "Checkmate! Winner is " + (engine.game.turn() === BLACK ? "White" : "Black")])
                }
                if (engine.game.in_stalemate()) {
                    globalThis.postMessage(["info", "Stalemate!"])
                }
                if (engine.game.insufficient_material()) {
                    globalThis.postMessage(["info", "Insufficient matierial. Draw!"])
                }
                this.postMessage(["move", result])
            })
            break
        default:
            break
    }
} 