import { X } from "@phosphor-icons/react";
import * as Dialog from '@radix-ui/react-dialog'; // biblioteca modal
import { ClosedButton, Content, ContentDiv, FooterContainer, FooterContent, Overlay } from "./styles";
import { useContext } from "react";
import { CosmeticoContext, ProductProps } from "../../context/CosmeticosContext";

export function BagModal() {
    const { amountBag } = useContext(CosmeticoContext);
    const { totalQuantity, totalPrice } = calculateBagTotal(amountBag);

    function calculateBagTotal(bag: ProductProps[]) {
        let totalQuantity = 0;
        let totalPrice = 0;

        for (const item of bag) {
            totalQuantity += item.quantity;
            totalPrice += item.quantity * item.product.priceSpecification.price;
        }
        return { totalQuantity, totalPrice };
    }

    return (
        <Dialog.Portal>
            <Overlay />
            <Content>
                <header>Sacola de compras</header>
                <ClosedButton>
                    <X size={24} />
                </ClosedButton>
                <ContentDiv>
                    {amountBag.map((item, index) => (
                        <main key={index}>
                            <img src={item.product.imageObjects[0].small} alt={item.product.name} />
                            <p>{item.product.name}</p>
                            <strong>{item.product.priceSpecification.price.toFixed(2)}R$</strong>
                        </main>
                    ))}
                </ContentDiv>

                <FooterContainer>
                    <FooterContent>
                        <p>Produtos {totalQuantity}</p>
                        <span>Total {totalPrice.toFixed(2)} R$</span>
                    </FooterContent>
                    <button>Seguir para pagamento</button>
                </FooterContainer>
            </Content>
        </Dialog.Portal>
    );
}
