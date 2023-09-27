import express from 'express';
import ProductoController from './controller.product';
const router = express.Router();

const productoController = new ProductoController()

router.route('/')
.get(productoController.obtenerTodos)
.post(productoController.crearProducto)

router.route('/id')
.patch(productoController.actualizarProducto)
.delete(productoController.eliminarProducto)

export default router;
