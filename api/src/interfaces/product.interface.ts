export interface Product {
    title: string,
    description: string,
    img: {
        src: string,
        alt: string,
    },
    price: number,
    createdAt: string,
    updatedAt: string
}

export interface ProductResponse {
    _id:string,
    title: string,
    description: string,
    img: {
        src: string,
        alt: string,
    },
    price: number,
    createdAt: string,
    updatedAt: string
}

export type ProductFilterFile = {
    [key in keyof ProductResponse]?: boolean;
}

export const ProductFilterResponse: ProductFilterFile = {
    _id:true,
    title: true,
    description: true,
    img: true,
    price: true,
    createdAt: true,
    updatedAt: true
}