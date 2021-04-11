const Player = require("../models/Player");

exports.crearPlayer = async(req, res) => {
//instanciamos nuestro Player (modelo)
// grabamos en la base de datos
const player = new Player(req.body)
    try {
      await player.save()
      const {nombre , apellido} = player;
      res.status(201).json({
          ok: true,
          message: `Se ha creado con éxito el nuevo Player: ${nombre}, ${apellido}`,
          body: player,
      });

    } catch (error) {
      console.log(error) 
      res.status(400).json({
          ok:false,
          message: "No se pudo grabar en la base de datos"
      })
    }
};

//controlador para traer todos los registros desde nuestra base de datos, método GET
exports.traerPlayers = async(req, res) => {
    try {
        const players = await Player.find({});
        res.status(200).json({
            ok: true,
            message:"Resultado de la búsqueda",
            body: players,
        });
        
    } catch (error) {
        res.status(400).json({
            ok: false,
            message: "No se pudo consultar la base de datos"
        });
        
    }
};

//controlador para traer a un solo player, método GET
exports.unPlayer = async(req, res) => {
    try {
        const player = await Player.findById({_id:req.params.id});
        res.status(200).json({
            ok: true,
            message: "Resultado de la búsqueda",
            body: player,
        });
    } catch (error) {
      res.status(400).json({
          ok: false,
          message: "No se pudo consultar a la base de datos de un player"
      });  
    }

};

//controlador para actualizar un player, método PUT
exports.actualizarPlayer = async(req, res) =>{
    try {
        const player = await Player.findByIdAndUpdate({_id:req.params.id},
            req.body,
            {
              new: true,  
            }
        );
        const {nombre, apellido} = player;
        res.status(200).json({
            ok: true,
            message:`Player: ${nombre}, ${apellido} se ha modificado con éxito!`,
            body: player
        })
    } catch (error) {
      res.status(400).json({
          ok: false,
          message:"No se puede modificar el player"
      });  
    }
};

//controlador para borrar un player de la base de datos, método DELETE
exports.borrarPlayer = async (req, res) => {
    try {
        await Player.findByIdAndDelete({_id:req.params.id})
        res.status(200).json({
            ok: true,
            message: "Se borro el player",
            
        })
    } catch (error) {
        res.status(400).json({
            ok: false,
            message: "No se pudo borrar el player"
        });
    }
};