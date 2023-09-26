import { Producto } from "./producto.entity";

export interface ProductoService {
    list(): Promise<Array<Producto>>
    findByName(name: string): Promise<Array<Producto>>
    create({name, price, stock, category}: Producto): Promise<Producto | null>
    update(id:string,{name,price,stock,category}: Producto): Promise<Producto | null>
    delete(id:string): Promise<Producto | null>
}