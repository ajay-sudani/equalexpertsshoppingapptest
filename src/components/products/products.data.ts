export interface IProduct {
    id: number;
    name: string;
    price: number;
    units: number;
};
export const ProductsData: IProduct[] = [
    {
        id: 1,
        name: "Product 1",
        price: 30,
        units: 20
    },
    {
        id: 2,
        name: "Product 2",
        price: 20,
        units: 0
    },
    {
        id: 3,
        name: "Product 3",
        price: 10,
        units: 20
    },
    {
        id: 4,
        name: "Product 4",
        price: 30,
        units: 20
    }
]