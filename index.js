const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

const data = {
    posts: []
}

app.get('/posts', (req, res) => {
    res.json(data.posts)
})

app.get('/posts/:id', (req, res) => {
    const post = data.posts.find(post => post.id == id)
    res.json(post)
})

app.post('/posts', (req, res) => {
    data.posts.push(req.body)
    console.log(data)
    res.sendStatus(200)
})

app.listen(8080, () => {
    console.log('application is running on 8080')
})