//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');// Using ES6 destructuring technique.

// ES6 coding, object destructuring.




MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp')

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('84nc9e9nf949935y5') // For filter argument.
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    }).then((results) => {
        console.log(result);
    });



    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('83ek9e9nf949935y5') // For filter argument.
    }, {
        $set: {
            name: 'Carl'
        },
        $inc: {
            age: 1
        }
    }, {    
        returnOriginal: false
    }).then((result) => {
        console.log(results);
    });

    
    //client.close();
});