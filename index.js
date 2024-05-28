const express = require ("express")
const { router: taskRouter } = require("./routes/to_do_list")
const { router: userRouter} = require('./routes/user')
 
const server = express()
server.use(express.json())

server.get("/health", (req, res) => {
    res.json({
        "status": "running"
    })
})

server.use("/v1",taskRouter)
server.use("/v1",userRouter)

const port = 5000
server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})