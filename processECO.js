const fs = require("fs")
const path = require("path")

const infile = path.join(__dirname, "/docs/openings/eco.json")
const outfile = path.join(__dirname, "/docs/openings/processed.json")
console.log(infile, outfile)
let filedata = fs.readFileSync(infile)
let data = JSON.parse(filedata)
let out = {}
for (const item of data) {
    let moves = item.moves.split(" ").filter(e => !e.match(/[0-9]+\./))
    let last = out
    for (const move of moves) {
        if (!last[move]) last[move] = {}
        last = last[move]
    }
}

fs.writeFileSync(outfile, JSON.stringify(out))
