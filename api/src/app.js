const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const routes = require('./routes/index')

// Importa las rutas de places y countries
const placesRoutes = require('./routes/places');
const countriesRoutes = require('./routes/countries');

// Importa la configuración de la base de datos
require('./db');

const server = express();

server.name = 'API';

server.use(cors({ origin: 'http://localhost:5173' }));
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


server.use('/', routes);

// Usamos las rutas de la API
// server.use('/places', placesRoutes); // Ruta base para places
// server.use('/countries', countriesRoutes); // Ruta base para countries

// Error catching endware.
server.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
});

// Configuración del servidor y puerto
// const PORT = process.env.PORT || 8000;
// server.listen(PORT, () => {
//     console.log(`Servidor en ejecución en el puerto ${PORT}`);
// });

// // Sincronizar la base de datos
// db.sequelize
//     .sync()
//     .then(() => {
//         console.log('Base de datos conectada');
//     })
//     .catch((error) => {
//         console.error('Error al conectar la base de datos:', error);
//     });

module.exports = server;
