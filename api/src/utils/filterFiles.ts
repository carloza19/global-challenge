import { Product, ProductFilterResponse, ProductResponse } from "../interfaces/product.interface";



const filterArrayOfObjects = (array: Product[]): ProductResponse[] => {

    const allowedKeys = new Set(Object.keys(ProductFilterResponse).filter(key => ProductFilterResponse[key as keyof Product]));

    return array.map(product => {
        const filteredProduct: any = {};
        for (const key of allowedKeys) {
            if (key in product) {
                filteredProduct[key] = product[key as keyof Product];
            }
        }
        return filteredProduct as ProductResponse;
    })
}

export { filterArrayOfObjects }