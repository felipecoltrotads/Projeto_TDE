const express = require ("express")
const router = express.Router()

let tasks = [
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
    ]


router.get("/tasks", (req, res) => {
     res.json(tasks)   
})

router.post("/task", (req, res) => {
    const data = req.body
    const task = {
        id: tasks.length + 1,
        nome: data.nome,
        descricao: data.descricao,
        isDone: data.isDone
    }
    tasks.push(task)
    res.status(201).json(task)  
})

router.put("/task/:id", (req, res) => {
    const id = Number(req.params.id)
    const data = req.body
    const task = tasks.find(task => task.id === id)
    if(!task) return res.status(404)
        .json({message: "task not found"})
    task.nome = data.nome
    task.descricao = data.descricao
    task.isDone = data.isDone
    res.json(task)
})

router.delete("/task/:id", (req, res) => {
    const id = Number(req.params.id)
    tasks = tasks.filter(task => task.id !== id)
    res.status(204).send()
})



module.exports = {
    router
}