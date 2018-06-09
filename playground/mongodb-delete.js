//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');// Using ES6 destructuring technique.

// ES6 coding, object destructuring.




MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp')

    // Delete many
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
       // console.log(result);
   // });

    // Delete One
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
      // console.log(result);
    //});

    // Find one & delete
    
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
       // console.log(result);
    // });

    
    // db.collection('Users').deleteMany({name: 'Mark'});

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('37jf938dn93383839343')});
    }).then((result) => {
        console.log(JSON.stringify(results, undefined, 2));

    //client.close();
});