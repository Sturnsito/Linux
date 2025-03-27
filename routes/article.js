// RUTAS: article.js


// Declaramos el objeto router para manejar las rutas con express
const express = require("express");
const router = express.Router();


// Declaramos el objeto controlador para nuestras rutas
const articleController = require("../controllers/article");




//Rutas de prueba
router.get("/ruta-de-prueba", articleController.prueba);
router.get("/cursos", articleController.cursos);
router.post("/create", articleController.create);


module.exports = router;
