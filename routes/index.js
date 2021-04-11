const express = require('express');
const { crearPlayer, 
    traerPlayers, 
    unPlayer, 
    actualizarPlayer, 
    borrarPlayer
} = require('../controllers/playerControllers');
const router = express.Router();


module.exports = function() {
    //ruta para crear un player, método POST
    router.post('/crear', crearPlayer);

    //ruta para traer todos los players de la base de datos, métdo GET
    router.get('/players', traerPlayers);

    //ruta para traer a un solo player, método GET (método dinámico)
    router.get('/player/:id', unPlayer);

    //ruta para actualizar un player, método PUT (método dinámico)
    router.put('/player/:id', actualizarPlayer);

    //ruta para borrar un player, método DELETE (método dinámico)
    router.delete('/player/:id', borrarPlayer);
    
    return router;
};