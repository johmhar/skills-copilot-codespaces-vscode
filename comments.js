// Create web server
const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})

// Create a new route
app.get('/comments', (req, res) => {
    res.send('This is the comments page')
})

// Create a new route
app.get('/comments/new', (req, res) => {
    res.send('This is the new comments page')
})

// Create a new route
app.get('/comments/:id', (req, res) => {
    res.send('This is the comments page for comment id: ' + req.params.id)
})

// Create a new route
app.get('/comments/:id/edit', (req, res) => {
    res.send('This is the edit comments page for comment id: ' + req.params.id)
})

// Create a new route
app.get('/comments/:id/delete', (req, res) => {
    res.send('This is the delete comments page for comment id: ' + req.params.id)
})

// Create a new route
app.get('/comments/:id/like', (req, res) => {
    res.send('You have liked comment id: ' + req.params.id)
})

// Create a new route
app.get('/comments/:id/dislike', (req, res) => {
    res.send('You have disliked comment id: ' + req.params.id)
})