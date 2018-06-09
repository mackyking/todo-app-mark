const {ObjectID} = require('mongodb');// Using ES6 destructuring technique.

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//Delete all datas from database
Todo.remove({}).then((result) => {
    console.log(result);
});

//Delete single data from database
Todo.findOneAndRemove({_id: '5b1c55e2d754b514003cb2d6'}).then((todo) => {
    console.log(result);
});

//Delete one data from database
Todo.findOneById({'5b1c5399d754b514003cb2d5'}).then((todo) => {
    console.log(todo);
});
