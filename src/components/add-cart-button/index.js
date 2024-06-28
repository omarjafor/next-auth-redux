'use client'

import { Button } from "../ui/button";

const AddCartButton = ({ product }) => {
    console.log(product);
    return (
        <div className="mt-8 max-w-md">
            <Button variant="outline">Add to Cart</Button>
        </div>
    );
};

export default AddCartButton;