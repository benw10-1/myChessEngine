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
    }
}

async function delay(ms) {
    return new Promise(res => {setTimeout(res, ms)})
}
 
class Engine {
    #moveSeed
    #levelSeeds
    constructor(game, color=BLACK, zob=undefined, transposition=undefined) {
        this.game = game
        this.color = color
        this.zob = zob ?? this.initZob()
        this.transposition = transposition ?? {}
        this.evaluated = 0
    }
    async loadOpenings() {
        const link = "openings/processed.json"
        return fetch(link).then(data => data.json())
    }
    async getOpenings() {
        if (!this.openings) this.openings = await this.loadOpenings()
        let hist = this.game.history()
        let last
        for (const move of hist) {
            if (!last) {
                last = this.openings[move]
                continue
            }
            if (last[move]) last = last[move]
            else return
        }
        if (!last || last.length < 1) return
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
            let opening = await this.getOpenings()
            this.evaluated = 0
            let best, maxPly = 6
            let moves = opening ?? [...this.game.moves()]
            for (let ply=0; ply < maxPly; ply++) {
                await delay(50)
                let alpha = -Infinity, beta = Infinity, val = -Infinity
                for (const x of moves) {
                    this.game.move(x)
                    let result = this.alphabeta(alpha, beta, ply, false, 0)
                    this.game.undo()
                    
                    if (result >= val) {
                        val = result
                        best = x
                    }
                }
            }
            console.log(best, this.evaluated)
            this.transposition = {}
            res(best)
        })
    }
    alphabeta(alpha, beta, depth, player, level) {
        if (depth === 0) return this.eval() * (this.color === BLACK ? -1 : 1)
        let h = this.hash(level), val, moves = this.game.moves()
        if (this.transposition[h]) return this.transposition[h]
        if (player) {
            val = -Infinity
            for (const x of moves) {
                this.game.move(x)
                val = Math.max(this.alphabeta(alpha, beta, depth - 1, false, level + 1), val)
                this.game.undo()
                if (val >= beta) break
                alpha = Math.max(alpha, val)
            }
        }
        else {
            val = Infinity
            for (const x of moves) {
                this.game.move(x)
                val = Math.min(this.alphabeta(alpha, beta, depth - 1, true, level + 1), val)
                this.game.undo()
                if (val <= alpha) break
                beta = Math.min(beta, val)
            }
        }
        this.transposition[h] = val
        return val
    }
}

class Piece {
    constructor(piece, square) {
        let img = new Image(50, 50)
        img.src = "images/" + piece + ".png"
        this.name = piece
        this.image = img
        this.square = square

        const getCenter = function(i) {
            let rect = i.getBoundingClientRect()
            return [rect.left + rect.width * .5, rect.top + rect.height * .5]
        }

        const clearSelec = _ => {
            for (const el of this.square.board.container.querySelectorAll(".square-over")) {
                el.classList.add("hidden")
            }
        }

        const clamp = (x, y) => {
            let r = square.board.container.getBoundingClientRect()
            return [Math.max(r.left, Math.min(r.left + r.width, x)), Math.max(r.top, Math.min(r.top + r.height, y))]
        }
        const clickhndl = event => {
            clearSelec()
            if (this.square.board.game.turn() !== this.square.board.user) return
            for (let x of this.square.board.game.moves({square: this.square.fen})) {
                x = x.slice(x.length - 2, x.length)
                let sq = this.square.board.getSquareFEN(x)
                if (sq) sq.overlayState(true)
            }
        }
        img.onload = square.container.appendChild(img)
        img.addEventListener("dragstart", event => {
            event.preventDefault()
            if (this.square.board.game.turn() !== this.square.board.user) return
            img.style.cursor = "grabbing"
            img.classList.add("over")
            clickhndl()
            let [x, y] = getCenter(img)
            const movehndl = event => {
                let [nx, ny] = clamp(event.clientX, event.clientY)
                img.style.left = nx - x + "px"
                img.style.top = ny - y + "px"
            }
            const pointhndl = event => {
                event.preventDefault()
                img.style = ""
                img.classList.remove("over")
                let sq = square.board.getSquareXY(event.clientX, event.clientY)
                if (sq) {
                    let fn = {
                        from: this.square.fen,
                        to: sq.fen
                    }
                    this.square.board.move(fn)
                }
                document.removeEventListener("mousemove", movehndl)
                document.removeEventListener("pointerup", pointhndl)
            }
            document.addEventListener("mousemove", movehndl)
            document.addEventListener("pointerup", pointhndl)
        })
        img.addEventListener("click", clickhndl)
    }
}

class Square {
    constructor(x, y, piece, board) {
        this.container = document.createElement("div");
        (x + y) % 2 === 0 ? this.container.className = "square prim" : this.container.className = "square sec"
        this.selected = false
        this.board = board
        this.fen = keys.letters[x] + keys.nums[y]
        this.overlay = document.createElement("div")
        this.overlay.className = "square-over hidden"
        this.container.appendChild(this.overlay)

        if (piece) this.piece = new Piece(piece, this)
    }
    overlayState(state) {
        state ? this.overlay.classList.remove("hidden") : this.overlay.classList.add("hidden")
    }
    setPiece(piece) {
        if (this.piece) this.piece.image.remove()
        this.piece = piece
        if (!piece) return
        if (piece.square) piece.square.setPiece()
        piece.square = this
        if (piece.image) this.container.appendChild(piece.image)
    }
}

class Chessboard {
    constructor(target, game, opt) {
        this.opt = opt
        this.target = target
        this.game = game ?? new Chess()
        this.container = document.createElement("div")
        this.container.classList = "board-cont"
        this.squares = []
        this.engine = new Engine(this.game)
        this.user = WHITE

        let b = this.game.board()

        for (let y=0; y < 8; y++) {
            let row = document.createElement("div")
            row.classList = "board-row"
            let rw  = []
            for (let x=0; x < 8; x++) {
                let sq = new Square(x, y, b[y][x] ? b[y][x].color + b[y][x].type : null, this)
                row.appendChild(sq.container)
                rw.push(sq)
            }
            this.container.appendChild(row)
            this.squares.push(rw)
        }
        this.target.addEventListener("click", event => {
            if (event.target.tagName !== "IMG")
            for (const el of this.container.querySelectorAll(".square-over")) {
                el.classList.add("hidden")
            }
        })
        this.target.appendChild(this.container)
    }
    getSquare(x, y) {
        if (x > 7 || y > 7 || y < 0 || x < 0) return
        return this.squares[y][x]
    }
    getSquareFEN(str) {
        if (!str || str.length !== 2) return
        return this.getSquare(keys.letters.indexOf(str[0].toLowerCase()), keys.nums.indexOf(parseInt(str[1])))
    }
    getSquareXY(x, y) {
        let rect = this.container.getBoundingClientRect()
        if (x < rect.left || x > rect.left + rect.width || y < rect.top || y > rect.top + rect.height) return
        let [mx, my] = [x - rect.left, y - rect.top]
        return this.getSquare(Math.floor(mx/(rect.width/8)), Math.floor(my/(rect.height/8)))
    }
    move(mv) {
        for (const el of this.container.querySelectorAll(".square-over")) {
            el.classList.add("hidden")
        }
        let move = this.game.move(mv)

        if (move) {
            let from = this.getSquareFEN(move.from)
            let to = this.getSquareFEN(move.to)
            to.setPiece(from.piece)
            console.log(move)
        }
        if (this.game.turn() !== this.user && move) {
            const startTime = Date.now()
            this.engine.search().then(move => {
                console.log((Date.now() - startTime) / 1000)
                this.move(move)
            })
        }
        return move
    }
}