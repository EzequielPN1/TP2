const express  =require('express')
const app = express()

const libros = []

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/libros/:id?', (req,res) => {
    let { id } = req.params

    let libro = libros.find( libro => libro.id == id)
    res.send(id? libro : libros)
})

app.post('/libros', (req,res) => {
    let libro = req.body
    libros.push(libro)
    console.log(libro)

    res.redirect('/')
})

app.put('/libros/:id', (req,res) => {
    let { id } = req.params
    let libro = req.body
    
    let index = libros.findIndex( libro => libro.id == id)
    libros.splice(index, 1, libro)
    console.log(libro)

    res.send(libro)
})

app.delete('/libros/:id', (req,res) => {
    let { id } = req.params
    
    let index = libros.findIndex( libro => libro.id == id)
    let libro = libros[index]
    libros.splice(index, 1)
    console.log(libro)

    res.send(libro)
})

const PORT = 8080
const server = app.listen(PORT, () => console.log(`Servidor express escucnado en el puerto ${PORT}`))
server.on('error', error => console.log('Error en servidor ' + error.message ))