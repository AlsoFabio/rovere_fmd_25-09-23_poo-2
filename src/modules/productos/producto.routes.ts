import { Router } from 'express';
import { ProductoService } from './producto.services';

const startProductoRouter = (productoServices: ProductoService) => {
    const prodRouter = Router();

    prodRouter.get('/', async (req, res) => {
        const productos = await productoServices.listProducto();
        res.status(200).json(productos)
    })

    prodRouter.get('/:name', async (req, res) => {
        const { name } = req.params
        const productos = await productoServices.findByNameProducto(name);
        res.status(200).json(productos)
    })

    prodRouter.post('/', async (req, res) => {
        const content = req.body;
        console.log(content);
        const newProd = await productoServices.createProducto(content);
        res.status(201).json(newProd);
    })

    prodRouter.put('/:id', async (req, res) => {
        const { id } = req.params
        const content = req.body;
        const updateProduct = await productoServices.updateProducto(id, content);
        res.status(201).json(updateProduct)
    })

    prodRouter.put('/delete/:id', async (req,res)=>{
        const { id } = req.params
        const deleteProduct = await productoServices.deleteProducto(id);
        res.status(204).json(deleteProduct)
    })

    return prodRouter
}

export { startProductoRouter }