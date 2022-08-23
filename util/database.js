const Sequelize = require('sequelize').Sequelize;

const sequelize = new Sequelize('node-complete', 'root', '141100', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;

// const mysql = require('mysql2');

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'node-complete',
//     password: '141100'
// });

// module.exports = pool.promise();