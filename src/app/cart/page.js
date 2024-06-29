import { auth } from "@/auth";
import Cart from "@/components/cart";
import { redirect } from "next/navigation";


const CartPage = async () => {
    const getSession = await auth();
    if (!getSession?.user) redirect('/unauth')
    return (
        <div>
            <Cart />
        </div>
    );
};

export default CartPage;