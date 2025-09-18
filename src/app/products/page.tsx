import ProductsClient from "./Products";

interface ProductsSearchParams {
  category?: string;
}
 
export default async function ProductsPage({ searchParams }: { searchParams: Promise<ProductsSearchParams>; }) {
  const { category = "all" } = await searchParams;
  return <ProductsClient category={category} />;
}
