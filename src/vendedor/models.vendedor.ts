import mongoose, { Schema, Document } from 'mongoose';
import { Persona } from '../Data/datos';

interface VendedorModel extends Document, Persona {
  salario: number;

}

const VendedorSchema: Schema = new Schema({
  salario: { type: Number, required: true },
  
});

const Vendedor = mongoose.model<VendedorModel>('Vendedor', VendedorSchema);

export default Vendedor;
