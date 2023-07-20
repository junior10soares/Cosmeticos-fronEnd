import { Dispatch, ReactNode, SetStateAction, createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface CosmeticoContextProviderProps {
    children: ReactNode
}

export interface ProductProps {
    product: {
        product: any;
        name: string;
        sku: number;
        imageObjects: {
            medium: string;
            small: string
        }[];
        priceSpecification: {
            price: number;
        };
    };
    quantity: number;
}

interface CosmeticoContext {
    products: ProductProps[];
    amountBag: ProductProps[]; // Update the type to be an array of ProductProps[]
    setAmountBag: Dispatch<SetStateAction<ProductProps[]>>; // Update the type to be Dispatch<SetStateAction<ProductProps[]>>
}

export const CosmeticoContext = createContext({} as CosmeticoContext)
export function CosmeticoContextProvider({ children }: CosmeticoContextProviderProps) {

    const [products, setProducts] = useState<ProductProps[]>([]);
    const [amountBag, setAmountBag] = useState<ProductProps[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchProducts = async () => {

            try {
                const response = await api.get('/d6e9a93f-9741-4494-b81e-637a8e9b8ddd');
                setProducts(response.data.items);
                setIsLoading(false);

            } catch (error) {
                console.log(error);
                setIsLoading(false);
                setError(true);
            }
        };

        fetchProducts();
    }, []);

    if (isLoading) {
        return <p>Carregando...</p>;
    }

    if (error) {
        return <p>Ocorreu um erro ao buscar os produtos.</p>;
    }

    return (
        <CosmeticoContext.Provider
            value={{
                products,
                amountBag,
                setAmountBag
            }}
        >
            {children}
        </CosmeticoContext.Provider>
    )
}
