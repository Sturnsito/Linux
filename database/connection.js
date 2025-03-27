// cargamos la funcionalidad de mongoose para conectar con la BD
const mongoose = require("mongoose");


// creamos una conexión en modo asíncrono y esperamos a que se produzca
// el retorno de la conexión
const connection = async () => {
   try{
       //conectamos con la base de datos mi_blog
       await mongoose.connect("mongodb://localhost:27017/mi_blog");


       console.log("Conectado correctamente a la base de datos mi_blog!!");
   }
   catch(err){
       console.log(err);
       throw new Error("No pudo conectarse a la base de datos");
   }
}


// exportamos la conexión para poder usarla en server.js
module.exports= {
   connection
}
