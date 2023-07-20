import { useContext } from "react";
import { ContainerBody, ContainerImg } from "./styles";
import { CosmeticoContext, ProductProps } from "../../context/CosmeticosContext";
import * as Dialog from '@radix-ui/react-dialog'; // biblioteca modal
import { BagModal } from "../../pages/BagModal";

export function Products() {
    const { products, setAmountBag, amountBag } = useContext(CosmeticoContext);

    function handleProductBuy(product: ProductProps) {//coloque + na bag
        updateProductInBag(product, 1);
    }

    function handleCountProductBag(product: ProductProps) {//coloque + na bag
        updateProductInBag(product, 1);
    }

    function updateProductInBag(product: ProductProps, quantityToAdd: number) {//recebe produto e qntd
        const existingProduct = amountBag.find((item) => item.product.sku === product.product.sku);//se tiver id igual

        if (existingProduct) {
            setAmountBag((prevAmountBag) =>
                prevAmountBag.map((item) =>
                    item.product.sku === product.product.sku ? { ...item, quantity: item.quantity + quantityToAdd } : item
                )
            );
        } else {
            setAmountBag((prevAmountBag) => [
                ...prevAmountBag,
                {
                    ...product,
                    quantity: quantityToAdd,
                },
            ]);
        }
    }

    return (
        <ContainerBody>
            <ContainerImg>
                {products.map((product, index) => (
                    <div key={index}>
                        <img src={product.product.imageObjects[0].medium} alt="" />
                        <p>{product.product.name}</p>
                        <span>{product.product.priceSpecification.price} R$</span>
                        <button onClick={() => handleCountProductBag(product)}>
                            Colocar na sacola
                        </button>
                        <Dialog.Root>
                            <Dialog.Trigger asChild>
                                <button onClick={() => handleProductBuy(product)}>
                                    Comprar agora
                                </button>
                            </Dialog.Trigger>
                            <BagModal />
                        </Dialog.Root>
                    </div>
                ))}
            </ContainerImg>
        </ContainerBody>
    );
}
