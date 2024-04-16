import { Request, Response } from "express";
import { getAllProductsService, getProductsByIdService, postProductsService, updateProductsService } from "../services/products.services";
import { filterArrayOfObjects } from "../utils/filterFiles";

const insertProduct = async (req: Request, res: Response):  Promise<void> => {
    try {
        const { body } = req;
        const response = await postProductsService(body);
        res.status(200).json({ data: response })
    } catch (e) {
        res.json({
            error: e
        })
    }
};

const getProducts = async (_req: Request, res: Response): Promise<void> => {
    try {
        const response = await getAllProductsService();
        const productsFiltred = filterArrayOfObjects(response)
        res.status(200).json({ data: productsFiltred })
    } catch (e) {
        res.json({
            error: e
        })
    }
};

const getProductById = async ({ params }: Request, res: Response): Promise<void> => {
    try {
        const { id } = params;
        const response = await getProductsByIdService(id);
        res.status(200).json(response)
    } catch (e) {
        res.json({
            error: e
        })
    }
};

const updateProduct = async ({ params, body }: Request, res: Response): Promise<void> => {
    try {
        const { id } = params;
        const response = await updateProductsService(id, body);
        res.status(200).json(response)
    } catch (e) {
        res.json({
            error: e
        })
    }
};


export { insertProduct, getProducts, getProductById, updateProduct }