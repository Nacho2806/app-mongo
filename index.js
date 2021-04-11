const express = require('express');
const routes = require('./routes');
const { dbConnection } = require('./database/config');
const cors = require ('cors'); 

//dotenv ->en un módulo de dependencia que carga variables de entorno desde un archivo .env a process.env
//esto nos da más seguridad dado que este archivo no debe compartirse contiene contraseñas y más.
require('dotenv').config();
 
//creando el server//
const app = express();

//base de datos
dbConnection();

//cors ->permite que el frontend nos haga consultas y pueda ver la información que está en nuestra data.
//además Cors genera como una capa de seguridad para limitar los req a una base de datos más personal.
app.use(cors());

//parseo de data
app.use(express.json());

//importamos y utilizamos nuestro Routing
app.use('/', routes());

app.get('/', (req, res) =>{
    res.send('Hola desde el inicio de la App de Mongo')
});

//lanzando el server online
app.listen(process.env.PORT, () => {
    console.log(`Server corriendo en el puerto: ${process.env.PORT}`);
});

//password NjtCJ7tzdkPb1qYY
//string de conexión
//mongodb+srv://Nacho2806:<password>@cluster0.5gsx1.mongodb.net/