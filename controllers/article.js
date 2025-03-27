// CONTROLADOR: article.js
const validator = require("validator");
// usaremos el esquema definido para salvar los artículos en la BD
const Article = require("home/sofi/OOMG/models/Arcticle.js");

// convertimos la función en asíncrona para que se espere a la 
// respuesta de la escritura en la base de datos
const create = async (req, res) => {


   // leemos los datos recibidos por post {title, contain}
   let parametros = req.body;


   //validamos los datos
   try {
       let validaTitle_isEmpty = validator.isEmpty(parametros.title);
       let validaTitleLength = validator.isLength(parametros.title, {min:5, max:30});


       let validaContain_isEmpty = validator.isEmpty(parametros.contain);


       if (validaTitle_isEmpty || !validaTitleLength || validaContain_isEmpty){
           throw new Error("Información recibida no validada!");
       }


   }catch(err){
       return  res.status(400).json({
           mensaje: "Se ha producido un error al validar datos en \/create",
           status: "error: "+err.message
       });
   }


   // creamos el objeto a guardar con los parámetros validados
   // el objeto sigue las propiedades del esquema Article definido
   const article = new Article(parametros);


   //guardamos el objeto en la base de datos
   try {
       // Usamos el método save del objeto article que hemos creado
       // con nuestro esquema con mongoose. Si todo va bien en
	 // articleSaved tendremos una copia del objeto json salvado
	 // y si se produce un error lo capturamos en el catch
       const articleSaved = await article.save();


       return res.status(200).json({
           mensaje: "Hemos guardado el artí­culo con /create",
           status: "success",
           article: articleSaved
       });
   } catch (err) {
       return res.status(400).json({
           mensaje: "No se ha guardado el artí­culo en /create",
           status: "error: " + err.message
       });
   }
};