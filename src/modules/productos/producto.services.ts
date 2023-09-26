import { Producto } from "./producto.entity";

export interface ProductoService {
    listProducto(): Promise<Array<Producto>>
    findByNameProducto(name: string): Promise<Array<Producto>>
    createProducto({ name, price, stock, category }: Producto): Promise<Producto | null>
    updateProducto(id:string,content: Producto): Promise<Producto | null>
    deleteProducto(id:string): Promise<Producto | null>
}