const express = require('express');
const app = express();

app.use(express.json());

const courses = [
    {id: 1, name: "Shivuk Shutafim"},
    {id: 2, name: "How to steal money"},
    {id: 3, name: "NFT for beginners"}
]

app.get('/api/courses', (req, res) => {
    res.send(courses)
})

app.post('/api/courses', (req, res) => {
    if(req.body.name.length < 3){
        res.status(400).send('Name Too short or doesnt exist')
        return
    }

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course)
    res.send(course)
});

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(course => course.id === parseInt(req.params.id))
    if(!course){
        res.status(404).send('The course with the given ID was not found.')
    } 
    res.send(course)
})

app.put('/api/courses/:id', (req, res) => {
    course = courses.find(course => course.id === parseInt(req.params.id))
    if(!course){
        res.status(404).send('The course with the given ID was not found.')
        return
    }

    if(req.body.name.length < 3){
        res.status(400).send('Name Too short or doesnt exist')
        return
    }

    course.name = req.body.name;
    res.send(course)
})

app.delete('/api/courses/:id', (req, res) => {
    course = courses.find(course => course.id === parseInt(req.params.id))
    if(!course){
        res.status(404).send('The course with the given ID was not found.')
        return
    }

    const index = courses.indexOf(course);
    courses.splice(index, 1)

    res.send(course)
})
app.listen(3000, () => console.log(`Listening on port 3000...`))