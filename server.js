// server.js


const {connection} = require("./database/connection");
const express = require("express");
const cors = require("cors");




//Inicializar app
console.log("App de Node arrancada")


//Conectar a la BD
connection();


//Crear servidor de Node
const app = express();
const puerto = 3900;


//configurar cors (un body parser)
app.use(cors());


//convertir body a Json
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//crear rutas
const articleRoutes = require("./routes/article");


// cargo las rutas
// incorporo el prefijo /api
app.use("/api", articleRoutes);




// Endpoint "/" para atender a una petición http://localhost:3900/
// No me lo llevo a routes porque se le añadiría el prefijo /api
app.get("/", (req,res) =>{
   return res.status(200).send(`
       <h1>Ruta raí­z del servidor</h1>   
   `);
});


//Crear servidor y escuchar peticiones
app.listen(puerto, () => {
   console.log("Servidor corriendo en puerto "+puerto+".");
});