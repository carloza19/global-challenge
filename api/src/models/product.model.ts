import { Schema, model } from "mongoose";
import { Product } from "../interfaces/product.interface";


const ProductSchema = new Schema<Product>(
    {
        title: { type: String },
        description: { type: String },
        img: {
            src: { type: String },
            alt: { type: String },
        },
        price: { type: Number }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

// Creo el modelo que implementara el schema

const ProductModel = model('products', ProductSchema);

export default ProductModel