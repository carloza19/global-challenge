import { Product } from "../interfaces/product.interface";
import ProductModel from "../models/product.model";
import { handleHttp } from "../utils/error.handle";


const postProductsService = async (product: Product) => {
    const response = await ProductModel.create(product)
    return response
}

const getAllProductsService = (): Promise<Product[]> => {
    try {
        const response = ProductModel.find().lean()
        return response
    } catch {
        throw handleHttp('DB_ERROR', 500 ,'ERROR_GET_PRODUCTS');
    }

}

const getProductsByIdService = async (id: string): Promise<Product | null> => {
    try {
        const response = await ProductModel.findOne({ _id: id }).lean();
        return response;
    } catch {
        throw handleHttp('DB_ERROR', 500 ,'ERROR_GET_PRODUCT');
    }

};

const updateProductsService = async (id: string, data: Product): Promise<Product | null> => {
    const response = await ProductModel.findOneAndUpdate({ _id: id }, data, {
        new: true,
    });
    return response;
};

export { postProductsService, getAllProductsService, getProductsByIdService, updateProductsService }