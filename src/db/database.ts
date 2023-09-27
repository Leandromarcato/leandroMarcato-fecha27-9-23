import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

// URL de conexión a MongoDB
//const URI : String = process.env.MONGODB_LOCAL;

// Conexión a la base de datos
const conexion = mongoose.connect('mongodb://127.0.0.1:27017/iNVENTARIO')
  .then(() => {
    console.log('Conexión a MongoDB exitosa');
  })
  .catch((error) => {
    console.error('Error en la conexión a MongoDB:', error);
  });

  export default conexion;