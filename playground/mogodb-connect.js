//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');// Using ES6 destructuring technique.

// ES6 coding, object destructuring.




MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp')

    /*
    db.collection('Todos').insertOne({
        _id: 123,
        text: 'Something to do',
        Completed: false
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert todo', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });
   
    // New group codes
     
   db.collection('Users').insertOne({
    name: 'Mark',
    location: 'Palawan'
}, (err, result) => {
    if (err) {
        return console.log('Unable to insert user', err);
    }

    console.log(JSON.stringify(result.ops, undefined, 2));
});
   
// New group codes, Object destructuring of ES6 syntax
var user = {name: 'Mark', age: 32};
var {name} = user;
console.log(name);

    */

   
    client.close();
});

