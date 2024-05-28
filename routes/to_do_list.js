const express = require ("express")
const { prisma } = require("../db/prisma")
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


router.get("/tasks", async (req, res) => {
    const tasks = await prisma.tasks.findMany()
        res.json(tasks) 
    })

router.post("/task", async (req, res) => {
    const data = req.body
    const task = await prisma.tasks.create({
        data: {
        nome: data.nome,
        descricao: data.descricao,
        isDone: data.isDone
        } 
    })
    res.status(201).json(task)  
})

router.put("/task/:id", async (req, res) => {
    const id = Number(req.params.id)
    const tasks = await prisma.tasks.update({
        data: {
            nome: req.body.nome,
            descricao: req.body.descricao,
            isDone: req.body.isDone
        },
        where: {
            id
        }
    })
    res.json(tasks)
})

router.delete("/task/:id", async (req, res) => {
    const id = Number(req.params.id)
    await prisma.tasks.delete({
        where: {
            id
        }
    })
    res.status(204).send()
})



module.exports = {
    router
}