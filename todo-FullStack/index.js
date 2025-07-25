const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const { UserModel, TodoModel } = require('./database');
const app = express();

mongoose.connect('mongodb+srv://heyitsmegopal:cloudmongodbatlas@cluster0.bpqrn8x.mongodb.net/todo-App-Database');
const JWT_SECRET = 'me/as/@admin';
app.use(express.json());

//to register and get the user info
app.post('/signup', async (req, res) => {

    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;


    await UserModel.insertOne({
        email: email,
        password: password,
        name: name
    });


    res.json({
        message: 'You are signed up successfully.'
    });

});

//verifies user info and logs in them
app.post('/login', async (req, res) => {

    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email: email,
        password: password
    });

    if(user) {

        const tokenId = jwt.sign({
            id: user._id
        },JWT_SECRET);
        res.json({
            message: `You are signed in successfully!, your tokenId: ${tokenId}`
        });

    } else {

        res.status(403).json({
            message: 'Unauthorized Request'
        });
    }

});

//to create todos
app.post('/addTodo', (req, res) => {

});

//to get all the todos for particular user
app.get('/getTodos', (req, res) => {

});

app.listen(3000, () => {
    console.log('Server is running on port: 3000');
});