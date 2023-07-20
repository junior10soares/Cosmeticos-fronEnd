import { Bag } from "@phosphor-icons/react";
import logo from '../../assets/logo.png'
import { Container } from "./styles";
import { NavLink } from "react-router-dom";
import { CosmeticoContext, ProductProps } from "../../context/CosmeticosContext";
import { useContext } from "react";
import * as Dialog from '@radix-ui/react-dialog'; // biblioteca modal
import { BagModal } from "../../pages/BagModal";

export function Header() {

    const { amountBag, setAmountBag } = useContext(CosmeticoContext)

    const totalQuantity = Object.values(amountBag).reduce((total: number, item: ProductProps | number) => {
        if (typeof item === 'number') {
            return total + item
        }
        return total + item.quantity;
    }, 0)

    function resetAllBag() {
        setAmountBag([]);
    }

    return (
        <Container>
            <NavLink onClick={resetAllBag} to="/" title="Home">
                <img src={logo} alt="logo" height={90} />
            </NavLink>

            <Dialog.Root>
                <Dialog.Trigger asChild>
                    {totalQuantity > 0 && (
                        <button>
                            <Bag size={42} color="white" />
                            <span>{totalQuantity}</span>
                        </button>
                    )}
                </Dialog.Trigger>

                <BagModal />

            </Dialog.Root>

        </Container>
    );
}
