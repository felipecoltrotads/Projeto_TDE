const express = require ("express")
const router = express.Router()

router.get("/tasks", (req, res) => {
    res.json([
        {
            id: 1,
            nome: "Comprar Leite",
            descricao: "Ir até o mercado e comprar leite",
            isDone: false
        }, {
            id: 2,
            nome: "Lavar a Louça",
            descricao: "Ir até a pia e lavar a louça",
            isDone: true
        }, {
            id: 3,
            nome: "Limpar a casa",
            descricao: "Varrer o chão da casa",
            isDone: false
        }
    ])
})

router.post("/task", (req, res) => {
    const data = req.body
    tasks.push({
        id: tasks.length + 1,
        nome: data.nome,
        descricao: data.descricao,
        isDone: data.isDone
    })
    res.send()
})

module.exports = {
    router
}