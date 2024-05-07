const express = require ("express")
const server = express()

server.get("/health", (req, res) => {
    res.json({
        "status": "running"
    })
})

const port = 5000
server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})