import { allProductsAction } from "@/actions";
import { auth } from "@/auth";
import ProductCard from "@/components/product-card";
import { redirect } from "next/navigation";

export default async function Home() {
  const products = await allProductsAction();
  const getSession = await auth();
  if (!getSession?.user) redirect('/unauth')

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2 className="text-4xl font-bold mb-4">Welcome To Home</h2>
      <div className="min-h-[80vh] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-6xl mx-auto p-2">
        {
          products && products?.data && products?.data.length > 0 ?
            products?.data.map(item => <ProductCard item={item} />)
            : <h2 className="text-4xl font-bold">No Products Here! Please wait for loading....</h2>
        }
      </div>
    </main>
  );
}
