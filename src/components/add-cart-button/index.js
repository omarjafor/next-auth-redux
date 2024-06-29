'use client'

import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";
import { addToCart, removeFromCart } from "@/redux/cart";

const AddCartButton = ({ product }) => {
    const {cart} = useSelector(state => state);
    const dispatch = useDispatch();
    console.log(cart?.cartItem);
    const handleAddCart = () => {
        dispatch(addToCart(product));
    }
    const handleRemoveCart = () => {
        dispatch(removeFromCart(product?.id));
    }
    return (
        <div className="mt-8 max-w-md">
            <Button variant="outline" type='button'
                onClick={cart?.cartItem.some(item => item.id === product.id) ? handleRemoveCart : handleAddCart}>
                {
                    cart?.cartItem.some(item => item.id === product.id) ? 'Remove from cart' : 'Add to cart'
                }
            </Button>
        </div>
    );
};

export default AddCartButton;