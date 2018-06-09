//This are library importation
var express = require('express');
var bodyParser = require('body-parser');

//This are local importation
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app =  express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    })
});

app.listen(port, () => {
    console.log(`Started up at port ${port}`);
});
/*
var newTodo = new Todo({
    text: 'Cook dinner'
});

omarheher03@gmail.com

newTodo.save().then((doc) => {
    console.log('Added new todo!', doc);
}, (e) => {
    console.log('Unable to save todo')
});

var otherTodo = new Todo({
    text: 'Feed the cat',
    completed: true,
    completedAt: 123
});

newTodo.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
}, (e) => {
    console.log('Unable to save todo')
});

var newUser = new User({
    email: 'omarherher03@gmail.com',
});

newUser.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
}, (e) => {
    console.log('Unable to save todo')
});
*/