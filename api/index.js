const server = require('./src/app');
const { conn } = require('./src/db');

const port = process.env.PORT || 3001;
//const { sequelize, Place, Country } = require('./src/db'); // Cambia './db' por './src/db'

conn.sync({ force: true }).then(() => {
    server.listen(port, () => {
        console.log(`Server is listening at port ${port}`);
    });
});