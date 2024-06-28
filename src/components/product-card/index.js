'use client'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "../ui/button";


const ProductCard = ({ item }) => {
    return (
        <Card className='shadow-lg'>
            <CardHeader>
                <CardTitle>{item.title.slice(0,15)}</CardTitle>
                <CardDescription> {item.description.slice(0,50)}... </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="w-full">
                    <img src={item?.thumbnail} alt={item?.title} className="h-full w-full object-cover object-top" />
                </div>
            </CardContent>
            <CardFooter className='flex justify-between'>
                <p className="font-bold text-base">${item?.price}</p>
                <Button className='font-bold text-base'>Details</Button>
            </CardFooter>
        </Card>

    );
};

export default ProductCard;