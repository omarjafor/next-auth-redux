import { productDetailsAction } from '@/actions';
import { auth } from '@/auth';
import AddCartButton from '@/components/add-cart-button';
import { redirect } from 'next/navigation';

const ProductDetails = async({params}) => {
    const details = await productDetailsAction(params.details);
    console.log(details);
    const getSession = await auth();
    if (!getSession?.user) redirect('/unauth')

    return (
        <div className="max-w-6xl mx-auto p-2">
            <div className="p-6">
                <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12">
                    <div className="lg:col-span-3 bg-gray-100 w-full lg:sticky top-0 text-center p-8">
                        <img
                            src={details?.thumbnail}
                            alt={details?.title}
                            className="w-4/5 rounded object-cover"
                        />
                        <hr className="border-black border-2 my-6" />
                        <div className="flex flex-wrap gap-5 justify-center mx-auto">
                            {details?.images.map((imageItem) => (
                                <img
                                    src={imageItem}
                                    alt={imageItem}
                                    className="w-24 cursor-pointer"
                                />
                            ))}
                        </div>
                    </div>
                    <div className="lg:col-span-2">
                        <h2 className="text-3xl font-bold text-gray-900">
                            {details?.title}
                        </h2>
                        <p className="mt-5 text-xl font-bold mb-2">
                            ${details?.price}
                        </p>
                        <h3 className="text-lg">
                            {details?.description}
                        </h3>
                        <h3 className="font-bold my-2">
                           Rating: {details?.rating}
                        </h3>
                        <h3 className="font-bold mb-2">
                           Stock: {details?.stock}
                        </h3>
                        <h3 className="font-bold">
                            #{details?.tags[0]}, #{details?.tags[1]}
                        </h3>
                        <AddCartButton product={details}/>
                    </div>
                </div>
                <h2 className='text-xl font-bold text-center my-4'>Customer's Reviews</h2>
                <div className='my-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {
                        details?.reviews?.map(review => 
                        <div>
                            <h1 className='font-bold'>Rating : {review?.rating}/5</h1>
                            <h1 className='font-bold'>{review?.reviewerName}</h1>
                            <h2>{review?.reviewerEmail}</h2>
                            <p>{review?.date.slice(0,10)}</p>
                            <p className='font-bold'>{review?.comment}</p>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;