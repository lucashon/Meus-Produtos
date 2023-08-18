const express =  require('express')
const app = express()
const port = 3000
const array = []

const path = require('path')
const basePath = path.join(__dirname, 'templates')

app.use(express.urlencoded({
    extended: true
})) // Montar um ob. json
app.use(express.json())


// MIDDLEWARE é o cara do meio de campo, com ele eu trato
// Arquivos Estaticos -> CSS IMG VIDEOS JS
app.use(express.static('public')) 

app.get('/', (req,res)=>{
    res.sendFile(`${basePath}/index.html`)
})
app.get('/cadastrar.html', (req,res)=>{
    res.sendFile(`${basePath}/cadastrar.html`)
})
app.post('/save/ok', (req,res)=>{
    const {name, preco, tipo} = req.body
    array.push({
        nome: name, 
        preco: preco,
        tipo: tipo
    })
    console.log(array)

})
app.get('/visualizar.html', (req,res)=>{
    res.sendFile(`${basePath}/visualizar.html`)
})


app.listen(port, ()=>{
    console.log(`Porta rodando no servidor ${port}`)
})