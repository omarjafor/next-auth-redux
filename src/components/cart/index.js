'use client'
import { useDispatch, useSelector } from "react-redux";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "../ui/button";
import { removeFromCart } from "@/redux/cart";

const Cart = () => {
    const {cart} = useSelector(state => state);
    const dispatch = useDispatch();
    console.log(cart?.cartItem);
    const handleRemoveCart = (id) => {
        dispatch(removeFromCart(id))
    }
    return (
        <div className="bg-white py-4">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-xl text-center font-extrabold text-[#333]">Your Cart Items</h2>
                <div className="overflow-y-auto">
                    <Table>
                        <TableCaption>A list of your recent invoices.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">Item No</TableHead>
                                <TableHead>Title</TableHead>
                                <TableHead>Thumbnail</TableHead>
                                <TableHead className="text-right">Amount</TableHead>
                                <TableHead className="text-center">Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {cart?.cartItem.map((invoice, index) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">{index+1}</TableCell>
                                    <TableCell>{invoice.title}</TableCell>
                                    <TableCell><img src={invoice.thumbnail} alt={invoice.title} className="h-28 w-28"/></TableCell>
                                    <TableCell className="text-right">${invoice.price}</TableCell>
                                    <TableCell className="text-center">
                                        <Button onClick={() => handleRemoveCart(invoice.id)}>Remove</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TableCell colSpan={3} className='font-bold'>Total</TableCell>
                                <TableCell className="text-right font-bold">
                                    ${
                                        cart?.cartItem.reduce((acc, cur) => acc+cur?.price , 0)
                                    }
                                </TableCell>
                            </TableRow>
                        </TableFooter>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default Cart;