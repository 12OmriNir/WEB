const fileSystem = require('fs')
const express = require('express')
const Joi = require('joi')
const app = express()

app.use(express.json())

const books = JSON.parse(fileSystem.readFileSync('books.json'))

const validateBook = (book) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        price: Joi.number().positive().required()
    })
    return schema.validate({name: book.name, price: book.price})
}

const editFile = (books) => {
    let data = JSON.stringify(books)
    fileSystem.writeFileSync('books.json', data)
}

app.get('/api/books', (req, res) => {
    res.send(books)
})

app.get('/api/books/:id', (req, res) =>{
    const book = books.find(book => book.id === parseInt(req.params.id))

    if(!book){
        res.status(404).send('This book does not exist')
        return
    }
    res.send(book)
})

app.post('/api/books', (req, res) => {

    console.log('asdada')
    const book = {
        name: req.body.name,
        price: req.body.price,
        id: books.length + 1,
    }

    const valid = validateBook(book)

    if(valid.error){
        res.status(400).send('Invalid Input')
        return
    }

    books.push(book)
    res.send('New book has been added')
    editFile(books)
})

app.put('/api/books/:id', (req, res) => {
    const book = books.find(book => book.id === parseInt(req.params.id))
    if(!book){
        res.status(404).send('This book does not exist')
        return
    }

    const temp = {name: req.body.name, price: req.body.price}

    const valid = validateBook(temp)

    if(valid.error){
        res.status(400).send('Invalid Input')
        return
    }

    book.name = temp.name
    book.price = temp.price

    res.send('Book updated successfully')
    editFile(books)
})

app.delete('/api/books/:id', (req, res) => {
    const book = books.find(book => book.id === parseInt(req.params.id))
    if(!book){
        res.status(404).send('This book does not exist')
        return
    }

    const index = books.indexOf(book)
    books.splice(index, 1)

    res.send('Book deleted Successfully')
    editFile(books)
})
app.listen(3000, () => console.log('Listening on port 3000...'))