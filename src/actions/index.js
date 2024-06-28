'use server'

// get all products 
export async function allProductsAction(){
    try {
        const result = await fetch('https://dummyjson.com/products', {
            method: 'GET',
            cache: 'no-store'
        })
        const data = await result.json();
        return{
            success:true,
            data: data?.products
        }
    } catch (error) {
        console.log(error);
        return{
            success: false,
            message: 'Some error occured! Please try again'
        }
    }
}