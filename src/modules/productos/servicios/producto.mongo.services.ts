import { Producto } from "../producto.entity";
import { ProductoModelMongo } from "../producto.model";
import { ProductoService } from "../producto.services";

export class ProductoServiceMongo implements ProductoService {
    model = ProductoModelMongo

    listProducto(): Promise<Producto[]> {
        return this.model.find()
    }

    async findByNameProducto(name: string): Promise<Producto[]> {
        const result = await this.model.find({ name })
        return result
    }

    async createProducto(content: Producto): Promise<Producto | null> {
        const newProd = await this.model.create(content)
        return newProd
    }

    async updateProducto(id: string, content: Producto): Promise<Producto | null> {
        const result = await this.model.findById(id)
        await result?.updateOne(content)
        return result
    }

    async deleteProducto(id: string): Promise<Producto | null> {
        const result = await this.model.findById(id)
        await result?.updateOne({isAvailable: false})
        return result

    }

}