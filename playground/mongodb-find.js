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
    db.collection('Todos').find({
        _id: new ObjectID('74e839ng293837kl48')
    }).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });// Calling all data from todos collection.
   
    // Code for count method in mongodb
   db.collection('Todos').find().count().then((count) => {
    console.log(`Todos count ${count}`);
}, (err) => {
    console.log('Unable to fetch todos', err);
});

   db.collection('Users').find().count().then((count) => {
    console.log(`Todos count ${count}`);
}, (err) => {
    console.log('Unable to fetch todos', err);
}); // Calling all data from todos collection.

*/

db.collection('Users').find({name: 'Mark'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
});

    //client.close();
});
