// MODELO: Article.js


// Esquema de la colección de artículos de mi blog
const { Schema, model } = require("mongoose");




// Esquema de nuestra colección
// Para ver más en la documentación de los schemas de mongoose ir a 
// https://mongoosejs.com/docs/schematypes.html
// En nuestro ejemplo la colección de articles tendrá documentos 
// compuestos por un título, contenido, fecha y una imagen
const ArticleSchema = Schema({
   title: {
       type: String,
       required: true
   },
   contain: {
       type: String,
       required: true
   },
   date: {
       type: Date,
       default: Date.now
   },
   image: {
       type: String,
       default: "default.png"
   }
});


module.exports = model("Article", ArticleSchema, "articles");
// “Article” es el nombre del esquema para la colección de “articles”
// de nuestra base de datos
