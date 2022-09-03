const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
    MongoClient.connect(
        'mongodb+srv://141100:141100@funixnjs101xcluster.pgo0rpy.mongodb.net/?retryWrites=true&w=majority'
    )
        .then(client => {
            console.log('Connected');
            callback(client);
        })
        .catch(err => {
            console.log(err);
        });
};

module.exports = mongoConnect;