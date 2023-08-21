const express = require('express')
const router = express.Router()
const {randomUUID} = require('crypto')

const path = require('path')
const { response } = require('express')
const basePath = path.join(__dirname, '../templates')

const array = []

router.use(express.json());

router.get('/cadastrar.html', (req, res) => {
    res.sendFile(`${basePath}/cadastrar.html`)
})
//Cadastrar usuário
router.post('/save', (req, res) => {
    const {name, preco, tipo } = req.body

    const produto = {
        id: randomUUID(),
        name, 
        preco,
        tipo,
    }

    array.push(produto)
    console.log(array)
    return res.json(produto)
    //res.sendFile(`${basePath}/cadastrar.html`)
})

router.get('/cadastrar.html', (req,res)=>{
    return res.json(produto)
})

router.get('/visualizar.html', (req, res) => {
    res.sendFile(`${basePath}/visualizar.html`)
})
module.exports = router