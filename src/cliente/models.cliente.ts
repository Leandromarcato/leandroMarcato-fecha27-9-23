import mongoose, { Schema, Document } from 'mongoose';
import  {Persona}  from '../Data/datos';

interface ClienteModel extends Document, Persona {
   
} 
  
const ClienteSchema: Schema = new Schema({
   
  nombre:{
    type: String,
    required: true
  },
  apellido:{
    type: String,
    required: true
  },
  correo:{
    type: String,
    required: true
  },
  contraseña:{
  type: String,
  required: true
  },

  domicilio:{
    type: String,
    required: true
  },

  estado: {
    type: String,
    required: true

  },

  pais:{
    type: String,
    required: true
  }


});

const Cliente = mongoose.model<ClienteModel>('Cliente', ClienteSchema);

export default Cliente;
