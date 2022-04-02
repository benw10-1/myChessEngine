const express = require("express")

const PORT = 3001
const app = express()

app.use(express.static('docs'))

app.get("/", (req, res) => {
    
})

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
});