export class Producto {
  private cantStock: number=0
  constructor(
    private nombre: string,
    private precio: number,
    ) {}
  // verProducto():Object {
  //   return {nombre:this.nombre,precio:this.precio}
  // }
  comprarProducto(){

  }
}

export class Inventario {
  private productos: Producto[] = [];

  agregarProducto(producto: Producto) {
    this.productos.push(producto)
  }

  verInventario() {
    return this.productos
  }
}

