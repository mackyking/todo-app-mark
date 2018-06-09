const {ObjectID} = require('mongodb');// Using ES6 destructuring technique.

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '7td889k9o757snj757j88';

Objec6Id.isValid

if (!ObjectID.isValid(id)) {
    console.log('ID not valid');
}

Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos', todos);
});

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todos', todo);
});

Todo.findById(id).then((todo) => {
    if (!todo) {
        return console('Id not found!');
    }
    console.log('Todo By Id', todo);
}).catch((e) => console.log(e));

Todo.findById('372jd83k9j837483').then((user) => {
    if (!user) {
        return console('User not found!');
    }
    console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
    console.log(e);
});