import { useState } from "react";
import { useProducts } from "../../hooks/useProducts";
import ProductCard from "../ProductCard/ProductCard";

function ProductGrid() {
  const { products } = useProducts();
  const [visibleCount, setVisibleCount] = useState(8);

  const today = new Date().toISOString().split("T")[0];

  const filteredProducts = products.filter((product) => {
    return product.publishedDate <= today;
  });

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 8);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {filteredProducts.length > 0 ? (
        filteredProducts
          .slice(0, visibleCount)
          .map((filteredProduct) => (
            <ProductCard key={filteredProduct.id} product={filteredProduct} />
          ))
      ) : (
        <p className="col-span-full text-center">
          Inga produkter tillgängliga.
        </p>
      )}

      {filteredProducts.length > visibleCount ? (
        <div className="col-span-full text-center mt-4">
          <button
            className="bg-[#276B6C] hover:bg-[#73B8B7] px-5 py-2.5 rounded-md text-white font-bold"
            onClick={handleLoadMore}
          >
            Ladda fler
          </button>
        </div>
      ) : (
        <div className="col-span-full text-center mt-4">
          <p className="text-xl italic">Inga fler produkter att ladda</p>
        </div>
      )}
    </div>
  );
}

export default ProductGrid;
