import { Schema, model } from "mongoose";
import { Producto } from "./producto.entity";

const ProductoSchemaMongo = new Schema<Producto>({
    name:{
        type: String,
        required:true,
    },
    price:{
        type: Number,
        required:true,
    },
    stock:{
        type: Number,
        required:true,
        default:0,
    },
    category:{
        type: String,
        required: true,
    }
},
{
    timestamps: true,
    id: true
  }
)

// Modelo para un producto en MongoDB con Mongoose
const ProductoDelMongo = model<Producto>('Producto', ProductoSchemaMongo)



export { ProductoDelMongo }