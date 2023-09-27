import { Request, Response } from 'express';
import ProductoModel from './models.product'; 

class ProductoController {
  // Obtener todos los productos
  async obtenerTodos(req: Request, res: Response): Promise<void> {
    try {
      const productos = await ProductoModel.find();
      res.json(productos);
    } catch (error) {
      res.status(500).json({ error: 'Hubo un error al obtener los productos.' });
    }
  }

  // Obtener un producto por su ID
  async obtenerPorId(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const producto = await ProductoModel.findById(id);
      if (producto) {
        res.json(producto);
      } else {
        res.status(404).json({ error: 'Producto no encontrado.' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Hubo un error al obtener el producto.' });
    }
  }

  // Crear un nuevo producto
  async crearProducto(req: Request, res: Response): Promise<void> {
    const { nombre, precio, cantidadEnStock, tipoVenta } = req.body;
    const nuevoProducto = new ProductoModel({ nombre, precio, cantidadEnStock, tipoVenta });
    try {
      const productoGuardado = await nuevoProducto.save();
      res.status(201).json(productoGuardado);
    } catch (error) {
      res.status(500).json({ error: 'Hubo un error al crear el producto.' });
    }
  }

  // Actualizar un producto por su ID
  async actualizarProducto(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const { nombre, precio, cantidadEnStock, tipoVenta } = req.body;
    try {
      const productoActualizado = await ProductoModel.findByIdAndUpdate(
        id,
        { nombre, precio, cantidadEnStock, tipoVenta },
        { new: true }
      );
      if (productoActualizado) {
        res.json(productoActualizado);
      } else {
        res.status(404).json({ error: 'Producto no encontrado.' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Hubo un error al actualizar el producto.' });
    }
  }

  // Eliminar un producto por su ID
  async eliminarProducto(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const productoEliminado = await ProductoModel.findByIdAndDelete(id);
      if (productoEliminado) {
        res.json({ mensaje: 'Producto eliminado exitosamente.' });
      } else {
        res.status(404).json({ error: 'Producto no encontrado.' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Hubo un error al eliminar el producto.' });
    }
  }
}

export default ProductoController;
