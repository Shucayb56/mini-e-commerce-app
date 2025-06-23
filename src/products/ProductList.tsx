import { useEffect, useState } from "react";
import { useSearchStore } from "../store/searchStore";
import ProductCard from "./ProductCard";
import { products } from "./products";
import Spinner from "./Spinner";
import Empty from "./Empty";
import type { Product } from "../types";

const ProductList = () => {
  const searchEngine = useSearchStore((state) => state.searchTerm);
  const [loading, setLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  // Simulate loading (you can skip this if fetching from API)
  useEffect(() => {
    setTimeout(() => {
      setFilteredProducts(products);
      setLoading(false);
    }, 2000);
  }, []);

  // Filter based on search

  const displayed = filteredProducts.filter((product: Product) => {
    const matchName = product.name
      .toLowerCase()
      .includes(searchEngine.toLowerCase());
    return matchName;
  });

  // 🔁 1. Loading UI
  if (loading) return <Spinner />;

  // ⛔ 2. Empty UI
  if (!loading && displayed.length === 0) {
    return <Empty message="No products match your search." />;
  }

  return (
    <>
      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
        {displayed.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
