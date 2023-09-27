import mongoose, { Schema, Document } from 'mongoose';
import { Producto, TipoVenta } from '../Data/datos'; // Importa la interfaz

interface ProductoDocument extends Document, Producto {}

const productoSchema: Schema = new Schema({

  nombre: {
    type: String,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
  },
  cantidadEnStock: {
    type: Number,
    required: true,
  },
  
  tipoVenta: {
    type: String,
    enum: Object.values(TipoVenta),
    required: true,
  },
});

const ProductoModel = mongoose.model<ProductoDocument>('Producto', productoSchema);

export default ProductoModel;
