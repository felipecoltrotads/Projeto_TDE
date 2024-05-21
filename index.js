const express = require ("express")
const { router: movieRouter } = require("./routes/to_do_list")
const { router: userRouter} = require('./routes/user')
 
const server = express()
server.use(express.json())

server.get("/health", (req, res) => {
    res.json({
        "status": "running"
    })
})

server.use("/api",movieRouter)
server.use("/api",userRouter)

const port = 5000
server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})