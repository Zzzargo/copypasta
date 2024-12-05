const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');

const app = express();
app.use(express.json())
const corsOptions = {
    origin: ["http://localhost:5173"], 
}
app.use(cors(corsOptions));

//Users
const users = []

app.get('/users', (req, res) => {
  res.json(users)
})

app.post('/users', async (req, res) => {
    try {
        const hashedPass = await bcrypt.hash(req.body.password, 10)

        const user = { username: req.body.username, password: hashedPass , email: req.body.email, phone: req.body.phone}
        users.push(user)
        res.status(201).send()
    }
    catch {
        res.status(500).send()
    }
})

app.post('/users/login', async (req, res) => {
    const user = users.find(user => user.email === req.body.email)
    if (user == null) {
        res.status(400).send('Cannot find user')
    }
    try {
        if (await bcrypt.compare(req.body.password, user.password)) {
            res.send('Success!')
        } else {
            res.send('Not Allowed')
        }
    } catch {
        res.status(500).send()
    }
})

//Recipes
const recipes = []

app.get('/recipes', (req, res) => {
  res.json(recipes)
})

app.post('/recipes', async (req, res) => {
    try {
        const recipe = { title: req.body.title, description: req.body.description, rating: req.body.rating, times_rated: req.body.times_rated, author: req.body.author}
        recipes.push(recipe)
        res.status(201).send()
    }
    catch {
        res.status(500).send()
    }
})

app.listen(3000, () => {
    console.log("Server listening on port 3000")
})