const mongoose = require("mongoose");

const dbConnection = () => {
    try {
        mongoose.connect(process.env.DB_CNN, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );

        console.log("base de datos online");  
    } catch (error) {
        console.log(error)
        throw new Error("Error conectando nuestra base de datos");
    }
};

module.exports = {
    dbConnection,
};