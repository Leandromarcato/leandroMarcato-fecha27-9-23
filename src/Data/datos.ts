// Persona.ts
interface Persona {
    nombre: string;
    apellido: string;
    correo: string;
    contraseña: string;
    domicilio: string;
    estado: string;
    pais: string;
  }
  

// Cliente.ts
interface Cliente extends Persona {
  correo: string;
}

// Vendedor.ts
interface Vendedor extends Persona {
  salario: number;
}

// Producto.ts
enum TipoVenta {
  Unidad = "Unidad",
  Cantidad = "Cantidad",
  Bolsa = "Bolsa",
}

interface Producto {
  nombre: string;
  precio: number;
  cantidadEnStock: number;
  tipoVenta: TipoVenta;
}

// Stock.ts
interface Stock {
  producto: Producto;
  cantidad: number;
}

// Venta.ts
interface Venta {
  id: number;
  producto: Producto;
  cantidad: number;
  tipoVenta: TipoVenta;
  total: number;
  fecha: Date;
}

export { Persona, Cliente, Vendedor, Producto, TipoVenta, Stock, Venta };

  